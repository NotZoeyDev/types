interface DefaultOptions {
  all?: boolean;
  cache?: boolean;
  force?: boolean;
  defaultExport?: boolean;
}

interface WaitForOptions {
  retries?: number;
  all?: boolean;
  forever?: boolean;
  delay?: number;
}

interface ConditionalDefault extends DefaultOptions {
  wait?: false;
}

interface ConditionalWaitFor extends WaitForOptions {
  wait: true;
}

interface ConditionalBulk extends ConditionalDefault {
  bulk: true;
}

interface ConditionalWaitBulk extends ConditionalWaitFor {
  bulk: true;
}

interface DisplayNameOptions {
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
  export function getByProps(...options: [...props: string[], options: ConditionalDefault]): any;

  /**
   * Alias for getByProps.
   */
  export function findByProps(...options: [...props: string[], options: ConditionalDefault]): any;

  /**
   * Takes a displayName argument and searches webpack cache for a direct match.
   * 
   * Tip: you can set the "default" or "defaultExport" option to "false" to return it in a way that lets you patch it.
   * ```
   * getByDisplayName('Switch');
   * getByDisplayName('Switch', { default: false });
   * ```
   */
  export function getByDisplayName(displayName: string, options?: DisplayNameOptions & ConditionalDefault): any;

  /**
   * Alias for getByDisplayName.
   */
  export function findByDisplayName(displayName: string, options?: DisplayNameOptions & ConditionalDefault): any;

  /**
   * Converts all "stringable" modules to a string and searches for an indirect match much like getByProps.
   */
  export function getByString(...options: [...strings: string[], options: ConditionalDefault]): any;

  /**
   * Alias for getByString.
   */
  export function findByString(...options: [...strings: string[], options: ConditionalDefault]): any;

  /**
   * Similar to getByString except it stringifys the default export.
   */
  export function getByDefaultString(...options: [...strings: string[], options: ConditionalDefault]): any;

  /**
   * Alias for getByDefaultString.
   */
  export function findByDefaultString(...options: [...strings: string[], options: ConditionalDefault]): any;

  /**
   * A quicker way to fetch multiple modules at a time.
   * 
   * Takes an array of filter functions and outputs an array of modules in the same order.
   * ```
   * const [
   *   Users,
   *   StatusStore,
   *   MemberListItem,
   *   PrivateChannel,
   * ] = bulk(
   *   filters.byProps('getUser', 'getCurrentUser'),
   *   filters.byProps('getStatusColor'),
   *   filters.byDisplayName('MemberListItem'),
   *   filters.byDisplayName('PrivateChannel'),
   * );
   * ```
   */
  export function bulk(...options: [...filters: SearchFilter[], options: ConditionalDefault]): any;

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
  export function bulk(...options: [...filters: SearchFilter[], options: ConditionalWaitFor]): any;

  export function getByProps(...props: string[]): any;
  export function getByProps(...options: [...props: string[], options: ConditionalWaitFor]);
  export function getByProps(...options: [...props: (string | string[])[], options: ConditionalBulk]);
  export function getByProps(...options: [...props: (string | string[])[], options: ConditionalWaitBulk]);

  export function findByProps(...props: string[]): any;
  export function findByProps(...options: [...props: string[], options: ConditionalWaitFor]): any;
  export function findByProps(...options: [...props: (string | string[])[], options: ConditionalBulk]): any;
  export function findByProps(...options: [...props: (string | string[])[], options: ConditionalWaitBulk]): any;

  export function getByDisplayName(displayName: string): any;
  export function getByDisplayName(displayName: string, options: DisplayNameOptions & ConditionalWaitFor): any;
  export function getByDisplayName(...options: [...displayNames: string[], options: DisplayNameOptions & ConditionalBulk]): any;
  export function getByDisplayName(...options: [...displayNames: string[], options: DisplayNameOptions & ConditionalWaitBulk]): any;

  export function getByString(...strings: string[]): any;
  export function getByString(...options: [...props: string[], options: ConditionalWaitFor]): any;
  export function getByString(...options: [...props: (string | string[])[], options: ConditionalBulk]): any;
  export function getByString(...options: [...props: (string | string[])[], options: ConditionalWaitBulk]): any;

  export function findByString(...strings: string[]): any;
  export function findByString(...options: [...props: string[], options: ConditionalWaitFor]): any;
  export function findByString(...options: [...props: (string | string[])[], options: ConditionalBulk]): any;
  export function findByString(...options: [...props: (string | string[])[], options: ConditionalWaitBulk]): any;

  export function getByDefaultString(...strings: string[]): any;
  export function getByDefaultString(...options: [...props: string[], options: ConditionalWaitFor]): any;
  export function getByDefaultString(...options: [...props: (string | string[])[], options: ConditionalBulk]): any;
  export function getByDefaultString(...options: [...props: (string | string[])[], options: ConditionalWaitBulk]): any;

  export function findByDefaultString(...strings: string[]): any;
  export function findByDefaultString(...options: [...props: string[], options: ConditionalWaitFor]): any;
  export function findByDefaultString(...options: [...props: (string | string[])[], options: ConditionalBulk]): any;
  export function findByDefaultString(...options: [...props: (string | string[])[], options: ConditionalWaitBulk]): any;

  /**
   * Quick filters for the "bulk" function.
   */
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
  export const constants: constants;
  export function zustand(): Function;
  export const channels: SelectedStore;
  export const HighlightJS: typeof hljs;
  export const React: typeof import('react');
  export const ReactDOM: typeof import('react-dom');

  export * as default from '@webpack/common';
}