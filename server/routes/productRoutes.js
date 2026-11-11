const ProductCtrl = require('../controllers/productControllers')
const UserCtrl = require('../controllers/userController')

const routes = (app) => {
  // User routes
  app.post('/user', UserCtrl.createUser)
  app.get('/users', UserCtrl.getUsers)
  app.post('/user/signin', UserCtrl.getUser)
  app.delete('/user/:id', UserCtrl.deleteUser)
  app.put('/user/:id', UserCtrl.updateUser);

  // Product routes
  app.get('/products', ProductCtrl.getProducts)
  app.get('/product/:id', ProductCtrl.getProduct)
}

module.exports = routes