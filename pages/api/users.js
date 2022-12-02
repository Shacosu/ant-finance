const { getConnection } = require('../../utils/db');

export default async function handler(req, res) {
    const { method } = req;
    const pool = await getConnection();
    switch (method) {
        case 'GET':
                 const { recordset: data } = await pool.request().query('select * from tb_hormiga')
                 console.log(data)
                res.json(data)
                break;
    }
  }
  