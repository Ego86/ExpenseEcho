const Router = require("express").Router
const userController = require("../controllers/userController")
const router = new Router()

router.post("/registration", userController.registration)
router.post("/logout", userController.logout)
router.post("/login", userController.login)
router.get("/users", userController.getUsers)
router.get("/refresh", userController.refresh)
router.put("/update", userController.update)

module.exports = router