x = 'teste';
console.log(x);
console.error('Alert');
console.warn('Warning');
console.table({nome: 'Rodrigo Júlio', email: 'rodrigojulioc@gmail.com'});

//grupo

console.group('silmples');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.table({nome: 'Rodrigo Júlio', email: 'rodrigojulioc@gmail.com'});
console.groupEnd();

//estilos css

const estilos = 'padding: 10px; background-color: white; color: green';
console.log('%cOlá Ângela!', estilos);
