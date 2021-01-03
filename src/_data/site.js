const spreadsheet = require('./spreadsheet')

module.exports = async () => {
  const { site } = await spreadsheet()
  /* Convert the site info into a easily usable object */
  return site.reduce((metadata, row) => {
    metadata[row[0]] = row[1]
    return metadata
  }, {})
}
