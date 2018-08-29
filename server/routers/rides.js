import express from "express";
const router = express.Router();

import Rides from "./../controllers/ridesController";

/*const isValidId = (req,res,next)=>{
	if(!isNaN(req.params.rideId)){
		return next();
	}
	res.json ("Invalid ID");
}*/

//define route

//get all rides offer route
router.get("/", Rides.getAllRides);

//get a specific ride offer route
router.get("/:rideId", Rides.getSpecificRide);

//post all rides offer route
//router.post("/rides", Rides.postAllRide);

//create a ride route
router.post("/", Rides.createARide);

router.put("/edit/:rideId", Rides.editRide);

router.delete("/delete/:rideId", Rides.deleteSpecificRide);


router.get("/info/:rideId", Rides.getRideInfo);

export default router;