const {pool} = require ("../db")

async function getCourses() {
    const sql = `SELECT courses.name ,CONCAT(teachers.first_name, ' ' ,teachers.last_name) AS teacher, courses.class
      FROM courses
      INNER JOIN teachers ON courses.teacher_id = teachers.id;`;
    const res = await pool.query(sql);
    return res;
  }
  async function addCourse (name, id ,clas) {
      let sql = `INSERT INTO courses (name, teacher_id, class) VALUES (?, ?, ?) `;
      const params = [name, id, clas];
      const res = await pool.query(sql,params);
      return res;
  };
  
module.exports = {getCourses,addCourse};
