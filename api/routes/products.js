const express = require('express'),
    router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'we have get some products'
    })
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'we have post to /products'
    })
})

module.exports = router;