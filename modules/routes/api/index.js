const express = require('express');
const router = express.Router();

const apiV1 = require('./api-v1');
const apiV12 = require('./api-v1.2');

router.use('/v1' , apiV1);
router.use('/v1.2' , apiV12);

module.exports = router;