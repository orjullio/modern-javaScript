function primeiro(){
    const x = 100;

    function segundo(){
        const y = 200;
        console.log(x + y);
    }
    //console.log(y); não imprimi o valor. const de outro escopo
    segundo()
}
primeiro();//sai o valor calculado no escopo pai


if(true){
    const x = 100;
    if( x === 100){
        const y = 200;
        console.log(x + y);
    }

    //console.log(y);

}