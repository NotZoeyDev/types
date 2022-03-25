declare module '@api/announcements' {
  /**
   * Send an announcement.
   * @param options.color require('@components').Notices.NoticeColors
   * @param options.callback Runs when the announcement is closed via the close button.
   */
  export function send(options: {
    id: string;
    color?: string;
    message?: string;
    callback?: Function;
    button?: {
      text: string;
      onClick: Function;
    };
  }): string;

  /**
   * Close an announcement by its ID.
   */
  export function close(id: string): void;

  export * as default from '@api/announcements';
}