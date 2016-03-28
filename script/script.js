console.log("Inicio de programa");

var segundosPorMinuto = 60;
var minutosPorHora = 60;
var horasPorDia = 24;
var segundosPorDia = segundosPorMinuto * minutosPorHora * horasPorDia;
document.write("<h1>Holis =)</h1>");
document.write("<h1>Calculadora del Tiempo</h1><p>Hay " +segundosPorDia	+ " segundos en un dia</p>");

// Saber cuantos horas has vivido
var horaAnio= parseInt(horasPorDia)*365;
var anios= prompt("Ingrese su edad");
anVividos=anios*horaAnio;
document.write("<h1>Calculadora del Tiempo</h1><p>Has vividos " +anVividos	+ "  horas aproximadamente</p>");


