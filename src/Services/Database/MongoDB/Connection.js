// var mysql = require('mysql');
// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '123123',
//   database:"librarynodedb",
//   port: 3306,  
// });
// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
////////////////////////////////////////////////////////////////////////
// var fs = require('fs');
// var mysql = require('mysql');
// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '123123',
//   database:'librarynodedb',
//   port: 3306,  
//   ssl  : {
//     ca : fs.readFileSync('<path to CA cert file>'),
//     rejectUnauthorized: true
//   }
// });
// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
////////////////////////////////////////////////////////////////////////
// import mysql from 'mysql2/promise';
// const connection = await mysql.createConnection({
//    host: 'localhost',
//    user: 'root',
//    password: '123123',
//    database: 'librarynodedb',
// });
// await connection.connect();
// export async function getAll() {}
// export async function get(id) {}
// export async function remove(id) {}
// export function save(movie) {}
////////////////////////////////////////////////////////////////
// import mysql from 'mysql';
// const connection = await mysql.createConnection({
//    host: 'localhost',
//    user: 'root',
//    password: '123123',
//    database: 'librarynodedb',
// });
// await connection.connect();
// export async function getAll() {
//    const query = 'Select * from librarynodedb.students';
//    const [data] = await connection.query(query);
//    return data;
// }
// export async function get(id) {}
// export async function remove(id) {}
// export function save(movie) {}
////////////////////////////////////////////////////////////////
// import mysql from 'mysql2/promise';
// const connection = await mysql.createConnection({
//    host: 'localhost',
//    user: 'root',
//    password: '123123',
//    database: 'librarynodedb',
// });
// await connection.connect();
// async function insert(movie) {
//    const query = 'INSERT INTO librarynodedb.students (Id,Name,Family,IsActive,IsDeleted) VALUES (1,Kaihan,Tajerbashi,1,0)';
//    const [result] = await connection.query(query, [movie.Name, movie.Family]);
//    return { ...movie, id: result.insertId };
// }
// export async function get(id) {}
// export async function remove(id) {}
// export function save(movie) {
//    if (!movie.id) {
//        return insert(movie);
//    }
// }
////////////////////////////////////////////////////////////////
// let mysql = require('mysql');

// let connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '123123',
//     database: 'librarynodedb'
// });
// connection.connect(function(err) {
//     if (err) {
//       return console.error('error: ' + err.message);
//     }
  
//     console.log('Connected to the MySQL server.');
//   });

////////////////////////////////////////////////////////////////


const mysql = require('mysql');
 
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'sa',
  password: '123123',
  database: 'librarynodedb'
});
 
connection.connect((error) => {
  if (error) throw error;
  console.log('Connected to MySQL database!');
});