const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const router = require ('./api/routes')


app.use('/api', router)


app.listen(PORT, function() {
    console.log("Servidor iniciado")
})