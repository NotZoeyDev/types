declare module '@components/settings/SettingsItem' {
  /**
   * A wrapper for settings-related components.
   */
  export default class SettingsItem extends React.Component<{
    title: string;
    required?: boolean;
    hasMargin?: boolean;
    description?: string;
    children?: React.ReactNode;
  }> { }
}