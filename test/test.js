//import chai, { expect } from 'chai';
const chai = require('chai');
const assert = chai.assert;

function first(){
	return "Hello World"
};

function second(callback){
	setTimeout( ()=>callback("hello"), 1000);
};

function calculator(){
	this.add = function(a,b){
		if (typeof a !== 'number' || typeof b !=='number'){
			throw new Error('add only takes number')
		}
		return (a + b);
	}
};

class calculator1{
	static add(a,b){
		if (typeof a !== 'number' || typeof b !=='number'){
			throw new Error('add only takes number')
		}
		return (a + b);
	}
};

describe("first test", ()=>{
	it("first should return hello world", ()=>{
		assert.equal(first(), "Hello World");
	})
	it("first should be type string", ()=>{
		assert.typeOf(first(), "string");
	})
})

describe("second test", ()=>{
	it("should return expected value from callback", (done)=>{
		second((returndata)=>{
			expect(returndata).to.equal("hello");
			done();
		})
	})
})

describe("calculator test", ()=>{
	const cal = new calculator();
	it("should return expected value from calculator", ()=>{
		expect(cal.add(20,5)).to.equal(25);
	})
	it("should accept numbers only", ()=>{
		expect(()=> {calculator1.add("20",5)}).to.throw('add only takes number');
	})
})

describe("calculator1 test", ()=>{
	it("should return expected value from calculator", ()=>{
		expect(calculator1.add(20,5)).to.equal(25);
		console.log(process.env.NODE_ENV);
	})
	it("should accept numbers only", ()=>{
		expect(()=> {calculator1.add("20",5)}).to.throw('add only takes number');
	})
})