declare module '@utilities/uuid' {
  /**
   * @name uuid
   * @description Returns a UUID with the length provided (default: 30)
   * @param {number} [length=30] - The length of the randomized UUID
   * @return {string} Returns the randomized UUID.
   */

  export default function (length?: number): string;
}