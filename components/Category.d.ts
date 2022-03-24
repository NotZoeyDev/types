declare module '@components/Category' {
  export default class Category extends React.Component<{
    title: string;
    description: string;
    opened: boolean;
    onChange: Function;
    children: React.Component;
    icon: () => React.Component;
  }> { }
}