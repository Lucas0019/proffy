//Servidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

//Configurar nunjucks (Template Engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/view', {
    express: server,
    noCache: true,
})

//Inicio e Configuração do Servidor
server
//Receber os dados do req.body
    .use(express.urlencoded({ extended: true }))
    //Configurar arquivos estáticos (css, scripts, images)
    .use(express.static("public"))
    //rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)

//Start do Servidor
.listen(5500)