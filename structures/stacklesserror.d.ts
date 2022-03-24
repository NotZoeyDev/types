declare module '@structures/stacklesserror' {
  export default class StacklessError extends Error {
    constructor(message: string);
  }
}