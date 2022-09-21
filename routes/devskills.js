import { Router } from 'express'
import * as devskillsCtrl from '../controllers/devskills.js'
// I want to import all as devSkillsController/I want to import all of it using this name ^^ 

const router = Router()

/* GET devskills listing. */
router.get('/', devskillsCtrl.index)

// add a new route for new devskills
router.get('/new', devskillsCtrl.new)

//  the route below goes to a specific skill using its id 
router.get('/:id', devskillsCtrl.show)

// the route below will create a new post (skill)
router.post('/', devskillsCtrl.create)

export {
  router
}


