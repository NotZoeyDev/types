interface Patch {
  mdl: any;
  func: string;
  caller: string;
  original: Function;
  unpatch: () => void;
  patches: {
    type: string;
    caller: string;
    unpatch: () => void;
    id: number | undefined;
    callback: (_: any, args: any[], res: any) => any;
  }[];
}

declare module '@patcher' {
  export const patches: Patch[];

  export function create(name: string): {
    unpatchAll(): void;
    getPatchesByCaller(id: string): Patch[];
    after(mdl: Function | object, func: string, callback: Function, once?: boolean): () => void;
    before(mdl: Function | object, func: string, callback: Function, once?: boolean): () => void;
    instead(mdl: Function | object, func: string, callback: Function, once?: boolean): () => void;
  };

  export function getPatchesByCaller(id: string): Patch[];

  export function unpatchAll(caller: string): void;

  // export function override(patch: Patch): () => any;

  // export function push([caller, mdl, func]): Patch;
  // export function get(caller: string, mdl: Function | object, func: string): Patch;

  // export function patch(caller: string, mdl: Function | object, func: string, callback: Function, type: 'after' | 'before' | 'instead'): () => void;

  export function after(caller: string, mdl: Function | object, func: string, callback: Function, once?: boolean): () => void;
  export function before(caller: string, mdl: Function | object, func: string, callback: Function, once?: boolean): () => void;
  export function instead(caller: string, mdl: Function | object, func: string, callback: Function, once?: boolean): () => void;

  export * as default from '@patcher';
}