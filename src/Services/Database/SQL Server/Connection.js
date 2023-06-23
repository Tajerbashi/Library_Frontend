const sql = require('msnodesqlv8');
const serverName = "DESKTOP-9EC7HCL";
const database = "NodeLibraryDB";
const trusted_connection = "Yes";
const driver = "SQL Server Native Client 11.0";
const constr = `server=${serverName};Database=${database};Trusted_Connection=${trusted_connection};Driver=${driver};`;
// console.log (constr);
// const query = 'SELECT * FROM Security.Student';
// sql.query(constr, query, (err, rows) => {
//     console.log(rows);
// });

const GetById = (id) => {
    const query = `SELECT * FROM Security.Student st WHERE st.Id = ${id} `;
    sql.query(constr, query, (err, rows) => {
        console.log(rows);
    });
}
GetById(4);