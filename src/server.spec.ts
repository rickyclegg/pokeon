import request from 'supertest'
import Server from './server'
describe('Test example', () => {
  it('should call execute on main', async () => {
    const stubMain = {
      execute: jest.fn(),
    }
    const { app } = new Server(stubMain)

    await request(app).get('/api/webhook').expect(200)

    expect(stubMain.execute).toHaveBeenCalled()
  })
})
