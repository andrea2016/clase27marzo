/*function tiradados(){
	var dado = Math.floor(Math.random() * 6) + 1;

*/
/*function tiradados(){
	var dado = Math.floor(Math.random() * 6) + 1;
	return dado;
}
alert("Tiramos 3 dados: ");
alert("El dado dice: " +tiradados());
var multiplo= (2 * tiradados());
alert("El valor de bonus es:  " + multiplo);

console.log("Programa Terminado");*/

function numAzarLimite(limite) {
	var num=Math.floor(Math.random()*limite)+ 1;
	return num;
	}
var numAzar= numAzarLimite(100);
alert("Si esta la funcionando");
document.write("" + numAzar);

/*var num1=20;
var num1=30;
function max(num1, num2){
	if(num1 > num2)
	{
		return num1;
		document.write("" + num1);
	}
	else {
		return num2;
		document.write("" + num2);
	}
}
max();
alert("" + max());*/

/**/
/*function saludo()
{
	var mensaje="Hola a todos";
	alert(mensaje);
}
var mensaje="Chaito =)";
saludo();
alert(mensaje);
saludo;*/

var num=9;
if(isNaN(num))
{
	throw new Error("No es un numero valido");
}
else { num=num*5;}


