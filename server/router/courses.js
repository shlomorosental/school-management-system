const express = require("express");
const { get } = require("../db");
const {getCourses, addCourse} = require("../sql/courses");
const { getIdByName } = require("../sql/teacher");
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    let dataCurses = await getCourses();
    res.json(dataCurses[0]);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

router.post("/", async (req, res) => {
  if (!req.body.name || !req.body.teacher || !req.body.class) {
    return res.status(400).send({
      error: "You must provide name and description",
    });
  } else {
    try {
      let id = await getIdByName(req.body.teacher);
      const courses = await addCourse(
        req.body.name,
        id,
        req.body.class
      );
      res.send(courses);
    } catch (error) {
      console.log(error);
      res.status(500).send("Server error");
    }
  }
});

// save the course in the
module.exports = router;
