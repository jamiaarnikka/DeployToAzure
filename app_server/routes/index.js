const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/ctrlMain'); // Controller for the Home page
const ctrlBrands = require('../controllers/ctrlBrands'); // ... for the list of Fishing brands in Finland
const ctrlMethods = require('../controllers/ctrlMethods'); // ... for the the list of The most popular fishing methods in Finland

// Defining the routes and associating the routes to their corresponding controllers
router.get('/', ctrlMain.index);  // Home page
router.get('/brands', ctrlBrands.winnerlist);  // List of Fishing brands in Finland
router.get('/methods', ctrlMethods.winnerlist);  // List of The most popular fishing methods in Finland

module.exports = router;
