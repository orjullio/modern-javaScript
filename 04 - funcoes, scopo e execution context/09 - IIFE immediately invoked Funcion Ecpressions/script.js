(function(){
    const user = 'João';
    console.log(user);
    const ola = () => console.log('Olá de "OutroScript.js"!');
    ola();
})();

(function (nome){
    console.log('Olá ' + nome);
})('Preta Gil');

(function ola(){
    console.log('Olá!!!');

})();