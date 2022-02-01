
const nums = [10, 20,30,40]



// const Doble = nums.map( (valor) => {
//     return valor*2
// });
//  console.log(Doble)


// const comReduce = nums.reduce(
//     ( acumulador, valorAtual ) => acumulador.concat(valorAtual*2),
//     []
//   );
//   console.log(comReduce)

  

   //const nums2 = [10,20,30,40]

//   const Find = nums.find( (element) => element > 10 );

//   console.log(Find)
// //retorno 20

const pessoas = [
  {nome:'yuri', idade: 2},
  {nome:'tiago',idade: 20},
  {nome:'filipe', idade: 13},
  {nome:'vanessa', idade: 20},
  {nome:'Ester', idade: 2}
]

const findReduce = pessoas.reduce((valorAnterior, valorAtual) => {
  var Busca = 'tiago'
 
  if(valorAtual.nome === Busca ) {
     valorAnterior = valorAtual
  }
  if(valorAtual !== Busca) {
    valorAtual = undefined

  }
  console.log(valorAtual)
  
  return valorAnterior
  
},undefined)

console.log(findReduce) 






