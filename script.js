//Carne - 400g por pessoa -> +6horas - 650g
//Cerveja - 1200ml por pessoa -> +6horas - 2000ml
//Refrigerante/Agua - 1000ml por pessoa -> +6horas 1500ml

let inputAdulto = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');
let resultado = document.getElementById('resultado');

//variaveis padrão para o desenvolvimento deste projeto
//carne

gramasPorPessoa = 400; //g
gramasPorPessoa6Horas = 650; //g
//cerveja

cervejaPorPessoa = 1200; // ml
cervejaPorPessoa6Horas = 2000; //ml
//bebidas

bebidaCriancas = 1000; //ml
bebidaCriancas6Horas = 1500; //ml

function calcular(){

    let adultos = inputAdulto.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let totalCarne = carne(duracao) * adultos + (carne(duracao) / 2 * criancas)
    let totalCerveja = cerveja(duracao) * adultos;
    let totalBebidas = bebidas(duracao) * adultos + (bebidas(duracao) / 2 * criancas)

    totalCarne = totalCarne/1000; // conversão g para kg
    totalCerveja = totalCerveja/1000; // conversao ml para litros
    totalBebidas = totalBebidas/1000 // conversao ml para litros

    resultado.innerHTML = `<p>${totalCarne}KG de Carne</p>`
    resultado.innerHTML += `<p>${totalCerveja}L de Cerveja</p>`
    resultado.innerHTML += `<p>${totalBebidas}L de Bebidas</p>`

}

function limpar(){
    inputAdulto.value = "";
    inputCriancas.value = "";
    inputDuracao.value = "";
    resultado.innerHTML = "";  
}

function carne(duracao){
    if(duracao >= 6){
        return gramasPorPessoa6Horas;
    } else {
        return gramasPorPessoa
    }
}

    function cerveja(duracao){
        if(duracao >= 6){
           return cervejaPorPessoa6Horas;
        } else {
           return cervejaPorPessoa;
        }
}

function bebidas(duracao){
    if(duracao >= 6){
        return bebidaCriancas6Horas;
    } else {
        return bebidaCriancas;
    }
}
