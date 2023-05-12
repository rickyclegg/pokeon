import request from 'supertest'
import app from './server'
describe('Test example', () => {
  xit('', async () => {
    await request(app).get('/api/webhook').expect(200)
  })
})
