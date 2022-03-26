declare module '@structures/managers/entities' {
  import { EventEmitter } from 'events';

  export default class Manager extends EventEmitter {
    constructor(type: string);

    /**
     * The name of the manager.
     */
    type: string;

    /**
     * Path of the folder where the entities/addons are stored.
     */
    path: string;

    /**
     * Map of all entities.
     */
    entities: Map<string, Class>;

    /**
     * Auto-generated logger class instance for logging errors, warnings, ect.
     */
    logger: import('@modules').logger;

    /**
     * The Flux Store proxy for interacting with the Plugin settings.
     */
    settings: Settings;

    /**
     * The settings panel item that shows up under the "unbound" category in SettingsView.
     * 
     * By default it's a normal panel item with this.type as the label.
     */
    panel: React.ReactElement;

    /**
     * The FS watcher instance.
     */
    watcher: import('fs').FSWatcher;

    /**
     * Calls the unload function for all entities and removes all watcher listeners.
     */
    destroy(): void;

    /**
     * Gets an entity by its ID or name.
     */
    resolve(idOrName: string | object): Class;

    /**
     * Calls the "load" function on all entities.
     */
    loadAll(): void;

    /**
     * Assigns data to the object paramater.
     */
    assignData(data: any, object: object, path: string): void;

    /**
     * Throws if the manifest is invalid,.
     */
    validateManifest(data: Manifest): void;

    /**
     * Runs the load function of an entity.
     */
    load(id: string): { instance: any; };

    /**
     * Runs the start function of an entity.
     */
    start(id: string): void;

    /**
     * Runs the stop function of an entity.
     */
    stop(id: string): void;

    /**
     * Deletes the entity from entities and runs the stop function.
     */
    unload(id: string): void;

    /**
     * Runs the "unload" function on all entities.
     */
    unloadAll(): void;

    /**
     * Deletes the entity from the users files.
     */
    delete(id: string): void;

    /**
     * Runs both the unload and load functions of an entity.
     */
    reload(id: string, silent?: boolean): any;

    /**
     * Returns the manager directory file and dir names.
     */
    fetch(): string[];

    /**
     * Checks if the entity is enabled.
     */
    isEnabled(id: string): boolean;

    /**
     * Enables the entity.
     */
    enable(id: string): void;

    /**
     * Disables the entity.
     */
    disable(id: string): void;

    /**
     * Toggles the entity.
     */
    toggle(id: string): void;

    /**
     * Alias to "resolve".
     */
    get get(): (idOrName: string | object) => any;
  }
}