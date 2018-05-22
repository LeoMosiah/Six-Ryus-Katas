// importar conversorMonetario
function responderPergunta(pergunta) {
  const resposta = [];
  const howManyQuestion = /how many/gi;
  const howMuchQuestion = /how much/gi;
  for (let i = 0; i < pergunta.length; i++) {
    let auxiliar = pergunta[i].split(" ");
    if (pergunta[i]) {
      resposta.push("I have no idea what you are talking about");
    } else if (howMuchQuestion.test(pergunta[i])) {
      resposta.push(`${auxiliar
        .slice(auxiliar.indexOf("is") + 1, auxiliar.length - 1)
        .join(" ")}
      ${deRomanoParaDecimal(
        deAlienParaRomano(
          auxiliar.slice(auxiliar.indexOf("is") + 1, auxiliar.length - 1)
        )
      )}`);
    } else {
      resposta.push(`${auxiliar
        .slice(auxiliar.indexOf("is") + 1, auxiliar.length - 1)
        .join(" ")}
    ${toCredits(
      auxiliar.length - 1,
      deRomanoParaDecimal(
        deAlienParaRomano(
          auxiliar.slice(auxiliar.indexOf("is") + 1, auxiliar.length - 1)
        )
      )
    )}
    `);
    }
  }
  return resposta.join("\n");
