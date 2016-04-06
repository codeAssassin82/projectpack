var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//router.use(User.authMiddleware);

router.get('/protected', function(req, res) {
  console.log('req.user:', req.user);
  res.send('wooo! protected!!');
});

module.exports = router;
