import express from 'express'
import userRouter from './user.routes'
import trackRouter from './track.routes'

const app = express()
const port = 3131

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use('/user', userRouter)
app.use('/courses', trackRouter)

app.listen(port, () => {
  console.log('Server is running')
})
