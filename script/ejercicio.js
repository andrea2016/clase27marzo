console.log("Inicio del programa =)"); 

function mayor(limSup , limInf){
	if((isNaN(limInf)||(isNaN(limSup))){
		throw new Error("valor no es numerico");
	}
	var diferencia=parseInt(limSup)- parseInt(limInf);
	var aleatorio = Math.floor(Math.random() * diferencia) + limInf;
	return aleatorio;
}
var limSup=parseInt(prompt("Ingrese limite superior  "));
var limInf=parseInt(prompt("Ingrese limite inferior "));
alert("Su numero ")
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