//import chai, { expect } from 'chai';
import request from 'supertest';
import app from '../app';
import { rides } from "../server/models/rides";

describe('Test for rides endpoints', () =>{
	describe("GET all ride offers", ()=>{
		it("should verify router request status", (done)=>{
			request(app)
				.get("/api/v1/rides")
				.expect(200, done);
		})
		/*it("App should send back response", (done)=>{
			request(app)
				.get("/api/v1/rides")
				.expect(rides, done);
		})*/
		it('should return an array of all ride offers', (done) => {
	        request(app)
		        .get('/api/v1/rides')
		        .set('Accept', 'application/json')
		        .set('Content-Type', 'application/x-www-form-urlencoded')
		        .end((err, res) => {
			        expect(err).to.equal(null);
			        expect(res.status).to.equal(200);
			        expect(res.body.status).to.equal('success');
			        expect(res.body.rides).to.be.an('array');
			        done();
		        });
	    });
	});

	describe('GET single ride offer', () => {
	    it('should return an object of a ride offer', (done) => {
	    	const ride = rides[0];
	        request(app)
		        .get(`/api/v1/rides/${ride.id}`)
		        .set('Accept', 'application/json')
		        .set('Content-Type', 'application/x-www-form-urlencoded')
		        .end((err, res) => {
			        expect(err).to.equal(null);
			        expect(res.status).to.equal(200);
			        expect(res.body.status).to.equal('success');
			        expect(res.body.ride).to.be.an('object');
			        console.log(res.body.ride);
			        done();
		        });
	    });
  	});

  	describe('POST ride offer', (done) => {
	    it('should respond with success in an object also containing created resource', () => {
	        request(app)
		        .post('/api/v1/rides')
		        .set('Accept', 'application/json')
		        .set('Content-Type', 'application/x-www-form-urlencoded')
		        .send({
		        	requester: "Stephen John",
		        	pickup_location: "Isolo", 
		        	destination: "Apapa", 
		        	take_off_time : "4:30pm", 
		        	number_of_available_seats: 2
		        })
		        .end((err, res) => {
		          expect(err).to.equal(null);
		          expect(res.status).to.equal(201);
		          expect(res.body.status).to.equal('success');
		          expect(res.body.rides).to.be.an('object');
		          expect(res.body.message).to.equal('Ride offer was added successfully');
		          done();
		        });
	    });
  	});

});