declare module '@modules' {
  export * as webpack from '@webpack';
  export { default as patcher } from '@patcher';
  export { default as logger } from '@modules/logger';
  export { default as constants } from '@modules/constants';
}

declare module '@modules/constants' {
  export * from '@constants';
  export { default as default } from '@constants';
}

declare module '@modules/webpack' {
  export * from '@webpack';
}

declare module '@modules/webpack/common' {
  export * from '@webpack';
}

declare module '@modules/patcher' {
  export * from '@patcher';
}