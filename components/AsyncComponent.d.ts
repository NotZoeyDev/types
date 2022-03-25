declare module '@components/AsyncComponent' {
  /**
   * Shows a "suspense" component while the first component is being asynchronously loaded.
   */
  const AsyncComponent: {
    from(promise: () => Promise<React.Component>, suspense: React.Component): React.NamedExoticComponent;
  };

  export default AsyncComponent;
}