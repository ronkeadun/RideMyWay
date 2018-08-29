import { rides } from "./../models/rides";
import pool from '../db/connection';

class Rides{
	static getAllRides(req, res, next){
		pool.connect( (err,client,done)=>{ 
			if(err){
				return next(err);
			}
			//client("sql", call back function)
			client.query("SELECT * FROM rides", (err,result)=>{
				//call done to release the client back to the pool
		        done();
				if(err){
					return next(err);
				}
				if(result.rowCount < 1) {
          			res.status(404).json({
            			status: 'error',
            			message: 'No Ride Offer Available',
          			})
        		} else {
          			res.status(200).json({  
            			status: 'success',
            			message: 'Returning all available ride offers',
            			rides: result.rows, 
          			})
        		}
			});
		});
	}

	static getSpecificRide(req, res, next){
		pool.connect( (err,client,done)=>{
			if(err){
				return next(err);
			}
			//client("sql", call back function)
			client.query("SELECT * FROM rides WHERE ride_id=$1", [req.params.rideId], (err,result)=>{
				//call done to release the client back to the pool
		        done();
				if(err){
					return next(err);
				}
				if(result.rowCount < 1) {
          			res.status(404).json({
            			status: 'error',
            			message: 'Ride was not found',
          			});
        		} else {
          			res.status(200).json({  
            			status: 'success',
            			message: 'Returning requested ride offer',
            			ride: result.rows[0], 
          			});
        		}
			});
		});
	}

	static createARide(req, res, next){
		const {requester,pickup_location, destination, take_off_time, number_of_available_seats} = req.body;
		if ( (number_of_available_seats === undefined)) {
	      	res.status(400).json({
		        status: 'error',
		        message: 'Please provide number_of_available_seats field'
      		});
	    }else{
	    	const queryString = "INSERT INTO rides(requester,pickup_location, destination, take_off_time, number_of_available_seats) VALUES($1, $2, $3, $4, $5) RETURNING * ";
			const data = [
			    requester,
			    pickup_location,
			    destination,
			    take_off_time,
			    number_of_available_seats
			]
			pool.connect( (err,client,done)=>{
				if(err){
					return next(err);
				}
				//client("sql", "parameters", call back function)
				client.query(queryString, data, (err,result)=>{
					//call done to release the client back to the pool
				    done();
					if(err){
						return next(err);
					}
					console.log(result.rows);
					//res.redirect("/api/v1/rides");
				});
			});
		}
	}

	static getRideInfo(req, res){
		let id = req.params.rideId;
		let ride = rides[id];
		let query = req.query;
		let isEmptyQuery = Object.keys(query).length
		if(!isEmptyQuery){
			res.send(ride);
		}
		else{
			let response = {};
			Object.keys(query).forEach((key)=>{
				response[key] = ride[key];
			});
		res.send(response);
		}
	}

	static deleteSpecificRide(req, res, next){
		pool.connect( (err,client,done)=>{
			if(err){
				return next(err);
			}
			//client("sql", call back function)
			client.query("DELETE FROM rides WHERE ride_id=$1", [req.params.rideId], (err,result)=>{
				//call done to release the client back to the pool
		        done();
				if(err){
					return next(err);
				}
				if(result.rowCount < 1) {
          			res.status(404).json({
            			status: 'error',
            			message: 'Ride offer could not be deleted',
          			})
        		} else {
          			res.status(200).json({  
            			status: 'success',
            			message: 'Ride offer was deleted successfully',
          			})
        		}
			});
		});
	}

	static editRide(req, res){
		const {requester,pickup_location, destination, take_off_time, number_of_available_seats} = req.body;
		if ( (number_of_available_seats === undefined)) {
	      	res.status(400).json({
		        status: 'error',
		        message: 'Please provide number_of_available_seats field'
      		});
	    }else{
	    	const queryString = "UPDATE rides SET requester=$1, pickup_location=$2, destination=$3, take_off_time=$4, number_of_available_seats=$5 WHERE ride_id=$6 RETURNING * ";
			const data = [
			    requester,
			    pickup_location,
			    destination,
			    take_off_time,
			    number_of_available_seats,
			    req.params.rideId
			]
			pool.connect( (err,client,done)=>{
				if(err){
					return next(err);
				}
				//client("sql", "parameters", call back function)
				client.query(queryString, data, (err,result)=>{
					//call done to release the client back to the pool
				    done();
					if(err){
						return next(err);
					}
					console.log(result.rows);
					res.redirect("/api/v1/rides");
				});
			});
		}
	}
}

export default Rides;