import express from "express";
const router = express.Router();

import Rides from "./../controllers/ridesController";

//define route

//get all rides offer route
router.get("/rides", Rides.getAllRides);

//get a specific ride offer route
router.get("/rides/:rideId", Rides.getSpecificRide);

//post all rides offer route
//router.post("/rides", Rides.postAllRide);

//create a ride route
router.post("/rides", Rides.createARide);

router.put("/rides/:rideId", Rides.editRide);


router.get("/rides/info/:rideId", Rides.getRideInfo);

export default router;