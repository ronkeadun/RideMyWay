import chai from 'chai';
//const chai = require('chai');
const assert = chai.assert;

function first(){
	return "Hello World"
};

describe("first test", ()=>{
	it("first should return hello world", ()=>{
		assert.equal(first(), "Hello World");
	})
	it("first should be type string", ()=>{
		assert.typeOf(first(), "string");
	})
})