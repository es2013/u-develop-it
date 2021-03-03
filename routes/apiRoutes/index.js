const express = require('express');
const router = express.Router();

router.use(require('./candidateRoute'));
router.use(require('./voterRoutes'));
router.use(require('./voteRoutes'));


module.exports = router;