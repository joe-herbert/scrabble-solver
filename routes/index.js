let express = require('express');
let router = express.Router();
let index = require('../controllers/index');

/* GET home page. */
router.get('/', index.show_index);

module.exports = router;
