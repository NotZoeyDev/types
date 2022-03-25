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