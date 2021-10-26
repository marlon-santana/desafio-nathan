
const nums = [10, 20,30,40]
/***********************************************/

const Doble = nums.map( (valor) => {
    return valor*2
});
 console.log(Doble)
 //retorno 20,40,60,80
 
/***********************************************/

//Reduce trabalhando como  map
const comReduce = nums.reduce(
    ( acumulador, valorAtual ) => acumulador.concat(valorAtual*2),
    []
  );
  console.log(comReduce)
//retorno 20,40,60,80

  /***********************************************/

  const nums2 = [10,20,30,40]

  const Find = nums.find( (element) => element > 10 );
  console.log(Find)

//retorno 20

/***********************************************/

//Reduce trabalhando como find 
const findReduce = nums2.reduce((valorAnterior, valorAtual) =>  valorAnterior > 10 ? valorAnterior : valorAtual , 0)
console.log(findReduce)

// retorno 20