function isPangram(string){
let array = string.replace(/[0-9]/g, '').toLowerCase().replace(/ /g ,'').split('')
let  unicaOrdenado = array.sort().filter(function(este, i) {return array.indexOf(este) == i;})
  if (unicaOrdenado[0] === '.' || unicaOrdenado[0] === ',' ||unicaOrdenado[0] === '?' || unicaOrdenado[0] === '!' ){
      unicaOrdenado.shift()
  }
  if (unicaOrdenado.length === 26){
    return true
  }  else {
    return  false
  }
}
