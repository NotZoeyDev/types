interface AllSettings {
  [file: string]: Settings;
}

interface Settings {
  [setting: string]: any;
}

type SubscribeCallback = (event: { setting: string; } & ({ defaults: any; } | { value: any; })) => void;

declare module '@api/settings' {
  /**
   * Returns the entire settings object. The same as `settings.store.getAll();`.
   */
  export const settings: AllSettings;

  /**
   * Returns the whole flux store.
   * 
   * You probably wont need to touch this.
   */
  export const store: {
    getSetting(file: string, setting: string, defaults: any): any;
    get(file: string): Settings;
    getAll(): AllSettings;
    save(): void;
  };

  /**
   * Sets an addon's setting.
   */
  export function set(file: string, setting: string, value: any): void;

  /**
   * Gets an addon's setting.
   */
  export function get(file: string, setting: string, defaults: any): any;

  /**
   * Toggles an addon's setting.
   */
  export function toggle(file: string, setting: string, defaults: any): void;

  /**
   * Connects a component to one specific addons settings.
   */
  export function connectComponent(component: JSX.Element, file: string): JSX.Element;

  /**
   * Like `Patcher.create`, it's a shortcut for shortened basic settings functions.
   */
  export function makeStore(file: string): {
    settings: Settings,
    set: (key: string, value: any) => void;
    get: (key: string, defaults: any) => any;
    toggle: (key: string, defaults: any) => void;
  };

  /**
   * Like `FluxDispatcher.subscribe` it subscribes to any change for an addons settings and runs the callback function with the change as the argument.
   */
  export function subscribe(file: string, callback: SubscribeCallback): void;

  /**
   *  Like `FluxDispatcher.unsubscribe` it unsubscribes a listener by its callback.
   */
  export function unsubscribe(file: string, callback: SubscribeCallback): void;

  /**
   * Similar to {@link connectComponent} except it returns the function that connects the stores rather than the already connected React Component.
   */
  export function connectStores(file: string): (connector: JSX.Element) => JSX.Element;

  export * as default from '@api/settings';
}