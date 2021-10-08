//Variáveis

const string = "Jade Ohara"
const int = 29
const float = 1.62
const boolean = true

const object = {}
object.var1 = 123
object.vat2 = 456

const array = []

const varFunction = () => console.log("Ação")

console.log("Olá Mundo")

//------------------------------
// Operadores Aritméticos

const n1 = 18
const n2 = 15.60
const soma = n1 + n2
const subtracao = n1 - n2
const divisao = n1 / n2
const multiplicacao = n1 * n2
const restoDivisao = n1 % n2

console.log(`O valor total é ${soma}`)

//------------------------------
//Operadores Lógicos

const valor  = 12
let total = 0

if  (valor >= 50) {
    console.log("É maior que 50")
} else {
    console.log("É menor que 50")
}


if  (valor <= 50) {
    total = valor * 5
} else if (valor <= 100) {
    total = valor * 4
} else {
    total = valor * 3
}

console.log("Valor if é: ", total)

//------------------------------
// Laços de Repetição

const array2 = ['Jade','Kyra','Addie','Izabel']

console.log(`Eu amo ${array2[1]}`)

for (let i=0;i<array2.length;i++) {
    console.log(`FOR Posição ${i} do Array ${array2[i]}`)
}

let arrayIndex = 0

while(arrayIndex < array2.length){
    console.log(`WHILE Posição ${arrayIndex} do Array ${array2[arrayIndex]}`)
    arrayIndex++
}

for (const index in array2) {
    console.log(`FOR IN Posição ${index} do Array ${array2[index]}`)
}

for (const arr of array2) {
    console.log(`FOR OF Array ${arr}`)
}

//------------------------------
// Objetos

const objeto = {
    nome: 'Jade',
    idade: 29,
    altura: 1.62,
    filhos: ['Kyra','Addie'],
    telefone: {
        tipo: 'Celular',
        fone: 999999999
    }
}

console.log(`objeto ${objeto.telefone.fone}`)

const arrayObjeto = [
    {
        nome: 'Jade',
        telefone: 999999999
    },
    {
        nome: 'Kyra',
        telefone: 999999999
    },
]

for (const objeto of arrayObjeto){
    console.log(`ArrayObjeto Nome ${objeto.nome} e Telefone ${objeto.telefone}`)
}

//------------------------------
// Funções

function montarTexto (nome, tel) { 
    const texto = `O nome é  ${nome} e o tel é ${tel}`
    return texto
}

for (const objeto of arrayObjeto){
    const t = montarTexto(objeto.nome,objeto.telefone)
    console.log(`Função montarTexto: ${t}`)
}

//simplificando
const montarTexto2 = (nome, tel) => {    
        return `O nome é  ${nome} e o tel é ${tel}`
    }
    
for (const objeto of arrayObjeto){
    console.log(montarTexto2(objeto.nome,objeto.telefone))
}

//Site para fazer exercícios
//https://grasshopper.app/pt_br/

