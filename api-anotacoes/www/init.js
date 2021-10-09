function salvar() {
    //sem jquery
    //const titulo = document.getElementById('titulo').value 

    //com jquery
    const id = $('#id').val()
    const titulo = $('#titulo').val()
    const descricao = $('#descricao').val() 

    //if (!titulo) return alert('Título é obrigatório')
    //if (!descricao) return alert('Descrição é obrigatória')

    const type = !id ? 'post' : 'put'

    $.ajax({
        type: type,
        url: "/notes", 
        //dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ id:  id, title: titulo, description: descricao }),
        success: function (result) {
            alert(result.message)
            $('#id').val('')
            $('#titulo').val('')
            $('#descricao').val('')
            listar()
         },
         error: function (err) {
            //console.log(err) //vê a resposta que vem do backend
            alert(err.responseJSON.message) //define a mensagem com o erro  que vem do backend
         }
      });
}



function excluir(id) {
    $.ajax({
        type: "DELETE",
        url: "/notes", 
        //dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({ id: id }),
        success: function (result) {
            alert(result.message)
            listar()
         },
         error: function (err) {
            alert(err.responseJSON.message)
         }
      });
}



function editar(id) {

    console.log("id",id)

    $.ajax({
        type: "GET",
        url: "/notes/"+id, 
        //dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (result) {
            console.log(result)
            $('#id').val(result.id)
            $('#titulo').val(result.title)
            $('#descricao').val(result.description)
         },
         error: function (err) {
            alert(err.responseJSON.message)
         }
      });
}



function listar() {
    $('.list').html('') //limpa a listagem  html

    $.ajax({
        type: "GET",
        url: "/notes", 
        //dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (result) {
            console.log(result)
            for (const note of result) { //cria o item no html lista de anotações
                $('.list').append(`
                <div class="item">
                <h2>${note.title}</h2>
                <p>${note.description}</p>
                <button onclick="editar('${note.id}')">Editar</button>
                <button onclick="excluir('${note.id}')">Excluir</button>
            </div>
                `)     
            }
         },
         error: function (err) {
             console.log(err) //vê a resposta que vem do backend
            alert(err.responseJSON.message) //define a mensagem com o erro  que vem do backend
         }
      });
}

//patch

listar()