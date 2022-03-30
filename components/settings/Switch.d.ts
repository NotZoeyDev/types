declare module '@components/settings/Switch' {
  /**
   * A simple component for inputting text.
   */
  export default class Switch extends React.Component<{
    title: string;
    required?: boolean;
    description?: string;

    // Discord properties
    id?: string;
    checked: boolean;
    disabled?: boolean;
    className?: string;
    focusProps?: object;
    innerRef?: React.Ref<any>;
    onChange: (v: boolean) => void;
  }> { }
}