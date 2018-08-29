import app from '../../app';
import pool from './connection';
const seed = (c)=>{
        const sql = `
        DROP TABLE IF EXISTS rides;
        CREATE TABLE rides(
            ride_id SERIAL PRIMARY KEY, 
            requester VARCHAR(255), 
            pickup_location VARCHAR(255), 
            destination VARCHAR(255),
            take_off_time TIME WITH TIME ZONE,
            number_of_available_seats int NOT NULL, 
            created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(), 
            updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
        );
        INSERT INTO rides(requester, pickup_location, destination, take_off_time, number_of_available_seats) 
        VALUES ('Stephen John', 'Isolo', 'Agege', '4:30pm', 3);
        INSERT INTO rides(requester, pickup_location, destination, take_off_time, number_of_available_seats) 
        VALUES ('James Steve', 'Apapa', 'Ketu', '2:30pm', 1);
        INSERT INTO rides(requester, pickup_location, destination, take_off_time, number_of_available_seats) 
        VALUES ('Sola Matthew', 'Opebi', 'Berger', '5:10pm', 4);
        INSERT INTO rides(requester, pickup_location, destination, take_off_time, number_of_available_seats) 
        VALUES ('Naomi Maxwell', 'Yaba', 'Ikeja', '12:00pm', 0);
        `;
        c.query(sql, (err,result)=>{
            if(err){
                return console.error("error running query", err);
            }
            console.log("seed some data");
            return console.log(result);
        });
    }

const rides = pool.connect( (err,client,done)=>{
    if(err){
		return console.error("error fetching client from pool \n Error: ", JSON.stringify(err, undefined, 2), err);
	}
    if(process.env.SEED){
     	//call done to release the client back to the pool
        done();
        seed(client);
     }
});

export default rides;