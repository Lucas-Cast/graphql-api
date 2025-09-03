import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import actorRoute from './routes/actor'
import movieRoute from './routes/movie'

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api', (req, res) => {
  res.sendStatus(200)
})
app.use(actorRoute)
app.use(movieRoute)

app.listen(process.env.API_PORT, () => {
  console.log(`Server is running on port ${process.env.API_PORT}`)
})
