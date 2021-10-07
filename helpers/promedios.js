const calcularPromedio = ( calificaciones = [] ) => {

    let suma = 0;

    for ( let i = 0; i < calificaciones.length; i++) {
        console.log(`Calificacion No: ${i} = ${calificaciones[i]}`);
        suma = calificaciones[i] + suma;
    }

    // calificaciones.forEach( (calificacion, i) => {
    //     console.log(`Calificacion No: ${i} = ${calificacion}`);
    //     suma = suma + calificacion;
    // })

    // calificaciones.map ( calificacion => {
    //     suma = suma + calificacion;
    // })

    return parseFloat( (suma / calificaciones.length).toFixed(2) );

}


module.exports = calcularPromedio;









