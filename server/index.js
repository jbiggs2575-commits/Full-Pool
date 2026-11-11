const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config({ path: path.resolve(__dirname, '.env') })
if (!process.env.MONGODB_URI) {
  dotenv.config({ path: path.resolve(__dirname, '../.env') })
}
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const routes = require('./routes/productRoutes')
const connectToDatabase = require('./connection')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

routes(app)

const startServer = async () => {
  try {
    await connectToDatabase()
    const port = process.env.PORT || 4000
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`)
    })
  } catch (error) {
    console.error(`Unable to start server: ${error.message}`)
    process.exitCode = 1
  }
}

startServer()

module.exports = app