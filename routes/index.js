import { Router } from 'express'

const router = Router()

// landing page (first page you see)
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'DevSkills' })
})

export { 
  router
}
