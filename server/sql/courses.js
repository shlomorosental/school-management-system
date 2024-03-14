const {pool} = require ("../db")

async function getCourses() {
    const sql = `SELECT courses.name ,CONCAT(teachers.first_name, ' ' ,teachers.last_name) AS teacher, courses.class
      FROM courses
      INNER JOIN teachers ON courses.teacher_id = teachers.id;`;
    const res = await pool.query(sql);
    return res;
  }



module.exports = getCourses;