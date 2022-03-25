declare module '@components/Icon' {
  /**
   * A proxy to all discord icons.
   * 
   * Input the displayName of the icon with the "name" property.
   */
  export default class Icon extends React.Component<{
    name: string;
    [prop: string]: any;
  }> {
    static get Names(): React.Component[];
  }
}