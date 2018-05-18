function conversorMonetario (mapa,afirmacoes){
	for (let i=0;i<afirmacoes.length;i++){
		let quantidadeEmCreditos = afirmacoes[i].slice(afirmacoes[i].indexOf('is')+1,(afirmacoes.length)-1).join(' ');
		let quantidadeEmMoeda = afirmacoes[i].slice(0,afirmacoes[i].indexOf('is')-1).join(' ');
		let chave = afirmacoes[i]slice(afirmacoes[i].indexOf('is')-1,afirmacoes[i].indexOf('is')).join('')
		let valor = ()
		mapa.set(chave,)
	}
}
