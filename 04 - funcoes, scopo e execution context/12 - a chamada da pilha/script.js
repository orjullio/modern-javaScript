function primera(){
    console.log("primeiro");
    segundo();
}

function segundo(){
    console.log('segundo');
    terceiro();
}

function terceiro(){
    console.log('terceiro');
}

primera();