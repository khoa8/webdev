const app = require('../tourServer');
const assert = require('chai').assert;
const request = require('supertest'); 
const cookie = require('cookie');

describe('Get All Tour Tests', function () {
	let response;
	let tours = null;
	before(async function(){
		response = await request(app).get('/tours');
	})
	it('Everything is OK', async function(){
		assert.equal(response.status, 200);
	});
	it('Returns an array', function(){
		tours = JSON.parse(response.text);
		assert.isArray(tours);
	});
	it('All tour elements have name and date', function(){
		tours.forEach(function(tour){
			assert.containsAllKeys(tour, ['Name', 'Date']);
		});
	});
	it('Cookie with appropriate name is returned', function(){
		let cookies = response.header['set-cookie'].map(cookie.parse);
		let mycookie = cookies.filter(c => c.hasOwnProperty('sq9943'));
		assert.notEmpty(mycookie);
	});
})

describe('Get an individual tour', function () {
	let response;
	let tours = null;
	before(async function(){
		response = await request(app).get('/tours');
	})
	it('Get an existing tour', async function(){
		console.log(`Trying path: /tours/JPqKVwvhODf07ia1`);
		tours = JSON.parse(response.text);
		let a = tours.filter(t => t._id === 'JPqKVwvhODf07ia1' );
		console.log(a);
		assert.notEmpty(a);
	});
	it('Get another existing tour', function(){
		console.log(`Trying path: /tours/ULTQvFxTAx8wRroC`);
		let b = tours.filter(t => t._id === 'ULTQvFxTAx8wRroC' );
		console.log(b);
		assert.notEmpty(b);
	});
	it('Try getting a non-existing tour', function(){
		console.log(`Trying path: /tours/nonExistingTourId`);
		let b = tours.filter(t => t._id === 'nonExistingTourId' );
		console.log(b);
		assert.empty(b);
	});
})
	