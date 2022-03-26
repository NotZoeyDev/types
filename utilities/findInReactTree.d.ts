declare module '@utilities/findInReactTree' {
  /**
   * @name findInReactTree
   * @description Traverses through a react tree
   * @param {(object|array)} tree - The tree to search through
   * @param {function} filter - The filter to run on the tree passed as the first argument
   * @param {object} options - Options to pass to findInTree
   * @return {any} Returns null if nothing is filtered or the value that is filtered.
   */

  export default function (tree: any, filter: (node: any) => boolean, options?: { ignore?: any[]; walkable?: any[]; maxProperties?: number; }): any;
}