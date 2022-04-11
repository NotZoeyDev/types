interface PatchInstance {
  type: string;
  caller: string;
  unpatch: () => void;
  id: number | undefined;
  callback: (_: any, args: any[], res: any) => any;
}

interface PatchCollection {
  mdl: any;
  func: string;
  caller: string;
  original: Function;
  unpatch: () => void;
  patches: {
    after: PatchInstance[];
    before: PatchInstance[];
    instead: PatchInstance[];
  };
}

declare module '@patcher' {
  /**
   * An array of every patch currently in the client.
   * 
   * You probably won't ever need to touch this.
   */
  export const patches: PatchCollection[];

  /**
   * Takes away the hasle of assigning caller IDs everytime you want to patch.
   * 
   * Takes a caller id as the argument and returns the patcher functions with that caller ID auto-assigned.
   */
  export function create(name: string): {
    /**
     * Returns an array of patches under the provided caller ID.
     */
    getPatchesByCaller(id: string): PatchInstance[];

    /**
     * Unpatches all patches for this patcher "create" instance.
     */
    unpatchAll(): void;

    /**
     * Takes any object (usually a module), a key to the function you want to overrite and runs the original function, then runs your own code.
     */
    after(mdl: Function | object, func: string, callback: AfterOverwrite, once?: boolean): () => void;

    /**
     * Same as after except it runs your code before.
     */
    before(mdl: Function | object, func: string, callback: BeforeOverwrite, once?: boolean): () => void;

    /**
     * Similar to the other patch functions except it overrites the function entirely only making it run what you specify.
     */
    instead(mdl: Function | object, func: string, callback: InsteadOverwrite, once?: boolean): () => void;
  };

  /**
   * Returns an array of patches under the provided caller ID.
   */
  export function getPatchesByCaller(id: string): PatchInstance[];

  /**
   * Unpatches all patches with the provided caller ID.
   */
  export function unpatchAll(caller: string): void;

  /**
   * Takes any object (usually a module), a key to the function you want to overrite and runs the original function, then runs your own code.
   */
  export function after(caller: string, mdl: Function | object, func: string, callback: AfterOverwrite, once?: boolean): () => void;
  /**
   * Same as after except it runs your code before.
   */
  export function before(caller: string, mdl: Function | object, func: string, callback: BeforeOverwrite, once?: boolean): () => void;
  /**
   * Similar to the other patch functions except it overrites the function entirely only making it run what you specify.
   */
  export function instead(caller: string, mdl: Function | object, func: string, callback: InsteadOverwrite, once?: boolean): () => void;

  export * as default from '@patcher';
}