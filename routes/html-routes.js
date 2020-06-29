const express = require('express');
const router = express.Router();

router.get('/exercise', (req, res) => {
    res.sendFile(`${process.cwd()}/public/exercise.html`);
});

module.exports = router;