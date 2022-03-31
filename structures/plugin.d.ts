declare module '@structures/plugin' {
  import Addon from '@structures/addon';

  export default class Plugin extends Addon {
    constructor(instance: any, data: Manifest);

    /**
     * Auto-generated logger class instance for logging errors, warnings, ect.
     */
    logger: import('@modules').logger;

    /**
     * The Flux Store proxy for interacting with the Plugin settings.
     */
    settings: Settings;

    /**
     * Function that is called when the user hits the settings cog.
     * 
     * If you return nothing/void nothing will be rendered and the function will still run.
     */
    getSettingsPanel(): JSX.Element | void;
  }
}