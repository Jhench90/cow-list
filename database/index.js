const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cowlist'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});

// Your Database Queries Here!!
const get = (cb=()=>{}) => {
  connection.query('SELECT * FROM cows', (err, data)=>{
    if (err) {
      console.log(err)
    } else {
      console.log('Delivering data: ', data)
      cb(data) //[]
    }
  })
}

const post = (name, description, cb=()=>{}) => {
  console.log('triggered post!')
  connection.query(`INSERT INTO cows VALUES ('${name}', '${description}');`, (err, data)=>{
    if (err) {
      console.log(err)
    } else {
      console.log('Delivering data: ', data)
      cb(data) //[]
    }
  })
}

// Don't forget to export your functions!
module.exports = {
  get: get,
  post: post
}
