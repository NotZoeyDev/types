const { getByDisplayName } = require('@webpack');
const { React } = require('@webpack/common');

const SelectWrapper = getByDisplayName('SelectTempWrapper');
const SettingsItem = require('./SettingsItem');

module.exports = class TextInput extends React.PureComponent {
  render() {
    const { title, description, required } = this.props;
    const children = this.props.children;
    delete this.props.children;

    return (
      <SettingsItem
            title= { title };
    description = { description };
    required = { required };
    hasMargin = { true}
      >
      <SelectWrapper { ...this.props } />
      { children }
      < /SettingsItem>
      );
  }
};

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