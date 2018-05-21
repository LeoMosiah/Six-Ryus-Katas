// importar conversorMonetario
function responderPergunta(pergunta) {
    const resposta = [];
    const howManyQuestion = /how many/ig;
    const howMuchQuestion = /how much/ig;
    for(let i= 0;i<pergunta.length;i++){
    if(!howMuchQuestion.test(pergunta[i]) && !howMuchQuestion.test(pergunta[i])){
        resposta.push("I have no idea what you are talking about")
        } else if (howManyQuestion.test(pergunta[i])){
            resposta.push(`${pergunta[i].slice(pergunta[i].indexOf('is')+1,pergunta.length - 2).join('')}
             ${(converterRomanos(converterAlien(pergunta)))}`)
        } else{
            resposta.push(`${pergunta[i].slice(pergunta[i].indexOf('is')+1,pergunta.length - 3).join('')}
             ${(converterRomanos(converterAlien(pergunta)))}`)
        }
    }
    return resposta.join('\n');
}
