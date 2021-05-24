const path = require('path')
const express = require('express')
const dotenv = require('dotenv')

const connectDB = require('./config/db')
const users = require('./routes/device')
const { notFound, errorHandler }  = require('./middleware/errorMiddleware')

//Load config
dotenv.config()

if(process.env.NODE_ENV !== 'test'){
  //Connect Database
  connectDB()
}


const app = express()

//Body parser middeware
//app.use(express.urlencoded({ extended: false }));
app.use(express.json())

//Use routes
app.use('/api/device', users)


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} MODE on port ${PORT}`))

module.exports = server