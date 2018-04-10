const dicionario = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 }
const isValidRoman = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{}0,3})(IX|IV|V?I{0,3})$/;
function converterRomanos(emRomanos){ 
  if(isValidRoman.test(string)===true)
    return "Não é válido" ;
  const emDecimal = emRomanos.split('').map((elemento)=>dicionario[elemento]);
  for(let i=0;i<emDecimal.length;i++){
    if(i!==(emDecimal.length)-1 && (emDecimal[i] < emDecimal[i+1])){
     emDecimal[i] = emDecimal[i]*(-1)
     }
  }
  return emDecimal.reduce((a,b)=> a+b,0)
}
