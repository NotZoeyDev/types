interface ToastOptions {
  id: string;
}

declare module '@api/toasts' {
  /**
   * The toasts flux store.
   */
  export const toasts: GenericStore;

  /**
   * Sends a toast.
   * @returns {string} The sent toast's ID.
   */
  export function send(options: ToastOptions): string;

  /**
   * Closes a toast by its ID. 
   */
  export function close(id: string): void;

  export * as default from '@api/toasts';
}