/* casting parseInt
parseInt es una palabra reservada que convierte 
una cadena de caracteres en numeros*/
//Sin la parseInt las cadenas se concatenan los datos ingresados
console.log("Inicio del programa =)");
var peliculasVistas = prompt("Cuantas peliculas haz visto este mes?");
var seriesVistas = prompt("Cuantas series has visto este mes?");
var tiempoPantalla = parseInt(peliculasVistas) + parseInt(seriesVistas);
document.write('Wow! Has visto ' + tiempoPantalla + " veces minimo la pantalla.");

/*OBJETO MATH*/
/* PERMITE GENERAR NUMEROS ALEATORIOS ENTRE 1 Y 6
PARA SIMULAR UN DADO*/
var dado = Math.floor(Math.random() * 6) + 1;
document.write("<p>El dado dice: " +dado + "</p>");
console.log("Programa Terminado");

/* PERMITE GENERAR NUMEROS ALEATORIOS 
ENTRE 0 Y UN # INGRESADO POR EL USUARIO Y LOS PRESENTA POR PANTALLA*/
var numero=prompt("Ingrese un numero  ");
numero1= Math.floor(Math.random() * parseInt(numero));
document.write(" El numero aleatorio entre el 1 y " +numero +"  es  "+ numero1);
