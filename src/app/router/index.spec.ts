import App from '../app';
import request from 'supertest';
import http from 'http-status-codes';

describe('/', () => {
    describe('GET', () => {
        test('Should be 200', async () => {
            const response = await request(App).get('/');
            expect(response.statusCode).toBe(http.ACCEPTED);
        });
    });
});