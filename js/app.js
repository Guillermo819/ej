$("#form").submit(function(evento){
    evento.preventDefault();
    let valor1 = $("#v1").val();
    let valor2 = $("#v2").val();

    sumar(valor1, valor2);
    restar(valor1, valor2);
    mult(valor1, valor2);
    div(valor1, valor2);
})

function sumar(a, b){
    let rSuma = parseInt(a)+parseInt(b);
    mostrarS(rSuma);
}
function restar(a, b){
    let rResta = parseInt(a)-parseInt(b);
    mostrarR(rResta);
}
function mult(a, b){
    let rMult = parseInt(a)*parseInt(b);
    mostrarM(rMult);
}
function div(a, b){
    let rDiv = parseInt(a)/parseInt(b);
    mostrarD(rDiv);
}
function mostrarS(rs){
    $("#rSuma").text(rs);
}
function mostrarR(rs){
    $("#rResta").text(rs);
}
function mostrarM(rs){
    $("#rMult").text(rs);
}
function mostrarD(rs){
    $("#rDiv").text(rs);
}
