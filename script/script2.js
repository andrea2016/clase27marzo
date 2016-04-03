

console.log("Inicio del programa");
// OPERACIONES IF ELSE Y DATOS BOOLEAN
var numeroIngresado = parseInt(prompt("ingrese un numero entre 1 y 5: "));
var adivino=false;
var aleatorio = Math.floor(Math.random() * 5) + 1;
if (numeroIngresado === aleatorio) {
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
	else{
		var nuevoIntento = parseInt(prompt("El numero a adivinar es menor, vuelve a intentar" ));
		if(nuevoIntento == aleatorio)
			{	
				adivino=true;
			}
		numeroIngresado = nuevoIntento;
		}
		if(adivino){
				alert("felicidades, adivinaste, ingresaste " + numeroIngresado + ", que fue el aleatorio entre 1 y 5");
			}
		else{
				alert("Ingresaste " + numeroIngresado + ", pero el numero a adivinar era " + aleatorio);
	}
