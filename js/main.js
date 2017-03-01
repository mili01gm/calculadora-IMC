function calcImc(){
var peso=document.getElementById("peso").value;
var altura=document.getElementById("altura").value/100;
imc=peso/(altura*altura);

var imc=document.getElementById("imc").value=imc.toFixed(2);
if(imc<=20.5){
recomendacion="Estas delgado. Debes engordar " + (altura*altura*20.5-peso).toFixed(1) + " kilos";
}
else if(imc>=25.5){
recomendacion="Tienes sobrepeso. Debes adelgazar "+(peso-altura*altura*25.5).toFixed(1) +" kilos";
}
else{
recomendacion="Estas en tu peso ideal";
}
document.getElementById("recomendacion").value=recomendacion;
}
