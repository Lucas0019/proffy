//Funcionalidade | Adicionar um novo horário

//Procurar o botão 
document.querySelector("#add-time")
    //Quando clicar no botão
    .addEventListener('click', cloneField)

//Executar uma função
function cloneField() {
    //Duplicar os campos. Que campo?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean

    //pegando os campos: 
    const fields = newFieldContainer.querySelectorAll('input')


    //para cada campo, limpar
    fields.forEach(function(field) {
        //pega o field do momento e limpa
        field.value = ""

    })


    // Colocar na pagina : onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)


}