//começando
// JS - Linguagem de dupla passagem - código avalidado 2 vezes.

// a = 2
// b = 'abc'
// b = 'j'
// c = a - '3'

// console.log(c)

// var idade = 18
// console.log("Oi, " + nome)

// if(idade >= 18) {
//     // içamento hoist - vai pra fora do escopo do if (Escopo global)
//     var nome = "João"
//     console.log(`Parabéns, ${nome}. Você pode dirigir.`)
// }

// console.log('Até mais, ' + nome)


// var linguagem = "JavaScript"
// console.log("Aprendendo, " + linguagem)

// linguagem = "Java"
// console.log("Aprendendo, " + linguagem)

// princípio menor privilégio
// const nome = 'José'
// const idade = 27
// nome = "Maria"
// const a

// let a = 2
// let b = 'abc'
// let endereco = `Rua K, 12`

//
// var c = 2 + 3


// const n1 = 2
// const n2 = '3'

// const n3 = n1 + Number(n2)

// const n4 = n1 + +n2

// const n5 = n1 - n2

// console.log(n5)

// == e ===
// console.log(1 == 1);
// console.log(1 == '1')
// console.log(1 === '1')
// console.log(true == 1)
// console.log(true === 1)
// console.log(1 == [1])
// console.log(1 === [1])
// console.log(null == null)
// console.log(null === null)
// console.log(null == undefined)
// console.log(null === undefined)
// console.log([] == false)
// console.log([] == [])

// const a = []
// const b = a
// console.log(a == b)

// const v1 = []

// console.log(v1.length)

// v1[0] = 3.4
// v1[1] = 'a'
// v1[10] = 2

// console.log(v1.length)

// for(let i = 0; i < v1.length; i++) {
//     console.log(v1[i])
// }

// v1.forEach(item => console.log(item))

// const numeros = [1, 2]
// console.log(numeros.length)
// numeros[4] = 3
// console.log(numeros.length)

// const numeros = [1, 2]
// numeros[0] = 2

// console.log(numeros)
// const nomes = ['Ana Maria']

const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]

console.log(nomes.filter((nome) => nome.startsWith('A')));




