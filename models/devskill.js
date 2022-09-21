import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

	
const devskillSchema = new Schema({
  skill: String,
  level: String,
})

const Devskill = mongoose.model('Devskill', devskillSchema)

export {
  Devskill
}

// models should be singular 