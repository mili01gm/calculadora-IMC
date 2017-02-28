function calcImc(){
//hacemos la llamada a los datos introducidos
var peso=document.getElementById("peso").value;
var altura=document.getElementById("altura").value/100;
//calculamos el imc
imc=peso/(altura*altura);
//enviamos el resultado a la caja correspondiente y lo reducimos a 2 decimales
var imc=document.getElementById("imc").value=imc.toFixed(2);
//mediante if comparamos el resultado para determinar si es correcto el peso
if(imc<=20.5){//determinamos el defecto en peso y definimos el comentario
leyenda="Estas delgado. Debes engordar " + (altura*altura*20.5-peso).toFixed(1) + " kilos";
}
else if(imc>=25.5){//determinamos el exceso en peso y definimos el comentario
leyenda="Tienes sobrepeso. Debes adelgazar "+(peso-altura*altura*25.5).toFixed(1) +" kilos";
}
else{
leyenda="Estas en tu peso ideal";
}
//enviamos el comentario a la caja correspondiente
document.getElementById("leyenda").value=leyenda;
}
