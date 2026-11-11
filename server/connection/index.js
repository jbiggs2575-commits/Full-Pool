const mongoose = require('mongoose')

const connectToDatabase = async () => {
  const connectionString = process.env.MONGODB_URI

  if (!connectionString) {
    throw new Error('MONGODB_URI is not set. Copy .env.example to .env and configure your Atlas URI.')
  }

  await mongoose.connect(connectionString)

  console.log('Connected to MongoDB.')
}

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected.')
})

module.exports = connectToDatabase