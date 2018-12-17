import vue from 'rollup-plugin-vue'
import buble from 'rollup-plugin-buble'
export default {
  input: 'src/field-matrix.js',
  output: {
    name: 'FieldMatrix',
    exports: 'named'
  },
  plugins: [
    vue({
      css: true,
      compileTemplate: true
    }),
    buble()
  ]
}
