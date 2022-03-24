declare module '@utilities/getOwnerInstance' {
  /**
   * @name getOwnerInstance
   * @description Gets the parent/owner instance the component belongs to.
   * @param {HTMLElement} node - The element to find the instance for
   * @param {function} filter - The filter to apply for the search
   * @return {function} Returns the function with a cacheable value
   */

  export default function (node: HTMLElement, filter: Function): Function;
}