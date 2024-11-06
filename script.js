
class Consultorio {
    #nombre;
    #pacientes;
    constructor(nombre, pacientes = []) {
        this.#nombre = nombre;
        this.#pacientes = pacientes;
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(newNombre) {
        this.#nombre = newNombre;
    }

    get pacientes() {
        return this.#pacientes;
    }

    set pacientes(newPaciente) {
        this.#pacientes.push(newPaciente);
    }

    buscarPacientePorNombre(nombrePaciente) {
        const pacienteCoincide = this.pacientes.find((item) => item.nombre == nombrePaciente);
        return `Nombre: ${pacienteCoincide.nombre}, Edad: ${pacienteCoincide.edad}, Rut: ${pacienteCoincide.rut}, Diagnóstico: ${pacienteCoincide.diagnostico}`;
    }

    mostrarTodosPacientes() {
        let datosTodos = "";
        this.pacientes.forEach(function (item) {
            datosTodos += `Nombre: ${item.nombre}, Edad: ${item.edad}, Rut: ${item.rut}, Diagnóstico: ${item.diagnostico}\n`;
        })
        return datosTodos;
    }
}

class Paciente {
    #nombre;
    #edad;
    #rut;
    #diagnostico;
    constructor(nombre, edad, rut, diagnostico) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#rut = rut;
        this.#diagnostico = diagnostico;
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(newNombre) {
        this.#nombre = newNombre;
    }

    get edad() {
        return this.#edad;
    }

    set edad(newEdad) {
        this.#edad = newEdad;
    }

    get rut() {
        return this.#rut;
    }

    set rut(newRut) {
        this.#rut = newRut;
    }

    get diagnostico() {
        return this.#diagnostico;
    }

    set diagnostico(newDiagostico) {
        this.#diagnostico = newDiagostico;
    }
}


const paciente1 = new Paciente("Pedro Perez", 23, "21.232.211-5", "Diagnostico1");
const paciente2 = new Paciente("Armando Casas", 55, "9.242.123-k", "Diagnostico2");
const paciente3 = new Paciente("Clara Oscura", 31, "15.113.563-4", "Diagnostico3");
const paciente4 = new Paciente("Alex Castro", 16, "15.667.521-7", "Diagnostico4");
const paciente5 = new Paciente("Hola Mundo", 66, "19.666-851-2", "Diagnostico5");


const consultorio1 = new Consultorio("Consultorio Maule");

consultorio1.pacientes = paciente1;
consultorio1.pacientes = paciente2;
consultorio1.pacientes = paciente3;
consultorio1.pacientes = paciente4;
consultorio1.pacientes = paciente5;

console.log(consultorio1.nombre);

console.log(paciente1.nombre);

console.log(paciente3.edad);

console.log(paciente4.rut);

console.log(paciente5.diagnostico);

console.log(consultorio1.pacientes);

console.log(consultorio1.buscarPacientePorNombre("Pedro Perez"));

console.log(consultorio1.mostrarTodosPacientes());