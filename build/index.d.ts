/**
 * The plugin/theme manifest.
 */
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

declare module '@components/AsyncComponent' {
  /**
   * Shows a "suspense" component while the first component is being asynchronously loaded.
   */
  const AsyncComponent: {
    from(promise: () => Promise<React.Component>, suspense: React.Component): React.NamedExoticComponent;
  };

  export default AsyncComponent;
}

declare module '@components/Category' {
  /**
   * A sexy component for grouping React components.
   */
  export default class Category extends React.Component<{
    title: string;
    description: string;
    opened: boolean;
    onChange: Function;
    children: React.Component;
    icon: () => React.Component;
  }> { }
}

declare module '@components/ErrorBoundary' {
  /**
   * A wrapper to catch a component in the event that it throws a React invariant error.
   */
  export default class ErrorBoundary extends React.Component { }
}

declare module '@components/ErrorState' {
  /**
   * A simple error message component.
   */
  export default class ErrorState extends React.Component<{
    text?: string;
  }> { }
}

declare module '@components/HorizontalDivider' {
  /**
   * A simple divider component.
   */
  export default class HorizontalDivider extends React.Component<{
    height?: string;
    width?: string;
  }> { }
}

declare module '@components/Icon' {
  /**
   * A proxy to all discord icons.
   * 
   * Input the displayName of the icon with the "name" property.
   */
  export default class Icon extends React.Component<{
    name: string;
    [prop: string]: any;
  }> {
    static get Names(): React.Component[];
  }
}

declare module '@components/SettingsItem' {
  /**
   * A simple settings switch.
   */
  export default class SettingsItem extends React.Component<{
    title: string;
    note?: string;
    required?: boolean;
    hasMargin?: boolean;
    children?: React.ReactNode;
  }> { }
}

declare module '@components' {
  export { default as Icon } from '@components/Icon';
  export { default as Category } from '@components/Category';
  export { default as ErrorState } from '@components/ErrorState';
  export { default as SettingsItem } from '@components/SettingsItem';
  export { default as ErrorBoundary } from '@components/ErrorBoundary';
  export { default as AsyncComponent } from '@components/AsyncComponent';
  export { default as HorizontalDivider } from '@components/HorizontalDivider';

  export const Button: React.Component;
  export const FormNotice: React.Component;
  export const Card: React.Component;
  export const Caret: React.Component;
  export const Clickable: React.Component;
  export const Spinner: React.Component;
  export const FormTitle: React.Component;
  export const FormItem: React.Component;
  export const FormText: React.Component;
  export const HeaderBar: React.Component;
  export const TabBar: React.Component;
  export const Text: React.Component;
  export const Flex: React.Component;
  export const Tooltip: React.Component;
  export const RelativeTooltip: React.Component;
  export const Menu: React.Component;
  export const Divider: React.Component;
  export const Switch: React.Component;
  export const Markdown: React.Component;
  export const SearchBar: React.Component;
  export const ScrollerThin: React.Component;
  export const Popout: React.Component;
  export const Anchor: React.Component;
  export const Notices: React.Component;
  export const TextInput: React.Component;
}

declare module '@api/announcements' {
  /**
   * Send an announcement.
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

  /**
   * Close an announcement by its ID.
   */
  export function close(id: string): void;

  export * as default from '@api/announcements';
}

declare module '@api/clyde' {
  import { Channel } from 'discord-types';

  /**
   * The default message that is sent if nothing is applied.
   */
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

  /**
   * Sends a bot message to the provided channel object.
   */
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

  /**
   * Unregisters a command by its ID.
   */
  export function unregister(id: string): void;

  /**
   * Registers a command.
   */
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

declare module '@modules/utilities' {
  export * from '@utilities';
}

declare module '@modules/logger' {
  export default class Logger {
    constructor(...name: string[]);

    name: string[];

    /**
     * Simple log with unbound styles.
     */
    log: (...args: any[]) => void;
    /**
     * Yellow colored log (for warnings).
     */
    warn: (...args: any[]) => void;
    /**
     * Red colored log (for errors).
     */
    error: (...args: any[]) => void;
    /**
     * Green colored log (for successfuly operations).
     */
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
  /**
   * An array of every patch currently in the client.
   * 
   * You probably won't ever need to touch this.
   */
  export const patches: Patch[];

  /**
   * Takes away the hasle of assigning caller IDs everytime you want to patch.
   * 
   * Takes a caller id as the argument and returns the patcher functions with that caller ID auto-assigned.
   */
  export function create(name: string): {
    /**
     * Returns an array of patches under the provided caller ID.
     */
    getPatchesByCaller(id: string): Patch[];

    /**
     * Unpatches all patches with the provided caller ID.
     */
    unpatchAll(): void;

    /**
     * Takes any object (usually a module), a key to the function you want to overrite and runs the original function, then runs your own code.
     */
    after(mdl: Function | object, func: string, callback: Function, once?: boolean): () => void;

    /**
     * Same as after except it runs your code before.
     */
    before(mdl: Function | object, func: string, callback: Function, once?: boolean): () => void;

    /**
     * Similar to the other patch functions except it overrites the function entirely only making it run what you specify.
     */
    instead(mdl: Function | object, func: string, callback: Function, once?: boolean): () => void;
  };

  /**
   * Returns an array of patches under the provided caller ID.
   */
  export function getPatchesByCaller(id: string): Patch[];

  /**
   * Unpatches all patches with the provided caller ID.
   */
  export function unpatchAll(caller: string): void;

  /**
   * Takes any object (usually a module), a key to the function you want to overrite and runs the original function, then runs your own code.
   */
  export function after(caller: string, mdl: Function | object, func: string, callback: Function, once?: boolean): () => void;
  /**
   * Same as after except it runs your code before.
   */
  export function before(caller: string, mdl: Function | object, func: string, callback: Function, once?: boolean): () => void;
  /**
   * Similar to the other patch functions except it overrites the function entirely only making it run what you specify.
   */
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
   * 
   */
  export function getByString(...options: [...strings: string[], options: ExtendedOptions]): any;
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

declare module '@utilities/dom' {
  /**
   * @name appendStyle
   * @description Appends a style to the unbound's head.
   * @param {string} id - The unique identifier for this style.
   * @param {string} instance - The CSS/URL string to apply to the DOM.
   * @param {boolean} [url=false] - Whether to treat the css as a URL rather than a stylesheet.
   * @return {object} Returns an object containing the removal function and the DOM element.
   */
  export function appendStyle(id: string, instance: string, url?: boolean): {
    element: HTMLStyleElement;
    remove: () => void;
  };

  /**
   * @name appendScript
   * @description Appends a script to the unbound's head.
   * @param {string} id - The unique identifier for this script.
   * @param {string} url - The URL of the script.
   * @return {object} Returns an object containing the removal function and the DOM element.
   */
  export function appendScript(id: string, url: string): {
    script: HTMLScriptElement;
    remove: () => void;
  } | undefined;

  /**
   * @name removeStyle
   * @description Removes a style from the unbound's head.
   * @param {string} id - The unique identifier for the style.
   */
  export function removeStyle(id: string): void;

  /**
   * @name removeScript
   * @description Removes a script from the unbound's head.
   * @param {string} id - The unique identifier for the script.
   */
  export function removeScript(id: string): void;

  export const head: HTMLElement;

  export * as default from '@utilities/dom';
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
  export * as dom from '@utilities/dom';
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

