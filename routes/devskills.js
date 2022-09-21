import { Router } from 'express'
import * as devskillsCtrl from '../controllers/devskills.js'

const router = Router()

/* GET devskills listing. */
router.get('/', devskillsCtrl.index)


export {
  router
}


