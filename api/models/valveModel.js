import mongoose from 'mongoose'
import config from '../../utils/config'

mongoose.connect(
  config.mongoUri, 
  { useNewUrlParser: true }
)

const Schema = mongoose.Schema

const valveSchema = new Schema({
  datetime: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['Open','Closed'],
    required: 'Valve status must be always set',
  },
  })

  valveSchema.statics.format = function(valveStatus) {
    return {
      datetime: valveStatus.datetime,
      status: valveStatus.status,
    }
  }
  
  export default mongoose.model('valve',valveSchema)
  module.exports = mongoose.model('valve',valveSchema)
