const express = require('express')
const { get } = require('../db')
const router = express.Router()
router.get('/', async (req, res )=>{
    try {
        let dataCurses = await get('course', ["*"],'*')
        res.json(dataCurses)
        } catch (error) {
            console.log(error);
            res.status(500).send("Server error")
            }
})
module.exports = router