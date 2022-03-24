declare module '@utilities/parseStyleObject' {
  /**
   * @name parseStyleObject
   * @description Parses React-like style objects into a CSS string
   * @param {object} style - The object to turn into a CSS property string
   * @param {boolean} [line=false] - Newline each style
   * @return {string} Returns CSS properties to be put inside a selector
   */

  export default function (style: object, line?: boolean): string;
}