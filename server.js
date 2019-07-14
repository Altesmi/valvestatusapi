import express from 'express'
import bodyparser from 'body-parser'
import routes from './api/routes/valveRoutes'

const app = express()
const port = process.env.PORT || 3000


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }));

routes(app)

app.listen(port)

console.log(`valve status API running on ${port}`)