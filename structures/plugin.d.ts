declare module '@structures/plugin' {
  import Addon from '@structures/addon';

  export default class Plugin extends Addon {
    constructor(instance: any, data: Manifest);

    logger: import('@modules').logger;
    settings: unknown;
    styles: unknown[];
  }
}