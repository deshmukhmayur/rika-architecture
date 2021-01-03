module.exports = function (config) {
  config.addPassthroughCopy({ './src/static': '.' })

  config.setLiquidOptions({
    dynamicPartials: true,
    extname: '.html'
  })

  return {
    templateFormats: [
      'md',
      'html',
    ],
    dir: {
      input: './src',
      output: './build'
    }
  }
}
