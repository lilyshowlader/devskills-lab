import { devskills } from '../data/devskills.js'

function index(req, res) {
  res.render('devskills/index', {
    devskills: devskills
  })
}

// you can use a console.log ("this is working") to see if this is working

export {
	index
}