declare interface Manifest {
  id: string,
  name: string,
  version: string,
  description: string,
  author: {
    name: string,
    id: string,
  }[],
  authors: {
    name: string,
    id: string,
  }[],
}