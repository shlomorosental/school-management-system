const {pool} = require ("../db")

async function getTeacher() {
    const sql = `SELECT * FROM teachers`
    const res = await pool.query(sql);
    return res;
  }
async function getIdByName(name) {
    let id = null;
    try{
        const [data] = await getTeacher();
        for(let i of data){
            if(i.first_name + " " + i.last_name===name){id=i.id;}
        }   
    }catch(e){console.log(e)}
    return id;
}

module.exports={getTeacher,getIdByName};