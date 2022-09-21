// import { devskills } from '../data/devskills.js'

import { Devskill } from '../models/devskill.js'

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

// you can use a console.log ("this is working") to see if this is working

export {
	index
}