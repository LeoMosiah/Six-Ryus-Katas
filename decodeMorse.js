decodeMorse = function(morseCode){
let dicionario = { '.-':'A','-...':'B','-.-.':'C','-..':'D','.':'E','..-.':'F','--.':'G','....':'H',
'..':'I','.---':'J','-.-':'K','.-..':'L','--':'M','-.':'N','---':'O','.--.':'P','--.-':'Q','.-.':'R',
'...':'S','-':'T','..-':'U','...-':'V','.--':'W','-..-':'X','-.--':'Y','--..':'Z','.----':'1','..---':'2',
'...--':'3','....-':'4','.....':'5','-....':'6','--...':'7','---..':'8','----.':'9','-----':'0','':'e',
'...---...':'SOS','-.-.--':'!','.-.-.-':'.'};

  let resposta = morseCode.split(' ').map(function(v){return dicionario[v]}).join('').replace(/ee/g,' ').replace(/e/g,'')
  return resposta.trim()
}
