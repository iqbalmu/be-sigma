const express = require('express');
const dashboardController = require('../controller/admin/dashboard-controller');
const inventoryController = require('../controller/admin/inventory-controller');
const historyController = require('../controller/admin/history-controller');
const userController = require('../controller/admin/user-controller');
const requestController = require('../controller/admin/request-controller');
const authController = require('../controller/admin/auth-controller');

const router = express.Router();

/* GET home page. */
router.get('/', authController.login);

router.get('/admin/dashboard', dashboardController.index)

router.get('/admin/histories', historyController.index)

router.get('/admin/request', requestController.index)

router.get('/admin/inventories', inventoryController.index)
router.get('/admin/inventories/create', inventoryController.create)
router.get('/admin/inventories/id', inventoryController.edit)

router.get('/admin/users', userController.index)

module.exports = router;
