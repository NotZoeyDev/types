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