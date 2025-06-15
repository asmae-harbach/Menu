const express =  require("express")
const app = express()
const port = 4000

require('./conn/conn')

const cors = require('cors')
app.use(cors({origin : 'http://localhost:3000'}))

app.use(express.json())

const apiUser = require('./Routes/user')
const apiProduct = require('./Routes/product')

app.use('/api/v1', apiUser)
app.use('/api/v2', apiProduct)


app.use('/uploads', express.static('uploads'))

app.listen(port, ()=>{
    console.log("http://localhost:4000/")
})