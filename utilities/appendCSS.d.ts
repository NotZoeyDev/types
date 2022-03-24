declare module '@utilities/appendCSS' {
  /**
   * @name appendCSS
   * @description Appends CSS to the DOM's head
   * @param {string} id - The unique identifier for this CSS application
   * @param {string} css - The CSS string to apply to the DOM
   * @return {function} Returns the function that removes the instance of this DOM element
   */

  export default function (id: string, css: string): () => void;
}