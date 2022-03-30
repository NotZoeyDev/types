declare module '@components/settings/Select' {
  /**
   * A simple component for inputting text.
   */
  export default class Select extends React.Component<{
    title: string;
    required?: boolean;
    description?: string;
    children?: React.ReactNode;

    // Discord properties
    value: any;
    isMulti?: boolean;
    className?: string;
    disabled?: boolean;
    clearable?: boolean;
    searchable?: boolean;
    options: { value: any, label: string; }[];
    onChange: (v: { value: any, label: string; }) => void;

    // cba to type the rest
    [prop: string]: any;
  }> { }
}