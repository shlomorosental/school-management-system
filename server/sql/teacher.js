const {pool} = require ("../db")

async function getTeacher() {
    const sql = `SELECT * FROM teachers`
    const res = await pool.query(sql);
    return res;
  }
  
module.exports = getTeacher;