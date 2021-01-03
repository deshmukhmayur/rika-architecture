const spreadsheet = require('./spreadsheet')

module.exports = async () => {
  const { portfolio } = await spreadsheet()

  const labels = portfolio[0]
  /* Convert the projects list into a easily usable array of objects */
  return portfolio.slice(1).map(row => {
    return labels.reduce((project, value, index) => {
      project[value] = row[index]
      return project
    }, {})
  })
}
