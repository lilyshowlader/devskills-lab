import { Devskill } from '../models/devskill.js'
// importing from model

function index(req, res) {
  Devskill.find({})
  .then(devskills => { // todos represents the result of the query, in this case ALL todos
    res.render('devskills/index', {
      devskills: devskills,
    })
  })
  .catch(error => { // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/')
  })
}

// below is the newdevskills function which will allow users to add a new skill
function newDevSkill(req, res) {
  res.render('devskills/new')
}

export {
	index,
  newDevSkill as new
}