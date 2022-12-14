import { Devskill } from '../models/devskill.js'
// importing from model

// the function below displays all the skills http://localhost:3000/devskills
// we added time: req.time
function index(req, res) {
  Devskill.find({})
  .then(devskills => { // todos represents the result of the query, in this case ALL todos
    res.render('devskills/index', {
      devskills: devskills,
      time: req.time
    })
  })
  .catch(error => { // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/')
  })
}

// below is the newdevskills function which display the screen that allows the user to add a skill
function newDevSkill(req, res) {
  res.render('devskills/new')
}


// the function below using mongoose method model.create or Devskill.create allows the user to create & post the new skill
// devskills.create is creating the skill
// the devskill on line 30, represents the newly created dev skill.
// req.body -> connects to new ejs name="skill"
function create(req, res) {
  console.log("this is submitted form data:", req.body)
  Devskill.create(req.body)
  .then(devskill => {
		// Notice we are doing a redirect here!
    res.redirect('/devskills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/devskills')
  })
}

// this function shows the details of each individual skill. 
function show(req, res) {
  Devskill.findById(req.params.id)
  .then(devskill => {
    res.render('devskills/show', {
      devskill: devskill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/devskills')
  })
}

// the function below uses the mongoose method findbyidanddelete and allows the user to delete a skill
function deleteDevskill(req, res) {
  Devskill.findByIdAndDelete(req.params.id)
  .then(devskill => {
    res.redirect('/devskills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/devskills')
  })
}


export {
	index,
  newDevSkill as new,
  create,
  show,
  deleteDevskill as delete
}

// notice how each of these functions have been imported. 

