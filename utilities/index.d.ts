declare module '@utilities' {
  export * as dom from '@utilities/dom';
  export { default as noop } from '@utilities/noop';
  export { default as uuid } from '@utilities/uuid';
  export { default as sleep } from '@utilities/sleep';
  export { default as bindAll } from '@utilities/bindAll';
  export { default as memoize } from '@utilities/memoize';
  export { default as waitFor } from '@utilities/waitFor';
  export { default as debounce } from '@utilities/debounce';
  export { default as capitalize } from '@utilities/capitalize';
  export { default as classnames } from '@utilities/classnames';
  export { default as findInTree } from '@utilities/findInTree';
  export { default as createStore } from '@utilities/createStore';
  export { default as getNestedProp } from '@utilities/getNestedProp';
  export { default as getNestedType } from '@utilities/getNestedType';
  export { default as findInReactTree } from '@utilities/findInReactTree';
  export { default as getOwnerInstance } from '@utilities/getOwnerInstance';
  export { default as getReactInstance } from '@utilities/getReactInstance';
  export { default as parseStyleObject } from '@utilities/parseStyleObject';
  // export { default as forceUpdateElement } from '@utilities/forceUpdateElement';
}