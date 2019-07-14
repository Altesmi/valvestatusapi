import dotenv from 'dotenv'

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}
const port = process.env.PORT
const mongoUri = process.env.MONGODB_URI

export default {port, mongoUri}

