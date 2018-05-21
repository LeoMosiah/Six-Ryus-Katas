function isAffirmation(dadosOriginais){
	let affirmations = [];
	for (int i = 0;i<dadosOriginais.length;i++){
		if(dadosOriginais[i].indexOf('?') === -1){
			affirmations.push(dadosOriginais[i].trim()) 
		}
	}
	return affirmations
}
