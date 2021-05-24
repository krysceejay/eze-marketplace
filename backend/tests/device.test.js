const request = require('supertest')
const mongoose = require('mongoose')
const BuyRequest = require('../models/BuyRequest')

let server

describe('/api/device', () => {
    let conn

    beforeAll(async () => {
        conn = await mongoose.connect(global.__MONGO_URI__, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
          })
    })

    afterAll(async () => {
        await conn.close()
    })

    beforeEach(() => { server = require('../server')})
    afterEach(async () => { 
        server.close() 
        await BuyRequest.deleteMany({})
    })

    describe('GET /', () => {
        it('should return all buy request devices', async () => {
            await BuyRequest.create({
                name: 'iPhone X', 
                grade: 'A1', 
                storageSize: '126GB', 
                price: '560', 
                image: 'image.png'
              })

            const res = await request(server)
                .get('/api/device')

            expect(res.status).toBe(200)
            expect(res.body.devices.length).toBeGreaterThan(0)
            expect(res.body.curpage).toBeDefined()
            expect(res.body.pages).toBeDefined()
        })
    })

    describe('GET /search', () => {
        it('should search for devices using comma separated case-insensitive values', async () => {
            await BuyRequest.create({
                name: 'iPhone X', 
                grade: 'A1', 
                storageSize: '126GB', 
                price: '560', 
                image: 'image.png'
              })

            const body = {
                "search": "iphone x, 128GB"
            }  

            const res = await request(server)
                    .post(`/api/device/search`)
                    .send(body)

            expect(res.status).toBe(200)
            expect(res.body.devices.length).toBeGreaterThan(0)
        })
    })
})