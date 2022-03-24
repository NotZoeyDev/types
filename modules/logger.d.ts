declare module '@modules/logger' {
  export default class Logger {
    constructor(...name: string[]);

    name: string[];

    log: (...args: any[]) => void;
    warn: (...args: any[]) => void;
    error: (...args: any[]) => void;
    success: (...args: any[]) => void;
  }
}