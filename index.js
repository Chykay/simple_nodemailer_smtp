const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))// for parsing application/x-www-form-urlencoded

//include controllers
const mail_controller = require('./controllers/mailController');

app.get('/', (req, res) => {
  res.send('Hello World! Lets get started')
})

app.post('/send', mail_controller.sendMail);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})