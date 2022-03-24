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