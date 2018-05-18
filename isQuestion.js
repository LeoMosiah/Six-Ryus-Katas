function isQuestion(dadosOriginais){
	let questions = [];
	let affirmations = [];
	for (int i = 0;i<dadosOriginais.length;i++){
		if(dadosOriginais[i].toString().indexOf('?') > -1){
			questions.push(dadosOriginais[i].toString()) 
		} else {
			affirmations.push(dadosOriginais[i].toString())
		}
	}
	return [questions,affirmations]
}
