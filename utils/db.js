const sql = require("mssql");

const config = {
    user: 'sa',
    password: '123',
    server: '54.227.75.112', 
    database: 'hormiga-group',
    options: {
        encrypt: false,
        trustServerCertificate: true
    },
};

async function getConnection() {
    try {
        const pool = await sql.connect(config);
        console.log("conectado a la db!")
        return pool;
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getConnection
};