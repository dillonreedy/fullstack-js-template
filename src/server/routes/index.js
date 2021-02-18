const express = require('express');
const os = require('os');
const router = express.Router();

router.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));



module.exports = router;

