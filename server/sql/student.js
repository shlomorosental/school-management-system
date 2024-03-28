const { pool } = require("../db");

async function getStudents() {
  let students;
  try {
    [students] = await pool.query(`SELECT * FROM students`);
  } catch (err) {
    console.log(err);
  }
  return students;
}
async function addStudent(student) {
  console.log(student);
  let sql = 'INSERT INTO students (first_name, last_name, birth_date, class, address) VALUES (?, ?, ?, ?, ?)',
    [result] = await pool.query(sql, student);
  return result;
}

module.exports = {
  getStudents,
  addStudent,
};
