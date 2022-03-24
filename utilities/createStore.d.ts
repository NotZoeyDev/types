declare module '@utilities/createStore' {
  /**
   * @name createStore
   * @description Creates a Flux store with the data provided
   * @param {object} data - The data to pass to the store (must be an object)
   * @return {object} Returns an object containing the ID, the initialized Flux store
   * & its data and functions that go along with it.
   */

  export default function (data: object): {
    get: (key: string, defaults?: any) => any,
    set: (key: string, value?: any) => any,
    delete: (key: string) => any,
    store: any,
    storage: any,
    id: string,
  };
}