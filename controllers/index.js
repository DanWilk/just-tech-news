const router = require('express').Router();

const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');

// adds the /api inside of the route
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

// if request is not to an implemented endpoint
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;