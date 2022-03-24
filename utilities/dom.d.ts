declare module '@utilities/dom' {
  /**
   * @name appendStyle
   * @description Appends a style to the unbound's head.
   * @param {string} id - The unique identifier for this style.
   * @param {string} instance - The CSS/URL string to apply to the DOM.
   * @param {boolean} [url=false] - Whether to treat the css as a URL rather than a stylesheet.
   * @return {object} Returns an object containing the removal function and the DOM element.
   */
  export function appendStyle(id: string, instance: string, url?: boolean): {
    element: HTMLStyleElement;
    remove: () => void;
  };

  /**
   * @name appendScript
   * @description Appends a script to the unbound's head.
   * @param {string} id - The unique identifier for this script.
   * @param {string} url - The URL of the script.
   * @return {object} Returns an object containing the removal function and the DOM element.
   */
  export function appendScript(id: string, url: string): {
    script: HTMLScriptElement;
    remove: () => void;
  } | undefined;

  /**
   * @name removeStyle
   * @description Removes a style from the unbound's head.
   * @param {string} id - The unique identifier for the style.
   */
  export function removeStyle(id: string): void;

  /**
   * @name removeScript
   * @description Removes a script from the unbound's head.
   * @param {string} id - The unique identifier for the script.
   */
  export function removeScript(id: string): void;

  export const head: HTMLElement;

  export * as default from '@utilities/dom';
}