function criarDicionario (map,afirmacoes){
	for (let i = 0;i<afirmacoes.length();i++){
		let palavra = afirmacoes[i].split(' ')
		map.set(palavra[0],palavra[2])
	}
	return map;
 }
 
