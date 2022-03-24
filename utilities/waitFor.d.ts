declare module '@utilities/waitFor' {
  /**
   * @name waitFor
   * @description Returns an element once it is found in the DOM
   * @param {string} selector - The query/selector to pass to document.querySelector
   * @return {Promise<HTMLElement>} Returns Promise<HTMLElement>
   */

  export default function (selector: string): Promise<HTMLElement>;
}