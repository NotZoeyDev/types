declare module '@utilities/getReactInstance' {
  /**
   * @name getReactInstance
   * @description Gets a react instance from an HTML element
   * @param {HTMLElement} element - HTML element to get the react instance from
   * @param {function} filter - The filter to run on the tree passed as the first argument
   * @return {any} Returns null if no prop is found or the prop if it's found.
   */

  export default function (element: HTMLElement): any;
}