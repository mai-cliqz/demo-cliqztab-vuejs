module.exports = function (compiler) {
  // register a compile function for <script lang="es">
  compiler.register({
    lang: 'es',
    type: 'script',
    compile: function (content, cb) {
      // transform the content...
      cb(null, content)
    }
  })
}
