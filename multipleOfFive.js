function solution(number){
  if (Number(number) < 3 ){
    return 0
  }
 let arr =  Array(number-1).fill().map((e,i)=>i+1)
 let ahSomar = arr.filter((elem)=> elem % 3 === 0 ||elem % 5 === 0  )
 let resposta = 0;
   for (let i=0;i<ahSomar.length;i++){
     resposta = resposta + Number(ahSomar[i])
   }
 return resposta
}
