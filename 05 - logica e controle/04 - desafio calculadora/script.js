function calculadora(num1, num2, operacao) {
  switch (operacao) {
    case '+':
      resultado =  num1 + num2;
      break
    case '-':
      resultado =  num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      resultado =  num1 / num2;
      break;
    default:
      resultado = 'Operação inválida';
  }

  console.log(resultado);
  return resultado;
}

calculadora(1, 2, '+');
calculadora(1, 2, '-'); 
calculadora(1, 2, '*'); 
calculadora(1, 2, '/'); 
calculadora(1, 2, 'a');