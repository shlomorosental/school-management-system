const { pool } = require("../db");

async function getCourses() {
  const sql = `SELECT courses.name,courses.id ,CONCAT(teachers.first_name, ' ' ,teachers.last_name) AS teacher, courses.class
      FROM courses
      INNER JOIN teachers ON courses.teacher_id = teachers.id;`;
  const res = await pool.query(sql);
  return res;
}
async function addCourse(name, id, clas) {
  let sql = `INSERT INTO courses (name, teacher_id, class) VALUES (?, ?, ?) `;
  const params = [name, id, clas];
  const res = await pool.query(sql, params);
  return res;
}
async function deleteCourse(id) {
  let sql = "DELETE FROM courses WHERE id=?";
  const params = [id];
  const res = await pool.query(sql, params);
  if (res.affectedRows > 0) {
    return true;
  } else {
    return false;
  }
}
async function updateCourse(id, name, teacher_id, clas) {
  let sql = `UPDATE courses SET name=?, class=?, teacher_id=? WHERE id=?`;
  const params = [name, clas, teacher_id, id];
  const res = await pool.query(sql, params);
  return res;
}

module.exports = { getCourses, addCourse, deleteCourse, updateCourse };
