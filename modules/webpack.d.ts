interface DefaultOptions {
  all?: boolean;
  cache?: boolean;
  force?: boolean;
  defaultExport?: boolean;
}

interface BulkOptions extends DefaultOptions {
  wait?: boolean;
}

interface ExtendedOptions extends BulkOptions {
  bulk?: boolean;
}

interface DisplayNameOptions extends ExtendedOptions {
  default?: boolean;
}

interface KeywordOptions extends DefaultOptions {
  caseSensitive?: boolean;
}

type SearchFilter = (module: any) => boolean;

declare module '@webpack' {
  /**
   * Searches Discord's webpack cache for a module using a predicate (a function that returns a boolean).
   */
  export function getModule(filter: SearchFilter, options?: DefaultOptions): any;

  /**
   * Alias for getModule.
   */
  export function findModule(filter: SearchFilter, options?: DefaultOptions): any;

  /**
   * Alias for getModule.
   */
  export function get(filter: SearchFilter, options?: DefaultOptions): any;

  /**
   * Alias for getModule.
   */
  export function find(filter: SearchFilter, options?: DefaultOptions): any;

  /**
   * Identical to getModule except it automatically assigns the options "{ all: true }" and doesn't allow any other options. 
   */
  export function getModules(filter: SearchFilter): any;

  /**
   * Alias for getModules.
   */
  export function findModules(filter: SearchFilter): any;

  /**
   * Takes a filter and checks for it on every webpack push (helper for fetching lazy loaded modules).
   */
  export function getLazy(filter: Function): Promise<any>;

  /**
   * Alias for getLazy.
   */
  export function findLazy(filter: Function): Promise<any>;

  /**
   * Takes an array of props and searches webpack for a match where every property is on the object.
   * 
   * Tip: it's not required to be a stupid array like powercord, you spread them out instead:
   * ```
   * getByProps('prop1', 'prop2', options);
   * getByProps('prop1', 'prop2');
   * ```
   */
  export function getByProps(...options: [...props: string[], options: ExtendedOptions]): any;
  export function findByProps(...options: [...props: string[], options: ExtendedOptions]): any;

  /**
   * Takes a displayName argument and searches webpack cache for a direct match.
   * 
   * Tip: you can set the "default" or "defaultExport" option to "false" to return it in a way that lets you patch it.
   * ```
   * getByDisplayName('Switch');
   * getByDisplayName('Switch', { default: false });
   * ```
   */
  export function getByDisplayName(displayName: string, options?: DisplayNameOptions): any;

  /**
   * Alias for getByDisplayName.
   */
  export function findByDisplayName(displayName: string, options?: DisplayNameOptions): any;

  /**
   * Converts all "stringable" modules to a string and searches for an indirect match much like getByProps.
   */
  export function getByString(...options: [...strings: string[], options: ExtendedOptions]): any;

  /**
   * Alias for getByString.
   */
  export function findByString(...options: [...strings: string[], options: ExtendedOptions]): any;
  export function getByDefaultString(...options: [...strings: string[], options: ExtendedOptions]): any;
  export function findByDefaultString(...options: [...strings: string[], options: ExtendedOptions]): any;

  /**
   * A quicker way to fetch multiple modules at a time.
   * 
   * Takes an array of filter functions and outputs an array of modules in the same order.
   * 
   * Tip: you can destructure them!
   */
  export function bulk(...options: [...filters: SearchFilter[], options: BulkOptions]): any;

  /**
     * Only to be used as a developer tool for finding modules.
     * 
     * It takes a string and searches every object key on every module exports for an indirect match (String.indexOf > -1).
     */
  export function getByKeyword(keyword: string, options?: KeywordOptions): any;

  /**
   * Alias for getByKeyword.
   */
  export function findByKeyword(keyword: string, options?: KeywordOptions): any;

  // Overloads
  export function bulk(...filters: SearchFilter[]): any;
  export function getByProps(...props: string[]): any;
  export function findByProps(...props: string[]): any;
  export function getByString(...strings: string[]): any;
  export function findByString(...strings: string[]): any;
  export function getByDefaultString(...strings: string[]): any;
  export function findByDefaultString(...strings: string[]): any;

  export const filters: {
    byProps(...props: string[]): SearchFilter;
    byDisplayName(name: string, dexport: boolean): SearchFilter;
    byDefaultString(...strings: string[]): SearchFilter;
    byString(...strings: string[]): SearchFilter;
  };

  export * as default from '@webpack';
  export * as common from '@webpack/common';
}

declare module '@webpack/common' {
  import { SelectedStore, constants } from 'discord-types';

  export const Flux: any;
  export const modal: any;
  export const Locale: any;
  export const messages: any;
  export const Dispatcher: any;
  export const contextMenu: any;
  export const HighlightJS: any;
  export const constants: constants;
  export function zustand(): Function;
  export const channels: SelectedStore;
  export const React: typeof import('react');
  export const ReactDOM: typeof import('react-dom');

  export * as default from '@webpack/common';
}