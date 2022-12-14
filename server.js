import "dotenv/config.js"
import createError from 'http-errors'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import logger from 'morgan'
import methodOverride from 'method-override'
// Connect to the database with Mongoose
import './config/database.js'

// import routers
import { router as indexRouter } from './routes/index.js'
import { router as devskillsRouter } from './routes/devskills.js'

// set up app
const app = express()

// view engine setup
app.set(
  'views',
  path.join(path.dirname(fileURLToPath(import.meta.url)), 'views')
)
app.set('view engine', 'ejs')

// custom middleware
// the middleware below allows us to add a time on our index page
app.use(function(req, res, next) {
  req.time = new Date().toLocaleTimeString()
  next()
})


// middleware
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')
  )
)
app.use(methodOverride('_method')) 
// above 
// html only knows about get and post request but our server needs to be able to know about put/patch or delete request. Our server needs to know we can use one of these methods. We are going to use the method override middleware to help our server understand 

// mounted routers
app.use('/', indexRouter)
app.use('/devskills', devskillsRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

export {
  app
}
