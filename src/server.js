//Pag Study
const proffys = [{
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "11201410",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "40",
        weekday: [0],
        time_from: [720],
        time_to: [1228]
    },

    {
        name: "Daniele Evangelista",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "11201410",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "40",
        weekday: [1], //Dia da semana
        time_from: [720],
        time_to: [1228]
    },
    {
        name: "Lucas Xavier",
        avatar: "https://avatars2.githubusercontent.com/u/52923100?s=460&u=96872a605f8062a10d07c8cc78351f3bcb8021ee&v=4",
        whatsapp: "11201410",
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "40",
        weekday: [1], //Dia da semana
        time_from: [720],
        time_to: [1228]
    }
]

function pageLanding(req, res) {
    // console.log(__dirname);

    // /home/lucas/Documentos/Projetos Web/nlw/src
    // return res.sendFile(__dirname + "/view/index.html") SEM O NUNJUCKS
    return res.render("index.html")
}

function pageStudy(req, res) {
    // return res.sendFile(__dirname + "/view/study.html") SEM O NUNJUCKS
    return res.render("study.html", { proffys })
}

function pageGiveClasses(req, res) {
    // return res.sendFile(__dirname + "/view/give-classes.html") SEM O NUNJUCKS
    return res.render("give-classes.html")
}

const express = require('express')
const server = express()

//Configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/view', {
    express: server,
    noCache: true,
})

server
//Configurar arquivos estáticos (css, scripts, images)
    .use(express.static("public"))
    //rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)

.listen(5500)