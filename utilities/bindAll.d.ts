declare module '@utilities/bindAll' {
  /**
   * @name bindAll
   * @description Binds functions to the passed context.
   * @param {any} ctx - The context to bind the functions to
   * @param {string[]} names - The names of the functions that exist on the context
   */

  export default function (ctx: any, names: string[]): void;
}