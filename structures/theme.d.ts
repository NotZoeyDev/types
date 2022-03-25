declare module '@structures/theme' {
  import Addon from '@structures/addon';

  export default class Theme extends Addon {
    constructor(instance: any, data: Manifest);

    /**
     * Auto-generated logger class instance for logging errors, warnings, ect.
     */
    logger: import('@modules').logger;

    /**
     * The Flux Store proxy for interacting with the Theme settings. 
     */
    settings: Settings;

    /**
     * Function that is ran when the Theme is started.
     * 
     * Make sure to add:
     * ```
     * super.start(css);
     * ```
     * at the end of your file!
     */
    start(css: string): void;

    /**
     * Optional *additional* cleanup for when the theme is disabled.
     * 
     * You will probably need to add:
     * ```
     * super.stop();
     * ```
     * Somewhere in the function!
     */
    stop(): void;

    /**
     * Called internally to append styles to the DOM.
     * 
     * You probably won't need to touch this.
     */
    apply(): void;
  }
}