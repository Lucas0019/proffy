const express = require('express')
const server = express()

server.use(express.static("public"))
    .get("/", (req, res) => {
        return res.sendFile(__dirname + "/view/index.html")
    })
    .get("/study", (req, res) => {
        return res.sendFile(__dirname + "/view/study.html")
    })
    .get("/give-classes", (req, res) => {
        return res.sendFile(__dirname + "/view/give-classes.html")
    })

.listen(5500)

// console.log(__dirname);

// /home/lucas/Documentos/Projetos Web/nlw/src