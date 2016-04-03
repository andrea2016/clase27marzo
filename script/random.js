/*function tiradados(){
	var dado = Math.floor(Math.random() * 6) + 1;

*/
function tiradados(){
	var dado = Math.floor(Math.random() * 6) + 1;
	return dado;
}
alert("Tiramos 3 dados: ");
document.write("<p>El 1° dado dice: " +tiradados()+ "</p>");
document.write("<p>El 2° dado dice: "+tiradados() + "</p>");
document.write("<p>El 3° dado dice: "+tiradados() + "</p>");

var multiplo= (2 * tiradados());
alert("El valor de bonus es:  " + multiplo);

console.log("Programa Terminado");
/*
function numAzarLimite(limite) {
	var num=Math.floor(Math.random()*limite)+ 1;
	return num;
	}
var numAzar= numAzarLimite(100);
alert("Si esta la funcionando");
document.write("" + numAzar);
*/

/*creacion de funciones*/
/*function saludo()
{
	var mensaje="Hola a todos";
	alert(mensaje);
}
var mensaje="Chaito =)";
saludo();
alert(mensaje);
saludo;

/*****************************************************
* Función isNaN evalua si una valor no es numérico.  *
*													 *
*****************************************************/
var num=9;
if(isNaN(num))
{
	throw new Error("No es un numero valido");
}
else { num=num*5;}
document.write(" <h3>La variable definida es numerica   " + num + "</h3>");