module.exports = function (config) {
  config.addPassthroughCopy({ './src/static': '.' })

  return {
    templateFormats: [
      "md",
      "njk",
      "html",
    ],
    dir: {
      input: './src',
      output: './build'
    }
  }
}
