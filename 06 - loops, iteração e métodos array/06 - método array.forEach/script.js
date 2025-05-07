const coresObjetos = {
    cor1: 'azul',
    cor2: 'verde',
    cor3: 'vermelho',
    cor4: 'amarelo',
};

for(const cor in coresObjetos) {
    console.log(cor, coresObjetos[cor]);
}

const coresArray = ['azul', 'verde', 'vermelho', 'amarelo'];

for(const cor in coresArray) {
    console.log(cor);
}

for(const cor in coresArray) {
    console.log(coresArray[cor]);
}



