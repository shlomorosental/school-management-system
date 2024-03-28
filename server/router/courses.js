const express = require("express");
const { get } = require("../db");
const { getCourses, addCourse, deleteCourse, updateCourse } = require("../sql/courses");
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
      const courses = await addCourse(req.body.name, id, req.body.class);
      res.send(courses);
    } catch (error) {
      console.log(error);
      res.status(500).send("Server error");
    }
  }
});

router.delete("/:id", async (req, res) => {
  if (!req.params.id) {
    return res.status(400).send({
      error: "Missing course ID",
    });
  } else {
    try {
      await deleteCourse(req.params.id);
      res.send("Deleted the course");
    } catch (err) {
      res.status(400).send({
        error: "Failed to Delete",
      });
    }
  }
});
router.put("/:id", async (req, res) => {
  if (!req.body.name && !req.body.teacher && !req.body.class) {
    return res.status(400).send({
      error: "Please provide course name or teacher or class to update",
    });
  } else {
    try {
      let id = await getIdByName(req.body.teacher);
      const course = await updateCourse(req.params.id, req.body.name, id, req.body.class);
      res.send(course);
    } catch (e) {
      res.status(400).send(e);
    }
  }
});

module.exports = router;
