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