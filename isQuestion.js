function isQuestion(dadosOriginais){
	const questions = [];
	for (let i = 0;i<dadosOriginais.length;i++){
		if(dadosOriginais[i].toString().indexOf('?') > -1){
			questions.push(dadosOriginais[i].trim()) 
		}
	}
	return questions
}
