function spinWords(str){
let arr = str.split(' ') 
let resposta = []
  for (let i = 0;i < arr.length;i++){
      if (arr[i].length >= 5){
        resposta[i] = arr[i].split('').reverse().join('')
      } else {
        resposta[i] = arr[i]
      }
  }
  return resposta.toString().replace(/,/g, ' ')
}
