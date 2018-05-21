function isAffirmation(dadosOriginais){
	const affirmations = [];
	for (let i = 0;i<dadosOriginais.length;i++){
		if(dadosOriginais[i].indexOf('?') === -1){
			affirmations.push(dadosOriginais[i].trim()) 
		}
	}
	return affirmations
}
