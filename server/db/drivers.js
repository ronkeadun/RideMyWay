import pool from './connection';
const seed = (c)=>{
    const sql = `
        DROP TABLE IF EXISTS drivers;
        CREATE TABLE drivers(
            id SERIAL PRIMARY KEY, 
            name VARCHAR(255), 
            email VARCHAR(255), 
            password VARCHAR(255)
        )
    `;
    c.query(sql, (err,result)=>{
        if(err){
            return console.error("error running query", err);
        }
        console.log("seed some data");
        return console.log(result);
    });
}

const drivers = pool.connect( (err,client,done)=>{
    if(err){
		return console.error("error fetching client from pool \n Error: ", JSON.stringify(err, undefined, 2), err);
	}
    if(process.env.SEED){
     	//call done to release the client back to the pool
        done();
        seed(client);
     }
});

export default drivers;