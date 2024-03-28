const express = require("express");
const { getStudents, addStudent } = require("../sql/student");
const router = express.Router();

router.get("/", async function (req, res) {
  try {
    let dataStudent = await getStudents();
    res.json(dataStudent);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});
router.post("/", async function (req, res) {
  if (!req.body.first_name || !req.body.last_name) return res.status(400).send("Missing parameters");
  try {
    let student = req.body;
    let result = await addStudent([student.first_name, student.last_name, student.birth_date, student.class, student.address]);
    res.json({ id: result });
  } catch (e) {
    console.log(e);
    res.status(500).send(`Error adding the student: ${e}`);
  }
});

module.exports = router;
