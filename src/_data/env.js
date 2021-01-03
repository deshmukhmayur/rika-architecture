const dotenv = require('dotenv-safe')

dotenv.config()

module.exports.BASE_HREF = process.env.BASE_HREF || '/'

/* Google API Service Account Credentials */
module.exports.GAPI_CLIENT_EMAIL = process.env.GAPI_CLIENT_EMAIL
module.exports.GAPI_PRIVATE_KEY = process.env.GAPI_PRIVATE_KEY

/* Google Sheet ID where the website data is stored */
module.exports.SPREADSHEET_ID = process.env.SPREADSHEET_ID

