
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
  var Nome = pessoas[3].nome 
  var Idade = pessoas[3].idade

  
   if (valorAtual.nome === Nome ){
    console.log(valorAtual.nome)
   }
   if (valorAtual.nome !== Nome ){
    console.log(undefined)
   }
  
  // { nome: 'yuri', idade: 2 }     valorAtual
  // []                             valorAnterior
  // { nome: 'tiago', idade: 20 }   valorAtual
  // []                             valorAnterior
  // undefined
  // { nome: 'filipe', idade: 13 }  valorAtual
  // []                             valorAnterior
  // undefined
  // { nome: 'vanessa', idade: 20 } valorAtual
  // []                             valorAnterior
  // undefined
  // { nome: 'Ester', idade: 2 }   valorAtual
  // []                            valorAnterior
  // undefined

  return
  
},)

console.log(findReduce)
