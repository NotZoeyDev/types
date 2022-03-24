declare interface Manifest {
  id: string,
  name: string,
  version: string,
  description: string,
  author: {
    name: string,
    id: string,
  }[],
  authors: {
    name: string,
    id: string,
  }[],
}

declare module '@components/Category' {
  export default class Category extends React.Component<{
    title: string;
    description: string;
    opened: boolean;
    onChange: Function;
    children: React.Component;
    icon: () => React.Component;
  }> { }
}

declare module '@api/announcements' {
  /**
   * @param options.color require('@components').Notices.NoticeColors
   * @param options.callback Runs when the announcement is closed via the close button.
   */
  export function send(options: {
    id: string;
    color?: string;
    message?: string;
    callback?: Function;
    button?: {
      text: string;
      onClick: Function;
    };
  }): string;

  export function close(id: string): void;

  export * as default from '@api/announcements';
}

declare module '@api/clyde' {
  import { Channel } from 'discord-types';

  export const defaultMessage: {
    state: 'SENT',
    author: {
      avatar: '__UNBOUND__',
      id: '-1',
      bot: true,
      discriminator: '0000',
      username: 'Unbound';
    },
    content: 'Message.';
  };

  export function send(channel: Channel | undefined, message: any): void;

  export * as default from '@api/clyde';
}

declare module '@api/commands' {
  import { Channel, Guild, CommandOptions } from 'discord-types';

  export const commands: Map<string, object>;
  export const section: {
    id: string,
    type: number,
    name: string,
    icon: string,
  };

  export function unregister(id: string): void;
  export function register(options: {
    command: string;
    execute: (args: {
      name: string;
      type: number;
      value: string;
      focused: unknown;
    }[], routes: {
      channel: Channel;
      guild: Guild | undefined;
    }) => void;
    description: string;
    options?: CommandOptions[];
  }): void;

  export * as default from '@api/commands';
}


declare module '@api' {
  export { default as clyde } from '@api/clyde';
  export { default as commands } from '@api/commands';
  export { default as announcements } from '@api/announcements';
}



declare module '@constants' {
  import Theme from '@structures/theme';

  export const paths: {
    root: string,
    settings: string,
  };

  export const regex: {
    newline: RegExp,
  };

  export const console: {
    success: {
      'background-color': '#6bffb2',
      'color': 'black',
      'padding': '2.5px 5px',
      'border-radius': '5px';
    },
    warn: {
      'background-color': '#fcee83',
      'color': 'black',
      'padding': '2.5px 5px',
      'border-radius': '5px';
    },
    error: {
      'background-color': '#ff0000',
      'color': 'white',
      'padding': '2.5px 5px',
      'border-radius': '5px',
      'margin-right': '2px';
    },
    log: {
      'background-color': '#990000',
      'padding': '2.5px 5px',
      'border-radius': '5px',
      'margin-right': '3px';
    };
  };

  export const colors: {
    primary: '#990000';
  };

  export const avatar: 'https://i.imgur.com/SeDNYyJ.png';

  export const entities: {
    themes: (instance: any, data: Manifest) => Theme;
    plugins: (...args) => unknown;
  };

  export * as default from '@constants';
}

declare module '@modules' {
  export * as webpack from '@webpack';
  export { default as patcher } from '@patcher';
  export { default as logger } from '@modules/logger';
  export { default as constants } from '@modules/constants';
}

declare module '@modules/constants' {
  export * from '@constants';
  export { default as default } from '@constants';
}

declare module '@modules/webpack' {
  export * from '@webpack';
}

declare module '@modules/webpack/common' {
  export * from '@webpack';
}

declare module '@modules/patcher' {
  export * from '@patcher';
}

declare module '@modules/logger' {
  export default class Logger {
    constructor(...name: string[]);

    name: string[];

    log: (...args: any[]) => void;
    warn: (...args: any[]) => void;
    error: (...args: any[]) => void;
    success: (...args: any[]) => void;
  }
}

interface Patch {
  mdl: any;
  func: string;
  caller: string;
  original: Function;
  unpatch: () => void;
  patches: {
    type: string;
    caller: string;
    unpatch: () => void;
    id: number | undefined;
    callback: (_: any, args: any[], res: any) => any;
  }[];
}

declare module '@patcher' {
  export const patches: Patch[];

  export function create(name: string): {
    unpatchAll(): void;
    getPatchesByCaller(id: string): Patch[];
    after(mdl: Function | object, func: string, callback: Function, once?: boolean): () => void;
    before(mdl: Function | object, func: string, callback: Function, once?: boolean): () => void;
    instead(mdl: Function | object, func: string, callback: Function, once?: boolean): () => void;
  };

  export function getPatchesByCaller(id: string): Patch[];

  export function unpatchAll(caller: string): void;

  // export function override(patch: Patch): () => any;

  // export function push([caller, mdl, func]): Patch;
  // export function get(caller: string, mdl: Function | object, func: string): Patch;

  // export function patch(caller: string, mdl: Function | object, func: string, callback: Function, type: 'after' | 'before' | 'instead'): () => void;

  export function after(caller: string, mdl: Function | object, func: string, callback: Function, once?: boolean): () => void;
  export function before(caller: string, mdl: Function | object, func: string, callback: Function, once?: boolean): () => void;
  export function instead(caller: string, mdl: Function | object, func: string, callback: Function, once?: boolean): () => void;

  export * as default from '@patcher';
}

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

declare module '@structures/addon' {
  export default class Addon {
    constructor(instance: any);
    instance: any;
    started: boolean;

    start(): void;
    stop(): void;
    load(): void;

    get color(): string;

    get manifest(): Manifest;

    /**
     * @deprecated
     */
    get dependencies(): string[];
  }
}

declare module '@structures' {
  export { default as addon } from '@structures/addon';
  export { default as theme } from '@structures/theme';
  export { default as plugin } from '@structures/plugin';
  export { default as manager } from '@structures/manager';
  export { default as stacklesserror } from '@structures/stacklesserror';
}

declare module '@structures/manager' {
  import { EventEmitter } from 'events';

  export default class Manager extends EventEmitter {
    constructor(type: string);

    type: string;
    path: string;

    entities: Map<string, any>;

    logger: import('@modules').logger;

    settings: any;

    panel: React.ReactElement;

    watcher: import('fs').FSWatcher;

    destroy(): void;

    resolve(idOrName: string | object): any;

    loadAll(): void;

    assignData(data: any, object: object, path: string): void;

    validateManifest(data: Manifest): void;

    load(id: string): { instance: any; };

    start(id: string): void;

    stop(id: string): void;

    unload(id: string): void;

    unloadAll(): void;

    delete(id: string): void;

    reload(id: string, silent?: boolean): any;

    fetch(): string[];

    isEnabled(id: string): boolean;

    enable(id: string): void;

    disable(id: string): void;

    toggle(id: string): void;

    get get(): (idOrName: string | object) => any;
  }
}

declare module '@structures/plugin' {
  import Addon from '@structures/addon';

  export default class Plugin extends Addon {
    constructor(instance: any, data: Manifest);

    logger: import('@modules').logger;
    settings: unknown;
    styles: unknown[];
  }
}

declare module '@structures/stacklesserror' {
  export default class StacklessError extends Error {
    constructor(message: string);
  }
}

declare module '@structures/theme' {
  import Addon from '@structures/addon';

  export default class Theme extends Addon {
    constructor(instance: any, data: Manifest);

    logger: import('@modules').logger;
    settings: unknown;

    // @ts-ignore
    start(css: unknown): void;

    stop(): void;
    apply(): void;
  }
}

declare module '@utilities/appendCSS' {
  /**
   * @name appendCSS
   * @description Appends CSS to the DOM's head
   * @param {string} id - The unique identifier for this CSS application
   * @param {string} css - The CSS string to apply to the DOM
   * @return {function} Returns the function that removes the instance of this DOM element
   */

  export default function (id: string, css: string): () => void;
}

declare module '@utilities/bindAll' {
  /**
   * @name bindAll
   * @description Binds functions to the passed context.
   * @param {any} ctx - The context to bind the functions to
   * @param {string[]} names - The names of the functions that exist on the context
   */

  export default function (ctx: any, names: string[]): void;
}

declare module '@utilities/capitalize' {
  /**
   * @name capitalize
   * @description Capitalizes the first letter of a string.
   * @param {string} string - The string to capitalize the first letter of
   * @return {string} Returns a string with an uppercased first letter
   */

  export default function (string: string): string;
}

declare module '@utilities/classnames' {
  /**
   * @name classnames
   * @description Joins all passed strings together and handles null values.
   * @param {...string} classes - The strings to join and filter
   * @return {string} Returns all the parsed strings joined as a string
   */

  export default function (...classes: string[]): string;
}

declare module '@utilities/createStore' {
  /**
   * @name createStore
   * @description Creates a Flux store with the data provided
   * @param {object} data - The data to pass to the store (must be an object)
   * @return {object} Returns an object containing the ID, the initialized Flux store
   * & its data and functions that go along with it.
   */

  export default function (data: object): {
    get: (key: string, defaults?: any) => any,
    set: (key: string, value?: any) => any,
    delete: (key: string) => any,
    store: any,
    storage: any,
    id: string,
  };
}

declare module '@utilities/findInReactTree' {
  /**
   * @name findInReactTree
   * @description Traverses through a react tree
   * @param {(object|array)} tree - The tree to search through
   * @param {function} filter - The filter to run on the tree passed as the first argument
   * @param {object} options - Options to pass to findInTree
   * @return {any} Returns null if nothing is filtered or the value that is filtered.
   */

  export default function (tree: object | any[], filter: (node: object | any[]) => boolean, options?: { ignore?: any[]; walkable?: any[]; maxProperties?: number; }): any;
}

declare module '@utilities/findInTree' {
  /**
   * @name findInTree
   * @description Searches through the walkables provided inside a tree.
   * @param {object|array} tree - The tree to search
   * @param {function} filter - The filter to use to resolve the search
   * @param {object} options - The options for the search
   * @param {array} [options.ignore=[]] - The keys to ignore in the search
   * @param {array} [options.walkable=[]] - The keys to walk/traverse in the search
   * @param {array} [options.maxProperties=100] - The keys to walk/traverse in the search
   * @return {function} Returns the function with a cacheable value
   */

  export default function (tree: object | any[], filter: (node: object | any[]) => boolean, options?: { ignore?: any[]; walkable?: any[]; maxProperties?: number; }): any;
}

declare module '@utilities/getNestedProp' {
  /**
   * @name getNestedProp
   * @description Gets a nested prop from an object safely by returning null if nothing is found
   * @param {object} object - The object to get the nested prop from
   * @param {string} prop - The filter to run on the tree passed as the first argument
   * @return {any} Returns null if no prop is found or the prop if it's found.
   */

  export default function (object: object, prop: string): any;
}

declare module '@utilities/getNestedType' {
  export default function getNestedType(component: React.Component): any;
}

declare module '@utilities/getOwnerInstance' {
  /**
   * @name getOwnerInstance
   * @description Gets the parent/owner instance the component belongs to.
   * @param {HTMLElement} node - The element to find the instance for
   * @param {function} filter - The filter to apply for the search
   * @return {function} Returns the function with a cacheable value
   */

  export default function (node: HTMLElement, filter: Function): Function;
}

declare module '@utilities/getReactInstance' {
  /**
   * @name getReactInstance
   * @description Gets a react instance from an HTML element
   * @param {HTMLElement} element - HTML element to get the react instance from
   * @param {function} filter - The filter to run on the tree passed as the first argument
   * @return {any} Returns null if no prop is found or the prop if it's found.
   */

  export default function (element: HTMLElement): any;
}

declare module '@utilities' {
  export { default as noop } from '@utilities/noop';
  export { default as uuid } from '@utilities/uuid';
  export { default as sleep } from '@utilities/sleep';
  export { default as bindAll } from '@utilities/bindAll';
  export { default as memoize } from '@utilities/memoize';
  export { default as waitFor } from '@utilities/waitFor';
  export { default as appendCSS } from '@utilities/appendCSS';
  export { default as capitalize } from '@utilities/capitalize';
  export { default as classnames } from '@utilities/classnames';
  export { default as findInTree } from '@utilities/findInTree';
  export { default as createStore } from '@utilities/createStore';
  export { default as getNestedProp } from '@utilities/getNestedProp';
  export { default as getNestedType } from '@utilities/getNestedType';
  export { default as findInReactTree } from '@utilities/findInReactTree';
  export { default as getOwnerInstance } from '@utilities/getOwnerInstance';
  export { default as getReactInstance } from '@utilities/getReactInstance';
  export { default as parseStyleObject } from '@utilities/parseStyleObject';
}

declare module '@utilities/memoize' {
  /**
   * @name memoize
   * @description Gives you a function which caches its return value on the first run.
   * @param {function} func - The function to memoize
   * @return {function} Returns the function with a cacheable value
   */

  export default function (func: Function): Function;
}

declare module '@utilities/noop' {
  /**
   * @name noop
   * @description Empty function
   */

  export default noop;
  const noop: () => void;
}

declare module '@utilities/parseStyleObject' {
  /**
   * @name parseStyleObject
   * @description Parses React-like style objects into a CSS string
   * @param {object} style - The object to turn into a CSS property string
   * @param {boolean} [line=false] - Newline each style
   * @return {string} Returns CSS properties to be put inside a selector
   */

  export default function (style: object, line?: boolean): string;
}

declare module '@utilities/sleep' {
  /**
   * @name sleep
   * @description Allows functionality of a python-like sleep method
   * @param {number} time - The time to wait before resolving the promise.
   * @return {Promise<void>} Returns Promise<void>
   */

  export default function (time: number): Promise<void>;
}

declare module '@utilities/uuid' {
  /**
   * @name uuid
   * @description Returns a UUID with the length provided (default: 30)
   * @param {number} [length=30] - The length of the randomized UUID
   * @return {string} Returns the randomized UUID.
   */

  export default function (length?: number): string;
}

declare module '@utilities/waitFor' {
  /**
   * @name waitFor
   * @description Returns an element once it is found in the DOM
   * @param {string} selector - The query/selector to pass to document.querySelector
   * @return {Promise<HTMLElement>} Returns Promise<HTMLElement>
   */

  export default function (selector: string): Promise<HTMLElement>;
}

