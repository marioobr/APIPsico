const {Pool} = require('pg');
const connectionString = '	postgres://fryoacjg:OkYDA69FEf4AoupiAqdkbjVINVs8sYk_@drona.db.elephantsql.com:5432/fryoacjg';

const pool = new Pool({
    // host: 'drona.db.elephantsql.com',
    // user: 'fryoacjg',
    // password: 'OkYDA69FEf4AoupiAqdkbjVINVs8sYk_',
    // database: 'fryoacjg',
    // port:'5432',
    // ssl: true
    connectionString: connectionString,
    ssl: true
})


const getClinics = async (req,res)=>{
    try {
        const response = await pool.query('SELECT * FROM clinicas ORDER BY nombre ASC');
        res.json(response.rows);
        console.log(response.rows);    
    } catch (error) {
        console.log(''+error);
    }
};

const searchClinics = async (req, res) =>{
    try {
        const id  = req.params.id;
        const response = await pool.query('SELECT direccion, latitud, longitud FROM clinicas WHERE id = $1', [id]);
        res.json(response.rows);
        console.log(response.rows);   
    } catch (error) {
        console.log(''+error);
    }
}

const index = async (req, res) => {
    res.json('Hello World')
}

module.exports = {
    index,
    getClinics,
    searchClinics
}