const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "315594663",
  database: `grading_system`
});

async function checkDBConnection() {
  try {
    await pool.query("SELECT 1");
    console.log("db connected");
    return true;
  } catch (error) {
    const message = error.message + "\n" + "can't connect to db";
    console.log(message);
    return false;
  }
}
module.exports = {pool, checkDBConnection}

// async function get(table, col, key_value, key) {
//   //if key not provide default value is the primary key.
//   key = key || (await getPrimaryKey(table));
//   //where you need all the rows add -- to avoid where.
//   if (key_value === "*") table += "--";
//   return await pool.query(
//     `SELECT ${col.join(", ")} FROM ${table} WHERE ${key}= ?`,
//     [key_value]
//   );
// }
// async function add(table, cols, values) {
//   return await pool.query(`INSERT INTO ${table}(${cols.join(", ")}) VALUES ?`, [
//     values,
//   ]);
// }
// async function update(table, cols, values, key_value) {
//   const primaryKey = await getPrimaryKey(table);
//   return await pool.query(
//     `UPDATE ${table} SET ${cols.join("=?,")} = ?  WHERE ${primaryKey} = ? `,
//     [...values, key_value]
//   );
// }

// async function del(table, value_key, key) {
//   key = key || (await getPrimaryKey(table));
//   return await pool.query(`DELETE FROM ${table} WHERE ${key} = ${value_key}`);
// }

// async function getPrimaryKey(table) {
//   const sqlQuery = `SELECT K.COLUMN_NAME FROM  
//      INFORMATION_SCHEMA.TABLE_CONSTRAINTS T
//      JOIN INFORMATION_SCHEMA.KEY_COLUMN_USAGE K
//      ON K.CONSTRAINT_NAME=T.CONSTRAINT_NAME  
//      WHERE K.TABLE_NAME=?
//      AND K.TABLE_SCHEMA='digital_life_db'  
//      AND T.CONSTRAINT_TYPE='PRIMARY KEY' LIMIT 1;`;
//   const [[{ COLUMN_NAME: primaryKey }]] = await pool.query(sqlQuery, [table]);
//   return primaryKey;
// }