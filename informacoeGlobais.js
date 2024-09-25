const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';

console.log(url);
/*função assincrona, espera até que toda a 
requisição seja executada, ou seja,
todos os dados sejam enviadoss*/
async function visualizarInformacoesGlobais(params) {
    //contante que armazena uma repossta  await=espera ////fetch=faz a requisição
    const res = await fetch(url);
    const dados = await res.json();//espera as reposta erem convertidas em JSON
console.log(dados);//visualizar as informações no console
const paragrafo=document.createElement('p');//criar um elemento de parágrafo

paragrafo.classList.add('graficos-container__texto');//adiciona uma classe do CSS ao parágrafo

paragrafo.innerHTML = `Você sabia que o mundo tem <span>${dados.total_pessoas_mundo}</span> de pessoas e que aproximadamente <span>${dados.total_pessoas_conectadas}</span>
estão conectadas em alguma rede social e passam em média <span>${dados.tempo_medio}</span> horas conectadas.`//Insere o texto "Você sabia que o mundo tem"+total_pessoas_mundo
 
const container=document.getElementById('graficos-container');//cria a variável "container", seleciona o ID(graficos-container) na section do HTML
container.appendChild(paragrafo);//Insere o parágrafo dentro do "container"
}
visualizarInformacoesGlobais();//chama a função