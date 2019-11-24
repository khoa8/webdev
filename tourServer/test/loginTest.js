const app = require('../tourServer');
const assert = require('chai').assert;
const request = require('supertest'); 
const cookie = require('cookie');

describe('Login Tests', function () {
	let response;
	let tours = null;
	let myCookie = null;
	let agent = request.agent(app);
	
	before(async function(){
		response = await agent.get('/tours');
	})
	it('Cookie with appropriate name is returned', function(){
		let cookies = response.header['set-cookie'].map(cookie.parse);
		cookies= cookies.filter(c => c.hasOwnProperty('sq9943'));
		assert.notEmpty(cookies);
		myCookie = cookies[0];
	});
	describe('Login Sequence', function() {
		before(async function(){
			response = await agent.post('/login')
				.send({"email": "sylvan2059@live.com",	"password": "1wQX_lYt"});
		});
		it('Login Good', function(){
			assert.equal(response.status, 200);
		});
		it('User returned', function(){
			let user = JSON.parse(response.text);
			assert.containsAllKeys(user, ['firstName', 'lastName', 'role']);
		});
		it('Cookie session ID changed', function () {
			let cookies = response.header['set-cookie'].map(cookie.parse);
			cookies = cookies.filter(c => c.hasOwnProperty('sq9943'));
			assert.notEmpty(cookies);
			assert.notEqual(cookies[0]['sq9943'], myCookie['sq9943']);
		});
	});
	describe('Bad Logins', function(){
		it('Bad Email', async function(){
			response = await agent.post('/login')
				.send({"email": "1sylvan2059@live.com", "password": "1wQX_lYt"});
			assert.equal(response.status, 401);
		});
		it('Bad Password', async function(){
			response = await agent.post('/login')
				.send({"email": "sylvan2059@live.com",	"password": "11wQX_lYt"});
			assert.equal(response.status, 401);
		});
	})
})
	