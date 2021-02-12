const express = require('express')
const cors = require('cors') 

const router = require('./src/routes/routes.js')

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

app.listen(4000,()=>{
    console.log("Aplicação rodando na porta 4000")
})

