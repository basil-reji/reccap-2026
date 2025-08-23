const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Reccap 2026',
    home: true
  });
});

router.get('/about', function (req, res, next) {
  res.render('about',
    {
      title: 'About | Reccap 2026',
      about: true
    }
  );
});

router.get('/venue', function (req, res, next) {
  res.render('venue',
    {
      title: 'Venue | Reccap 2026',
      venue: true
    }
  );
});

router.get('/team', function (req, res, next) {
  res.render('team',
    {
      title: 'Team | Reccap 2026',
      venue: true
    }
  );
});

module.exports = router;
