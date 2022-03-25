declare module '@modules/logger' {
  export default class Logger {
    constructor(...name: string[]);

    name: string[];

    /**
     * Simple log with unbound styles.
     */
    log: (...args: any[]) => void;
    /**
     * Yellow colored log (for warnings).
     */
    warn: (...args: any[]) => void;
    /**
     * Red colored log (for errors).
     */
    error: (...args: any[]) => void;
    /**
     * Green colored log (for successfuly operations).
     */
    success: (...args: any[]) => void;
  }
}