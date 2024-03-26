const express = require('express')
const { get } = require('../db')
const {getTeacher} = require('../sql/teacher')
const router = express.Router()
router.get('/', async (req, res )=>{
    try {
        let dataTeacher = await getTeacher()
        res.json(dataTeacher[0])
        } catch (error) {
            console.log(error);
            res.status(500).send("Server error")
            }
})

module.exports = router