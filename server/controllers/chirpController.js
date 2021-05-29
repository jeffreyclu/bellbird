const Chirp = require('../models/chirp');

const chirp = {};

chirp.getChirp = async (req, res, next) => {
  const { id } = req.params
  try {
    const chirp = await Chirp.findOne({ where: { id } });
    res.locals.chirp = chirp;
    next();
  } catch (err) {
    next(err);
  }
}

chirp.getChirps = async (req, res, next) => {
  try {
    const chirps = await Chirp.findAll({ where: {} });
    res.locals.chirps = chirps;
    next();
  } catch (err) {
    next(err);
  }
}

chirp.postChirp = async (req, res, next) => {
  const { text } = req.body;
  try {
    const chirp = await Chirp.create({ text });
    res.locals.chirp = chirp;
    next();
  } catch (err) {
    next(err);
  }
}

chirp.deleteChirp = async (req, res, next) => {
  const { id } = req.params;
  try {	
   Chirp.destroy({ where: { where: { id } } });
   res.locals.result = { status: 'success'};
   next();	
 } catch (err) {	
   next(err);	
 }
}

chirp.deleteChirps = async (req, res, next) => {	
  try {	
    await Chirp.destroy({ where: {} });
    res.locals.result = { status: 'success'};	
    next();	
  } catch (err) {	
    next(err);	
  }
}

chirp.upvoteChirp = async (req, res, next) => {
  const { id } = req.params;
  try {
    const foundChirp = await Chirp.findByPk(id);
    await foundChirp.increment('upvotes');
    console.log(foundChirp)
    res.locals.result = { status: 'success'};
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = chirp;
