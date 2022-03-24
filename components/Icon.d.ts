declare module '@components/Icon' {
  export default class Icon extends React.Component<{
    name: string;
    [prop: string]: any;
  }> {
    static get Names(): React.Component[];
  }
}