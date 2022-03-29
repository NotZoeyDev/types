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

/**
 * Flux Store proxy for addons.
 */
declare interface Settings {
  settings: Record<string, any>;
  get: (key: string, defaults: any) => Record<string, any>;
  set: (key: string, defaults: any) => void;
  toggle: (key: string, defaults: any) => void;
}

/**
 * Any class instance.
 */
declare type Class = new (...args: any[]) => any;

/**
 * The overwrite function argument for the "before" patch. 
 * @param {any} context - The "this" argument from the scope of the original function.
 * @param {any[]} arguments - The arguments passed to the function as an array.
 * @param {any} original - The original function that you're patching.
 * @returns {any[] | void} The arguments that will be passed to the original function (the default is the original arguments).
 */
declare type BeforeOverwrite = (context?: any, arguments?: any[], original?: Function) => any[] | void;

/**
 * The overwrite function argument for the "instead" patch.
 * @param {any} context - The "this" argument from the scope of the original function.
 * @param {any[]} arguments - The arguments passed to the function as an array.
 * @param {Function} original - The original function that you're patching.
 * @returns {any | void} The value that is returned when the function is ran.
 */
declare type InsteadOverwrite = (context?: any, arguments?: any[], original?: Function) => any | void;

/**
 * The overwrite function argument for the "after" patch.
 * @param {any} context - The "this" argument from the scope of the original function.
 * @param {any[]} arguments - The arguments passed to the function as an array.
 * @param {any} result - The original function return value.
 * @returns {any | void} The value that is returned when the function is ran (the default is the original return value). Tip: If you're mutating the return value directly and it's an object you don't have to return it because objects are references in JS!
 */
declare type AfterOverwrite = (context?: any, arguments?: any[], result?: any) => any | void;

interface GenericStore {
  get: (key: string, defaults?: any) => any,
  set: (key: string, value?: any) => any,
  delete: (key: string) => any,
  store: any,
  storage: any,
  id: string,
}