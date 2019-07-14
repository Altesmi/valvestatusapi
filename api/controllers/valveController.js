import Valve from '../models/valveModel'
import mongoose from 'mongoose'

const returnValveStatus = async function(req,res) {
  const status = await Valve.find().sort({'datetime': -1}).limit(1)
  res.json(status.map(stat => Valve.format(stat))[0])
}

const changeValveStatus = async function(req,res) {
  
  if(req.body.status === 'Open' || req.body.status === 'Closed')  {
    const logs = await Valve.find()
    if(logs.length >= 100) {
      /*if there is more than 100 entries remove the oldest
        entry before saving the newest*/
        const oldestEntry = await Valve.find()
        .sort({ 'datetime': 1 }).limit(1)
        await Valve.findByIdAndDelete(oldestEntry[0]._id)
    }
    const valveStatus = new Valve(req.body)
    const setValveStatus = await valveStatus.save()
    return res.status(201).json(setValveStatus)
  } else {
    return res.status(400).json({ Error: 'valve status can be only "Open" or "CLosed" ' })
  }

}

const returnLogs = async function(req,res) {
  const logs = await Valve.find()
  res.json(logs.map(log => Valve.format(log)))
}

export default {returnValveStatus, changeValveStatus, returnLogs}