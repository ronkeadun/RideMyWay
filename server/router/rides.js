import express from "express";
const router = express.Router();

import Rides from "./../controller/ridesController";

//define route

//get all rides offer route
router.get("/rides", Rides.getAllRides);

//get a specific ride offer route
router.get("/ride/:rideId", Rides.getSpecificRide);

//post all rides offer route
router.post("/rides", Rides.postAllRide);

//create a ride route
router.post("/ride", Rides.createARide);


router.get("/ride/info/:rideId", Rides.getRideInfo);

export default router;