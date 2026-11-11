const mongoose = require('mongoose')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config({ path: path.resolve(__dirname, '.env') })
if (!process.env.MONGODB_URI) {
  dotenv.config({ path: path.resolve(__dirname, '../.env') })
}
const PoolProducts = require('./models/PoolProducts')
const poolProducts = require('./seed/poolProducts-seed-data')
const connectToDatabase = require('./connection')

const seedDatabase = async () => {
  try {
    await connectToDatabase()
    const productCount = await PoolProducts.countDocuments()

    if (productCount > 0) {
      console.log(`Skipped product seed: database already contains ${productCount} products.`)
      return
    }

    await PoolProducts.insertMany(poolProducts)
    console.log(`Seeded ${poolProducts.length} products.`)
  } catch (error) {
    console.error(`Failed to seed products: ${error.message}`)
    process.exitCode = 1
  } finally {
    await mongoose.connection.close()
  }
}

seedDatabase()