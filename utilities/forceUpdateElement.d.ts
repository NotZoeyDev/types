declare module '@utilities/forceUpdateElement' {
  /**
 * @name forceUpdateElement
 * @description Force updates a rendered React component by its DOM selector
 * @param {string} selector - The DOM selector to force update
 * @param {boolean} all - Whether all elements matching that selector should be force updated
 */

  export default function (selector: string, all: boolean): Promise<void>;
}