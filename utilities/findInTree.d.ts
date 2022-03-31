declare module '@utilities/findInTree' {
  /**
   * @name findInTree
   * @description Searches through the walkables provided inside a tree.
   * @param {object|array} tree - The tree to search
   * @param {function} filter - The filter to use to resolve the search
   * @param {object} options - The options for the search
   * @param {array} [options.ignore=[]] - The keys to ignore in the search
   * @param {array} [options.walkable=[]] - The keys to walk/traverse in the search
   * @param {number} [options.maxProperties=100] - The keys to walk/traverse in the search
   * @return {function} Returns the function with a cacheable value
   */

  export default function (tree: any, filter: (node: any) => boolean, options?: { ignore?: any[]; walkable?: any[]; maxProperties?: number; }): any;
}