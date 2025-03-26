const d = new Date();
const mes = d.getMonth() + 1;
const hora = d.getHours();

switch (mes) {
    case 1:
        console.log('Janeiro');
        break;
    case 2:
        console.log('Fevereiro');
        break;
    case 3:
        console.log('Março');
        break;
    case 4:
        console.log('Abril');   
        break;
    case 5:
        console.log('Maio');
        break;
    case 6:
        console.log('Junho');
        break;         
    case 7:
        console.log('Julho');
        break;  
    case 8:         
        console.log('Agosto');
        break;
    case 9:     
        console.log('Setembro');
        break;
    case 10:
        console.log('Outubro');
        break;  
    case 11:
        console.log('Novembro');
        break;  
    case 12:
        console.log('Dezembro');
        break;  
    default:
        console.log('Mês inválido');
        break;
};

switch (true) {
    case hora < 12:
        console.log('Bom dia!');
        break;
        case hora < 18:
        console.log('Boa tarde!');
        break;
        debfault:
        console.log('Boa noite!');
        break;

}

console.log(mes); // 0 a 11 
console.log(hora); // 0 a 23