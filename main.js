$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();

        const novaTarefa = $('#nova-tarefa').val();
        const addTarefa = $('<li style="Display: none"></li>');

        $(`<p>${novaTarefa}</p>`).appendTo(addTarefa);
        $(addTarefa).appendTo('ul'); //Pega o addTarefa e adiciona no HTML <ul>
        $(addTarefa).fadeIn(2000); //Adiciona este comando para a imagem aparecer em modo fadeIn, o valor (2000) é um segundo em milisegundos
        $('#nova-tarefa').val(''); //Apagar campo depois de inserido a tarefa 

        $('#lista p').on('click', function(){
            $(this).addClass('feito'); //pegar a tarefa clicada e adicionar a class para colocar uma linha
        });

    });

    $('form').on('reset', function(e) {
        e.preventDefault();
        location.reload(true); //Realiza reload na pagina e limpa todas as tarefas
    })
});

