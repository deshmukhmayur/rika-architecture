const { AssetCache } = require('@11ty/eleventy-cache-assets')
const { google } = require('googleapis')
const { GAPI_CLIENT_EMAIL, GAPI_PRIVATE_KEY } = require('./env')
const { SPREADSHEET_ID } = require('./env')

function googleAuth() {
  /* Authorize */
  const scopes = [
    'https://www.googleapis.com/auth/drive.readonly',
    /* Spreadsheet scope not needed if the sheet is inside the same drive folder */
    'https://www.googleapis.com/auth/spreadsheets.readonly'
  ]
  return new google.auth.JWT(
    GAPI_CLIENT_EMAIL,
    null,
    GAPI_PRIVATE_KEY,
    scopes
  )
}

module.exports = () => {
  /* Custom asset cache */
  let asset = new AssetCache('spreadsheet_' + SPREADSHEET_ID)

  /* If asset is cached, and is still valid, return cached data */
  if (asset.isCacheValid('1d')) {
    return asset.getCachedValue()
  }

  /* Otherwise, fetch the spreadsheet data, store in cache and return */
  return new Promise((resolve, reject) => {
    /* Initialize google sheets api */
    const sheets = google.sheets({
      version: 'v4',
      auth: googleAuth(),
    })

    sheets.spreadsheets.values.batchGet({
      spreadsheetId: SPREADSHEET_ID,
      ranges: ['Portfolio','Site'],
    }, async (err, res) => {
      if (err) {
        console.error('The API returned an error:', err)
        reject(err)
        return
      }
      const data = res.data.valueRanges.reduce((acc, valueRange) => {
        const sheetName = valueRange.range
          .slice(0, valueRange.range.indexOf('!'))
          .toLowerCase()
        acc[sheetName] = valueRange.values
        return acc
      }, {})

      /* Update the cache with new data */
      await asset.save(data, 'json')
      resolve(data)
    })
  })
}