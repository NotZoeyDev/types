declare module '@api/commands' {
  import { Channel, Guild, CommandOptions } from 'discord-types';

  export const commands: Map<string, object>;
  export const section: {
    id: string,
    type: number,
    name: string,
    icon: string,
  };

  /**
   * Unregisters a command by its ID.
   */
  export function unregister(id: string): void;

  /**
   * Registers a command.
   */
  export function register(options: {
    command: string;
    execute: (args: {
      name: string;
      type: number;
      value: string;
      focused: unknown;
    }[], routes: {
      channel: Channel;
      guild: Guild | undefined;
    }) => void;
    description: string;
    options?: CommandOptions[];
  }): void;

  export * as default from '@api/commands';
}
