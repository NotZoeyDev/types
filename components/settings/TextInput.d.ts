declare module '@components/settings/TextInput' {
  /**
   * A simple component for inputting text.
   */
  export default class TextInput extends React.Component<{
    title: string;
    required?: boolean;
    description?: string;
    children?: React.ReactNode;

    // Discord TextInput properties.
    value: string;
    name?: string;
    type?: string;
    style?: object;
    disabled?: boolean;
    maxLength?: number;
    autoFocus?: boolean;
    placeholder?: string;
    size?: "default" | "mini";
    onChange: (v: string) => void;
  }> { }
}