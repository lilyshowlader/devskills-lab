import { Router } from 'express'
import * as devskillsCtrl from '../controllers/devskills.js'
// I want to import all as devSkillsController/I want to import all of it using this name ^^ 

const router = Router()

// the base URL for any route in this file is localhost3000/devskills - anything after is an add on
// we know what the base is bcus of what is in server.js 

/* GET devskills listing. */
router.get('/', devskillsCtrl.index)

// add a new route for new devskills
router.get('/new', devskillsCtrl.new)

//  the route below goes to a specific skill using its id 
router.get('/:id', devskillsCtrl.show)

// the route below will create a new post (skill)
router.post('/', devskillsCtrl.create)

// the route below will delete a skill
router.delete('/:id', devskillsCtrl.delete)

export {
  router
}


