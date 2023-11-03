// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs')
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({
  path: fs.existsSync('.env.test') ? '.env.test' : '.env'
});