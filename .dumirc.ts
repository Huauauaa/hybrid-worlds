import { defineConfig } from 'dumi'

export default defineConfig({
  base: '/hybrid-worlds/',
  publicPath: '/hybrid-worlds/',
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'hybrid-worlds',
    footer: false,
  },
  styles: [
    `.dumi-default-sidebar > dl > dt  { 
      text-transform: initial !important; }`,
  ],
})
