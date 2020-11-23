const router = require('express').Router()

const characterRoutes = require('./character');

router.use('/characters', characterRoutes);

module.exports = router;
