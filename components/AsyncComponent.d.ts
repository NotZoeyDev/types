declare module '@components/AsyncComponent' {
  const AsyncComponent: {
    from(promise: () => Promise<React.Component>, suspense: React.Component): React.NamedExoticComponent;
  };

  export default AsyncComponent;
}