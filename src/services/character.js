class CharacterService {
  findAll(page, pageSize) {
    const result = await characterModel
      .find({})
      .sort({ id: 1 })
      .skip((page - 1) * pageSize)
      .limit(Number(pageSize));

    return result;
  }

  fillCharacters() {
    const { data } = await axios.get(process.env.RICK_API_URL);

    const promises = data.results.slice(0, quantity).map(({ id, name, status, species, type, gender }) => {
      return characterModel.updateOne({ id }, { id, name, status, species, type, gender }, { upsert: true });
    });

    await Promise.all(promises);
  }
}

module.exports = new CharacterService();
