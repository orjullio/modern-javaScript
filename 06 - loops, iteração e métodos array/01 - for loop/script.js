for(let i = 0; i <= 10; i++) {
    console.log(i);
}

for(let i = 0; i <= 10; i++) {
    if(i===7) {
        console.log('7 encontrado');
    }else{
        console.log('Número ' +i)
    }
    console.log(i);
}


//Loop aninhado

for(let i = 0; i <= 10; i++) {
    for(let j = 0; j <= 10; j++) {
        console.log('i: ' + i + ' j: ' + j);
    }
}
//ou
console.log('exemplo do livro: tabuada.');
for(let i = 0; i <= 10; i++) {
    console.log('Multiplicado por ' + i );

    for(let j = 0; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

//Loop aninhado com array

const nomes = ['Lucas', 'João', 'Maria', 'Ana', 'Pedro'];

for(let i = 0; i < nomes.length; i++) {
    if(nomes[i] === 'Ana') {
        console.log('Ana encontrada');
    }else {
        console.log('Nome: ' + nomes[i]);
    }
}

