declare module '@components/AsyncComponent' {
  /**
   * Shows a "suspense" component while the first component is being asynchronously loaded.
   * 
   * This is a component but it's being typed as an object so people aren't confused about how to use it. 
   * */
  const AsyncComponent: {
    from(promise: () => Promise<React.Component>, suspense: React.Component): React.NamedExoticComponent;
  };

  export default AsyncComponent;
}