const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

  req.session.destroy((err) => {
    if (err) return res.send(err.message);
    res.clearCookie('sid');
    res.redirect('/');
  })
});



module.exports = router;
