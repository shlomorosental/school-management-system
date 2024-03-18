const express = require('express')
const { get } = require('../db')
const getCourses = require('../sql/courses')
const router = express.Router()
router.get('/', async (req, res )=>{
    try {
        let dataCurses = await getCourses()
        res.json(dataCurses[0][0])
        } catch (error) {
            console.log(error);
            res.status(500).send("Server error")
            }
})

// router.post("/",async (req,res)=>{
//     if(!req.body.name || !req.body.){
//         return res.status(400).send({
//           error: 'You must provide name and description'
//         })
//       }

    // save the course in the
module.exports = router