const {Router} = require('express');

const router = Router();


router.get('/', async (req, res) => {
    res.send("hola mundo");
})

router.post('/', async (req, res) => {

    const body = req.body;
    console.log(body)
})

module.exports = router;