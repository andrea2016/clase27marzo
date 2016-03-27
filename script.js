console.log("Inicio de programa");

var segundosPorMinuto = 60;
var minutosPorHora = 60;
var horasPorDia = 24;
var segundosPorDia = segundosPorMinuto * minutosPorHora * horasPorDia;
document.write("<h1>Calculadora del Tiempo</h1><p>Hay " +segundosPorDia	+ " segundos en un dia</p>");
/*var anios= prompt("Ingrese su edad");
anVividos=anios*horasPorDia;
document.write("<h1>Calculadora del Tiempo</h1><p>Has vividos " +anVividos	+ "  dias aproximadamente</p>");
*/
/*parseInt es una palabra reservada que convierte una acdena de caracteres en numeros*/
var peliculasVistas = prompt("Cuantas peliculas haz visto este mes?");
var seriesVistas = prompt("Cuantas series has visto este mes?");
var tiempoPantalla = parseInt(peliculasVistas) + parseInt(seriesVistas);
document.write('Wow! Has visto ' + tiempoPantalla + " veces minimo la pantalla.");

