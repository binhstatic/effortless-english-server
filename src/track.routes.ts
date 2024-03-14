import { Router } from 'express'

const trackRouter = Router()

trackRouter.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

trackRouter.get('/', (req, res) => {
  res.sendFile('track.mp3', { root: __dirname + '/assets/sounds' })
})

export default trackRouter
