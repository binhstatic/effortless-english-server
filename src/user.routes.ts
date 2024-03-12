import { Router } from 'express'

const userRouter = Router()

userRouter.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

userRouter.get('/test', (req, res) => {
  res.json({ message: 'Hello World' })
})

export default userRouter
