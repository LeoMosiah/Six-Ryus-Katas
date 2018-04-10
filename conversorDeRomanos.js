const dicionario = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 }
const isValidRoman = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{}0,3})(IX|IV|V?I{0,3})$/;
function converterRomanos(string){ 
  if(isValidRoman.test(string)===true)
    return "Não é válido" ;
  const decimal = string.split('').map((elem)=>dicionario[elem]);
  for(let i=0;i<decimal.length;i++){
    if(i!==(decimal.length)-1 && (decimal[i] < decimal[i+1])){
     decimal[i] = decimal[i]*(-1)
     }
  }
  return decimal.reduce((a,b)=> a+b,0)
}
