declare module '@structures/addon' {
  export default class Addon {
    constructor(instance: any);
    instance: any;
    started: boolean;

    /**
     * Function that is ran when the addon (plugin, theme) is enabled.
     * 
     * The "instance" argument is only used in themes, you can ignore it.
     */
    start(instance?: string): void;

    /**
     * Function that is ran when the user stops the addon (plugin, theme).
     */
    stop(): void;

    /**
     * Function that is ran regardless of wether or not the plugin is enabled.
     */
    load(): void;

    /**
     * Used internally to show on the plugin card (customizable);
     */
    get color(): string;

    /**
     * Returns the Manifest attatched to the addon.
     */
    get manifest(): Manifest;

    /**
     * @deprecated
     */
    get dependencies(): string[];
  }
}