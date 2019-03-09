import pool from './connection';
const seed = (c)=>{
    const sql = `
        DROP TABLE IF EXISTS requests;
        CREATE TABLE requests(
            id SERIAL PRIMARY KEY,
            status boolean NOT NULL, 
            rides_id INTEGER REFERENCES rides(id),
            drivers_id INTEGER REFERENCES drivers(id), 
            passengers_id INTEGER REFERENCES passengers(id),
            created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
        );
    `;
    c.query(sql, (err,result)=>{
        if(err){
            return console.error("error running query", err);
        }
        console.log("seed some data");
        return console.log(result);
    });
}

const requests = pool.connect( (err,client,done)=>{
    if(err){
		return console.error("error fetching client from pool \n Error: ", JSON.stringify(err, undefined, 2), err);
	}
    if(process.env.SEED){
     	//call done to release the client back to the pool
        done();
        seed(client);
     }
});

export default requests;