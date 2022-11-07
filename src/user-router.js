const UserRouter = require('../router')
const {getUsers, postUser} = require("./users-controler");
const router = new UserRouter()



router.get('/users', getUsers)
router.post('/users', postUser)

module.exports = router