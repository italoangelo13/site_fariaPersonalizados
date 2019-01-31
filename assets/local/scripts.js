
$( document ).ready(function() {
   
});




function msgSucesso(msg){
    $.confirm({
        theme: 'bootstrap',
        title: 'Alerta!',
        content: msg,
        type: 'green',
        typeAnimated: true,
    });
}

function msgAlerta(msg){
    $.confirm({
        theme: 'bootstrap',
        title: 'Alerta!',
        content: msg,
        type: 'orange',
        typeAnimated: true,
    });
}

function msgErro(msg){
    $.confirm({
        theme: 'bootstrap',
        title: 'Alerta!',
        content: msg,
        type: 'red',
        typeAnimated: true,
    });
}

function msg(msg){
    $.confirm({
        theme: 'bootstrap',
        title: 'Alerta!',
        content: msg,
        typeAnimated: true,
    });
}