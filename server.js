/* eslint-disable no-console */
const app = require('./app.js')
const dotenv = require('dotenv')
dotenv.config({ path: './.env' })
const PORT = process.env.PORT || 3005

// 連接資料庫

// 啟動 Server
app.listen(PORT, () => {
  console.log(123)
  console.log(`Server is running at http://localhost:${PORT}`)
  console.log(`Swagger API Url http://localhost:${PORT}/apidoc`)
})
