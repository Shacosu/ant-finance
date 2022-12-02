const { getConnection } = require('../../utils/db');
const sql = require('mssql')

export default async function handler(req, res) {
    const { method } = req;
    const pool = await getConnection();
    console.log(method)
    switch (method) {
        case 'GET':
                //  const data = await pool.request()
                //     .input('var_username', sql.VarChar(50), 'Shacosu')
                //     .input('var_password', sql.VarChar(50), 'perro123')
                //     .query('insert into tb_hormiga (tbh_username, tbh_password) values (@var_username, @var_password)')
                // console.log(data)
                res.send("Get request!")
                break;
        case 'POST': 
        const { username, password } = req.body
       const { rowsAffected } = await pool.request()
            .input('var_username', sql.VarChar(50), username)
            .input('var_password', sql.VarChar(50), password)
            .query('insert into tb_hormiga (tbh_username, tbh_password) values (@var_username, @var_password)')
            res.send("Post Request Exitoso!");
        break;
    }
  }
  