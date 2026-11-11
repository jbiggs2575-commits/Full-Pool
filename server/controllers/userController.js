const User = require('../models/User')

module.exports = {
  // Add a new User to the datbase (CREATE)
  createUser(req, res) {
    const userProps = req.body;
    
    User.create(userProps)
      .then(user => res.json(user))
      .catch(err => res.status(400).json(err))
  },

  //Retrieve all the Users from the database(READ)
  getUsers(req, res) {
    User.find()
      .then((user) => res.json(user))
      .catch(err => res.status(400).json(err))
  },
  
  //Retrieve 1 User by Id from the database(READ)
  getUser(req, res) {
    const { email, password } = req.body

    User.findOne({ email })
      .then(user => {
        if (!user) {
          return res.status(401).json({ msg: 'Invalid email or password.' })
        }

        if (user.password !== password) {
          return res.status(401).json({ msg: 'Invalid email or password.' })
        }
        return res.json({ user })
      })
      .catch(err => res.status(400).json(err))
  },

  // Update the User Data
  updateUser(req, res) {
    const { body } = req
    const { id } = req.params

    User.findByIdAndUpdate({ _id: id }, body, { new: true })
      .then(user => res.json(user))
      .catch(err => res.status(400).json(err))
  },

  //Delete User from the database(DELETE)
  deleteUser(req, res) {
    const userId = req.params.id

    User.findByIdAndDelete({ _id: userId })
      .then(user => res.status(204).json(user))
      .catch(err => res.status(400).json(err))
  }
}