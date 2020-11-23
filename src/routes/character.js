const router = require('express').Router();
const characterController = require('../controllers/character');

router.get('/', characterController.findAll);
router.get('/fill', characterController.fillCharacters);

module.exports = router;
