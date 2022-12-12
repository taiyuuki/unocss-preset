declare module 'esbuild-plugin-import-glob' {
  import { Plugin } from 'esbuild'
  const globImport : {
    default: () => Plugin
  }
  export default globImport
}