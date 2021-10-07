const calcularPromedio = require("./helpers/promedios");

//calificaciones 
const calificaciones = [5, 6, 4, 5, 5, 5, 4];
const promedio = calcularPromedio( calificaciones );

if ( promedio > 5 ) {
    console.log(`Aprobado tu calificacion es: ${promedio}`);
} else {
    console.log(`Reprobaste tu calificacion es: ${promedio}`);
}
