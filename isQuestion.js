function isQuestion(dadosOriginais){
	let questions = [];
	for (int i = 0;i<dadosOriginais.length;i++){
		if(dadosOriginais[i].toString().indexOf('?') > -1){
			questions.push(dadosOriginais[i].trim()) 
		}
	}
	return questions
}
