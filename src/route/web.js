const express = require('express');
const dashboardController = require('../controller/admin/dashboard-controller');
const inventoryController = require('../controller/admin/inventory-controller');
const historyController = require('../controller/admin/history-controller');
const userController = require('../controller/admin/user-controller');
const peminjamanController = require('../controller/admin/peminjaman-controller');
const authController = require('../controller/admin/auth-controller');
const { upload } = require('../utils/upload');
const { isAuthenticated } = require('../middleware/auth-middleware');

const router = express.Router();
router.use(isAuthenticated)

router.get('/', authController.login);
router.get('/admin/login', authController.login);
router.post('/admin/login', authController.authenticate);
router.delete('/admin/logout', authController.logout);

router.get('/admin/dashboard', dashboardController.index)

router.get('/admin/histories', historyController.index)

router.get('/admin/inventories', inventoryController.index)
router.get('/admin/inventories/create', inventoryController.create)
router.get('/admin/inventories/:id', inventoryController.edit)
router.get('/admin/inventories/:id/delete', inventoryController.remove)
router.put('/admin/inventories/:id', upload('inventories').single('images'), inventoryController.update)
router.post('/admin/inventories', upload('inventories').single('images'), inventoryController.store)

router.get('/admin/peminjaman', peminjamanController.index)
router.put("/admin/peminjaman/:id", peminjamanController.update)

router.get('/admin/users', userController.index)
router.get('/admin/users/create', userController.create)
router.get('/admin/users/:id', userController.edit)
router.get('/admin/users/:id/delete', userController.remove)
router.put('/admin/users/:id', upload('user-profiles').single('images'), userController.update)
router.post('/admin/users', upload('user-profiles').single('images'), userController.store)


module.exports = router;
