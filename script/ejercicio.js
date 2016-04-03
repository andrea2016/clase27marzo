console.log("Inicio del programa =)"); 
var limSup=parseInt(prompt("Ingrese limite superior  "));
var limInf=parseInt(prompt("Ingrese limite inferior "));
var adivino=false;
function mayor(){
	var diferencia=parseInt(limSup)- parseInt(limInf);
	var aleatorio = Math.floor(Math.random() * diferencia) + 1;
	if (diferencia === aleatorio) {
	adivino = true;
	alert("felicidades, adivinaste, ingresaste " + numeroIngresado + ", que fue el aleatorio entre 1 y 5");
	}
else if(aleatorio > numeroIngresado){
		var nuevoIntento = parseInt(prompt("El numero a adivinar es mayor, vuelve a intentar" ));
		if(nuevoIntento == aleatorio){	
			adivino=true;
		}	
		numeroIngresado = nuevoIntento;
	}
}