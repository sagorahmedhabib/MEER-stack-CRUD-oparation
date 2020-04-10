const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const router = require('./routes')

const app = express()

app.set('view engine', 'ejs')

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Show Data 
app.use('/contacts', router)
app.get('/', (req, res) => {
        res.send('<h1>Hi, This Home Page</h1>')
})

//server running 
const PORT = process.env.PORT || 8080
mongoose
  .connect(`mongodb+srv://dbdata:dbpass@cluster0-eukje.mongodb.net/test?retryWrites=true&w=majority`, {
      useNewUrlParser: true
    })
    .then(()=>{
        app.listen(PORT, () => {
            console.log(`Server is Running on PORT ${PORT}`)
        })
    })
    .catch((e)=>{
        console.log(e)
    })


