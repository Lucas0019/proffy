const Database = require('./database/db')

const { subjects, weekdays, getSubject } = require('./utils/format');

function pageLanding(req, res) {
    // console.log(__dirname);

    // /home/lucas/Documentos/Projetos Web/nlw/src
    // return res.sendFile(__dirname + "/view/index.html") SEM O NUNJUCKS
    return res.render("index.html")
}

function pageStudy(req, res) {
    // return res.sendFile(__dirname + "/view/study.html") SEM O NUNJUCKS
    const filters = req.query

    if (!filters.subject || !filters.weekday || !filters.time) {
        return res.render("study.html", { filters, subjects, weekdays })
    }

    console.log('Não tem campos vazios');

    //Consulta 
    const query = `
        SELECT classes.*, proffys.*
        FROM proffys 
        JOIN classes ON (classes.proffy_id = proffys.id)    
        WHERE EXISTS(
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = classes.id
            AND class_schedule.weekday = ${filters.weekday}
            AND class_schedule.time_from <= ${filters.time}
            AND class_schedule.time_to > ${filters.time}
        )
    `



}

function pageGiveClasses(req, res) {
    // return res.sendFile(__dirname + "/view/give-classes.html") SEM O NUNJUCKS
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0 //transformando em um array
        //Se tiver dados (data)
    if (isNotEmpty) {
        data.subject = getSubject(data.subject)

        //Add data ao inicio da lista
        proffys.push(data)

        //AJUDAR NO DESAFIO !!!!
        return res.redirect('/study')
    }
    //Add dados a lista de Proffys
    //Se não , não adicionar
    return res.render("give-classes.html", { subjects, weekdays })
}

module.exports = { pageLanding, pageStudy, pageGiveClasses }