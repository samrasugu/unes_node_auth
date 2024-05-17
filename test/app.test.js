const request = require('supertest');
const app = require('../index.js');
const assert = require('assert');

describe('Test the root path', () => {
    it('should return a 200 status code', async () => {
        const response = await request(app).get('/');
        assert.equal(response.statusCode, 200);
    });
});

describe('Test the environment variables', () => {
    it('should load environment variables from the .env file', () => {
        assert.strictEqual(process.env.PORT, '3000');
    });
});