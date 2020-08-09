//Servidor
const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses } = require('./pages.js')

//Configurar nunjucks (Template Engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/view', {
    express: server,
    noCache: true,
})


//Inicio e Configuração do Servidor
server
//Configurar arquivos estáticos (css, scripts, images)
    .use(express.static("public"))
    //rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)

//Start do Servidor
.listen(5500)