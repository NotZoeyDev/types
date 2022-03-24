declare module '@constants' {
  import Theme from '@structures/theme';

  export const paths: {
    root: string,
    settings: string,
  };

  export const regex: {
    newline: RegExp,
  };

  export const console: {
    success: {
      'background-color': '#6bffb2',
      'color': 'black',
      'padding': '2.5px 5px',
      'border-radius': '5px';
    },
    warn: {
      'background-color': '#fcee83',
      'color': 'black',
      'padding': '2.5px 5px',
      'border-radius': '5px';
    },
    error: {
      'background-color': '#ff0000',
      'color': 'white',
      'padding': '2.5px 5px',
      'border-radius': '5px',
      'margin-right': '2px';
    },
    log: {
      'background-color': '#990000',
      'padding': '2.5px 5px',
      'border-radius': '5px',
      'margin-right': '3px';
    };
  };

  export const colors: {
    primary: '#990000';
  };

  export const avatar: 'https://i.imgur.com/SeDNYyJ.png';

  export const entities: {
    themes: (instance: any, data: Manifest) => Theme;
    plugins: (...args) => unknown;
  };

  export * as default from '@constants';
}