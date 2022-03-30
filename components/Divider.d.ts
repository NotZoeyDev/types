declare module '@components/Divider' {
  /**
   * A simple divider component.
   */
  export default class Divider extends React.Component<{
    width?: string;
    height?: string;
    margin?: string;
    background?: string;
    direction: 'VERTICAL' | 'HORIZONTAL';
  } & (({ direction: 'VERITCAL'; } & HTMLDivElement) | {})> {
    static Directions: {
      HORIZONTAL: 'HORIZONTAL';
      VERTICAL: 'VERTICAL';
    };
  }
}