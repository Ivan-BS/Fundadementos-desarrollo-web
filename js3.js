/* let hora_toma = prompt ("Hora inicial de toma (0-23):");
let frecuencia = prompt ("Frecuencia (1-12):");

let tomas = 24 / frecuencia;

console.log("Horario");

let horario = hora_toma;

for (let i = 1;i <= tomas; i++) {
    console.log(`Toma: ` + i + " | " + (horario) + ":00 hrs|");
    horario = horario + frecuencia;
    if (horario >= 24) {
        horario = horario - 24;
    };
}; */

let hora_toma = 5;
let frecuencia = 6;

let tomas = 24 / frecuencia;

console.log("Horarios");

let horario = hora_toma;

for (let i = 1;i <= tomas; i++) {
    console.log(`Toma: ` + i + " | " + (horario) + ":00 hrs|");
    horario = horario + frecuencia;
    if (horario >= 24) {
        horario = horario - 24;
    };
};