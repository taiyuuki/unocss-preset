import { defineConfig } from 'tsup'
import importGlobPlugin from 'esbuild-plugin-import-glob'

export default defineConfig({
  entry: ['src/index.ts'],
  target: 'esnext',
  splitting: false,
  clean: true,
  dts: true,
  esbuildPlugins: [importGlobPlugin.default()],
})