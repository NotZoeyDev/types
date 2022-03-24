declare module '@utilities/classnames' {
  /**
   * @name classnames
   * @description Joins all passed strings together and handles null values.
   * @param {...string} classes - The strings to join and filter
   * @return {string} Returns all the parsed strings joined as a string
   */

  export default function (...classes: string[]): string;
}