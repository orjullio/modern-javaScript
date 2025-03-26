const d = new Date(); 
const hour = d.getHours();

if(hour < 12){
    console.log('Bom dia!');
}else if(hour < 18){
    console.log('Boa tarde!');
}else{
    console.log('Boa noite!');
}

// if aninhado

if(hour < 12){
    console.log('Bom dia!');

    if(hour === 6){
        console.log('O café está pronto!');
    };
}else if(hour < 18){
    console.log('Boa tarde!');    
} else{
    console.log('Boa noite!');

    if( hour >= 20){
        console.log('ZzzZZzzzZZZzzzz...');
    }
};

if(hour >= 7 && hour <= 15){
    console.log('Estamos abertos!');        
}
else{
    console.log('Estamos fechados!');
}

if(hour === 6 || hour === 12 ){
    console.log('Escove seus dentes!');      
}   