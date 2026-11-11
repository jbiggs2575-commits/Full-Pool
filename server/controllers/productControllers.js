const Product = require('../models/PoolProducts')

module.exports = {
  // Retrieve all the products in the database (READ)
  getProducts(req, res) {
    Product.find()
      .then((product) => res.json(product))
      .catch(err => res.status(400).json(err))
  },

  getProduct(req, res) {
    const { id } = req.params
    Product.findById(id)
      .then(product => res.json({ product }))
      .catch(err => res.status(400).json(err))
  }
}