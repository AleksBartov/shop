const express = require('express'),
    router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'we have get some orders'
    });
});

module.exports = router;