const db = require('../server/dbconfig');

module.exports={
    findById,
    add,
    find,
    findUsersBy,
    findBy

}

function find() {
    return db("users").select("id", "username").orderBy("id");
  }
  
  // return the role name together with the user data
  function findUsersBy(filter){
    // console.log(filter)
       return db('users as u')
            .where(filter)
            .join('departments as d',  'u.dept_id','d.id')
            .select('u.id', 'u.name', 'u.username', 'u.password', 'u.dept_id', 'd.name as dept')

  }
    function add(user) {
    return db("users").insert(user, "id")
    .then(user => {
        const [id] = user
        return findById(id)
    })
     
  }
  
  function findById(id) {
    return db("users").where({ id }).first();
  }

  function findBy(filter) {

    return db("users")
    .select("id", "username", "password")
    .where(filter)
   
    // return db("users as u")
    //     .join("departments as d", "u.dept_id", "d.id")
    //     .select("u.id", "u.username", "u.password", "d.id as dept", "u.name")
    //     .where(filter)
    //     .orderBy("u.id");
  };
  