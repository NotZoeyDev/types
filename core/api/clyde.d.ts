declare module '@api/clyde' {
  import { Channel } from 'discord-types';

  export const defaultMessage: {
    state: 'SENT',
    author: {
      avatar: '__UNBOUND__',
      id: '-1',
      bot: true,
      discriminator: '0000',
      username: 'Unbound';
    },
    content: 'Message.';
  };

  export function send(channel: Channel | undefined, message: any): void;

  export * as default from '@api/clyde';
}