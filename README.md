# RideMyWay
[![Build Status](https://travis-ci.org/ronkeadun/RideMyWay.svg?branch=gh-pages)](https://travis-ci.org/ronkeadun/RideMyWay)

# Project Overview  
Ride-My-Way is a carpooling application that provides drivers with the ability to create ride offers and passengers to join available ride offers. 

## Required Features 
1. Users can create an account and log in.  
2. Drivers can add ride offers..  
3. Passengers  can view all available ride offers.  
4. Passengers can see the details of a ride offer and request to join the ride. E.g What time  the ride leaves, where it is headed e.t.c  
5. Drivers can view the requests to the ride offer they created.  
6. Drivers can either accept or reject a ride request.      

## Optional Features 
1. Users can only see and respond to ride offers from their friends on the application.  
2. Passengers get real time notifications when their request is accepted or rejected

##Project Decompostion
1. Identify all nouns in the required features:
	-rides
	-requests
	-passengers
	-drivers

2. Build relationships among the nouns in the required features (1:1, 1:Many, Many:Many):
	-drivers:rides :: 1:Many(A driver can add many ride offers but a particular ride offer belongs to a driver)

	-passengers:rides :: Many:1(A particular passenger can join one ride at a time but a ride can be joined by many passengers)

	-passengers:requests :: Many:Many(A passenger can make many ride requests and a ride request can be made by many passengers)

	-drivers:requests :: 1:Many(A driver can have many rides requests from many passengers but a particular ride request can only belong to a driver)

	-rides:requests :: 1:Many(A particular ride can have many requests made by many passengers, a particular request can be made by many passengers for a particular ride)

3. Build a schema for the nouns and their relationships