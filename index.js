const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://apple2341:Zcompile88@apple.xt1wl.mongodb.net/?retryWrites=true&w=majority&appName=apple',{
}).then(() => console.log('MongoDB Connected OK !!'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요 !!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

})
