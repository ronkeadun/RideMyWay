import { rides } from "./../models/rides";

class Rides{
	static getAllRides(req, res){
		res.send(rides);
	}

	static getSpecificRide(req, res){
		/*let id = req.params.rideId;
		res.send(rides[id]);*/
		const ride = rides.find((c)=>c.id === parseInt(req.params.rideId));
		if(!ride){
			//res.status(404).send("The ride with the given ID was not found");
			res.status(404).json({
			    status: 'error',
			    message: 'The ride with the given ID was not found',
    		});
			//res.sendStatus(404);
		}
		res.send(ride);
	}

	static postAllRide(req, res){
		let ride = req.body;
		rides.push(ride);
		res.redirect("/api/v1/rides"); 
	}

	static createARide(req, res){
		/*let ride = req.body;
		rides.push(ride);
		res.send(ride);*/
		if(!req.body.Requester || req.body.Requester.length < 3){
			//Bad request
			res.status(400).send("Requester name is required and should be minimum of 3 characters");
			return;
		}
		const ride = {
			id: rides.length + 1,
			Requester: req.body.Requester,
			Pickup_Location: req.body.Pickup_Location,
			Destination: req.body.Destination,
			Take_off_time: req.body.Take_off_time
		};
		rides.push(ride);
		res.send(ride);
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

	static editRide(req, res){
		/*let id = req.params.rideId;
		let ride = rides[id];
		let newRide = req.body;
		res.send(Object.assign(ride,newRide));*/

		//Look up the ride
		const ride = rides.find((c)=>c.id === parseInt(req.params.rideId));
		
		//If not existing return 404
		if(!ride){
			res.status(404).send("The ride with the given ID was not found");
		}
		//Validate
		if(!req.body.Requester || req.body.Requester.length < 3){
			//If invalid, return 400 - Bad request
			res.status(400).send("Requester name is required and should be minimum of 3 characters");
			return;
		}
		//Update ride
		ride.Requester = req.body.Requester,
		ride.Pickup_Location = req.body.Pickup_Location,
		ride.Destination = req.body.Destination,
		ride.Take_off_time = req.body.Take_off_time
		//Return updated ride
		res.send(ride);
	}
}

export default Rides;