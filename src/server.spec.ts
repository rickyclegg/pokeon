import request from 'supertest'
import app from './server'
describe('Test example', () => {
  it('It should return OK from root', async () => {
    await request(app).get('/').expect(200)
  })
})
