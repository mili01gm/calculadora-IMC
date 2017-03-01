var peso = document.getElementById("peso");
var altura = document.getElementById("altura");
var result = document.getElementById('result');
var msj = document.getElementById('msj');

function calcImc(){
  var formula = peso.value/(altura.value*altura.value);
  var respuesta =formula.toFixed(2);

  //console.log(respuesta);
  result.value = respuesta;

}
