const express = require('express')
const app = express()
const port = 80

//app.use
app.use('/public', express.static('public'));

//app.set
app.set('view engine', 'ejs')

//app.routers
app.get('/', (req, res) => {
    res.render('pages/index')
})

//app.listen
app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})
