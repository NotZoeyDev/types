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
  export function init(): Promise<any>;
  export function getModules(filter: SearchFilter): any;
  export function findModules(filter: SearchFilter): any;
  export function getLazy(filter: Function): Promise<any>;
  export function findLazy(filter: Function): Promise<any>;
  export function get(filter: SearchFilter, options?: DefaultOptions): any;
  export function find(filter: SearchFilter, options?: DefaultOptions): any;
  export function getByKeyword(keyword: string, options?: KeywordOptions): any;
  export function findByKeyword(keyword: string, options?: KeywordOptions): any;
  export function getModule(filter: SearchFilter, options?: DefaultOptions): any;
  export function findModule(filter: SearchFilter, options?: DefaultOptions): any;
  export function getByDisplayName(displayName: string, options?: DisplayNameOptions): any;
  export function findByDisplayName(displayName: string, options?: DisplayNameOptions): any;
  export function bulk(...options: [...filters: SearchFilter[], options: BulkOptions]): any;
  export function getByProps(...options: [...props: string[], options: ExtendedOptions]): any;
  export function findByProps(...options: [...props: string[], options: ExtendedOptions]): any;
  export function getByString(...options: [...strings: string[], options: ExtendedOptions]): any;
  export function findByString(...options: [...strings: string[], options: ExtendedOptions]): any;
  export function getByDefaultString(...options: [...strings: string[], options: ExtendedOptions]): any;
  export function findByDefaultString(...options: [...strings: string[], options: ExtendedOptions]): any;

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