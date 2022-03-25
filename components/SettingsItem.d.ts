declare module '@components/SettingsItem' {
  /**
   * A simple settings switch.
   */
  export default class SettingsItem extends React.Component<{
    title: string;
    note?: string;
    required?: boolean;
    hasMargin?: boolean;
    children?: React.ReactNode;
  }> { }
}