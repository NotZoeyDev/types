declare module '@utilities/sleep' {
  /**
   * @name sleep
   * @description Allows functionality of a python-like sleep method
   * @param {number} time - The time to wait before resolving the promise.
   * @return {Promise<void>} Returns Promise<void>
   */

  export default function (time: number): Promise<void>;
}