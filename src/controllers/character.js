const axios = require('axios').default;
const characterModel = require('../models/character');
const characterService = require('../services/character');

class CharacterController {
  async findAll(req, res) {
    const { page, pageSize } = req.query;

    if(!page || !pageSize) {
      return res.status(400).json({ message: 'page and pageSize is required!' });
    }

    try {
      const result = await characterService.findAll(page, pageSize);
      return res.json(result);
    } catch(err) {
      return res.status(500).json({ message: err.message });
    }
  }

  async fillCharacters(req, res) {
    const { quantity } = req.query;

    if(!quantity) {
      return res.status(400).json({ message: 'quantity is required!' });
    }

    try {
      await characterService.fillCharacters();
    } catch(err) {
      return res.status(500).json({ message: err.message });
    }

    return res.end();
  }
}

module.exports = new CharacterController();
