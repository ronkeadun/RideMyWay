import { rides } from "./../model/rides";

class Rides{
	static getAllRides(req, res){
		res.send(rides);
	}

	static getSpecificRide(req, res){
		let id = req.params.rideId;
		res.send(rides[id]);
	}

	static postAllRide(req, res){
		let ride = req.body;
		rides.push(ride);
		res.redirect("/api/v1/rides");
	}

	static createARide(req, res){
		let ride = req.body;
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
		let id = req.params.rideId;
		let ride = rides[id];
		let newRide = req.body;
		Object.assign(ride,newRide);
		res.send();
	}
}

export default Rides;