import express from "express";
const router = express.Router();

import { rides,rideOffers } from "./../models/rides";

//define route

//get all rides route
router.get("/rides", (req, res)=>{
	res.send(rides);
});

//get a specific ride offer route
router.get("ride/:rideId", (req, res)=>{
	let id = req.params.rideId;
	res.send(rides[id]);
});

//post all rides route
router.post("/rides", (req, res)=>{
	let ride = req.body;
	rides.push(ride);
	res.redirect("/api/v1/rides");
});

//create a ride route
router.post("/ride", (req, res)=>{
	let ride = req.body;
	rides.push(ride);
	res.send(ride);
});


router.get("/ride/info/:rideId", (req, res)=>{
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
});

router.get("/api", (req, res)=>{
	res.render("index", {
		rides:rideOffers,
	});
});

router.post("/add", (req, res)=>{
	let newRide = req.body.newride;
	rideOffers.push({
		id:rideOffers.length + 1,
		desc:newRide
	})
	res.redirect("/api")
})

export default router;