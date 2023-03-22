let num =[5, 8, 2 , 9 , 3]
num.push(1)
num.sort()
//let ord = num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
//console.log(`Ordenando crescentemente, nosso vetor fica ${ord}`)
//console.log(`Utilizamos o num.push() para adicionar o valor 1 ao vetor e ficou ${num}`)
let pos = num.indexOf(8)
if(pos == -1){
    console.log(`O valor não foi encontrado!`)
}else{
    console.log(`O valor está na posição ${pos}`)
}

