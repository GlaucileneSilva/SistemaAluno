
let nomeDeAluno = ["Glaucilene","Marcos","Juliana","Ana"]

for (let nome of nomeDeAluno) {
    console.log(`Esta pessoa se chama ${nome}`)
}

let numeroDeAlunos = 10;

let contador = 0;

while(contador <= numeroDeAlunos) {
   // console.log(contador)

    if(contador == 0){
        console.log("O número atual é zero")
    }else if(contador % 2 == 0){
        console.log("O número " + contador + " é Par")
    }else{
        console.log(`O número ${contador} é Impar`)
    }
    contador++;
}

for (let contador = 0; contador < numeroDeAlunos; contador++) {
    console.log(contador)

    if(contador == 0){
        console.log("O número atual é zero")
    }else if(contador % 2 == 0){
        console.log("O número " + contador + " é Par")
    }else{
        console.log(`O número ${contador} é Impar`)
    }
}