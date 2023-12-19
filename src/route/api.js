const express = require('express');
const inventoryController = require('../controller/inventory-controller')
const authController = require('../controller/auth-controller')
const userController = require('../controller/user-controller')
const peminjamanController = require('../controller/peminjaman-controller')
const { verifyToken } = require('../middleware/verifytoken-middleware');
const { upload } = require('../utils/upload');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get("/v1/inventories", verifyToken, inventoryController.index)
router.get("/v1/inventories/:id", verifyToken, inventoryController.get)
router.post("/v1/inventories/:id/book", verifyToken, inventoryController.book)

router.get("/v1/profile", verifyToken, userController.get)
router.put("/v1/profile", verifyToken, upload('user-profiles').single('images'), userController.update)

router.get("/v1/history", verifyToken, peminjamanController.history)

router.post("/v1/login", authController.login)
router.delete("/v1/logout", verifyToken, authController.logout)

module.exports = router;
