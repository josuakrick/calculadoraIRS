

function rendimento(resultado) {
  
 var elementoSalario = parseFloat(document.getElementById("valor").value);  
 var salario = elementoSalario
 var resultado = document.getElementById("valorConvertido");
 var descontoIrs = salario/100;
 var resultadoSalario = descontoIrs *77;

  
  if(salario >1500) {
   resultado.innerHTML ="Seu salário final é " + resultadoSalario;
} else {
   resultado.innerHTML ="Seu salário final é " + salario;
}
}

