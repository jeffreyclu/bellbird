const express = require('express');

const chirpController = require('../controllers/chirpController');

const router = express.Router();

router.get('/get',
  chirpController.getChirps,
  (req, res) => res.status(200).json(res.locals.chirps)
)

router.get('/get/:id',
  chirpController.getChirp,
  (req, res) => res.status(200).json(res.locals.chirp)
);

router.post('/post',
  chirpController.postChirp,
  (req, res) => res.status(200).json(res.locals.chirp)
)

router.put('/upvote/:id',
  chirpController.upvoteChirp,
  (req, res) => res.status(200).json(res.locals.result)
)

router.delete('/delete',
  chirpController.deleteChirps,
  (req, res) => res.status(200).json(res.locals.result)
)

router.delete('/delete/:id',
  chirpController.deleteChirp,
  (req, res) => res.status(200).json(res.locals.result)
);

module.exports = router;
