const comandos = ["console.log('Consola')", "a = 13 + 14", "const lista = ['c', 1, 2, 3]", "console.log(lista)", "lista.shift()", "const proceso = new Object()", "proceso.nombre = 'Proceso 24'", "prompt('Ingresa un mensaje')"]

function elegirComandos() {
    const lista = []
    const cantidad = Math.floor(Math.random() * comandos.length) + 1

    for (let i = 0; i < cantidad; i++) lista.push(comandos[Math.floor(Math.random() * comandos.length)])

    return lista
}

function inicializarSimulacion(numeroProcesos) {
    const procesos = []

    for (let i = 0; i < numeroProcesos; i++) {
        procesos.push({
            numero: i + 1,
            lista: elegirComandos()
        })
    }

    return procesos
}

function simular(procesos) {
    const procesosTerminados = []
    
    while (procesosTerminados.length < procesos.length) {
        procesos.forEach(p => {
            if (p.lista.length == 0) {
                console.log(`Proceso ${p.numero} terminado.`)
                if (!procesosTerminados.includes(p.numero)) procesosTerminados.push(p.numero)
            } else {
                console.log(`Proceso ${p.numero} - ${p.lista.shift()}`)
            }
        })
    }
}

const numeroProcesos = process.argv[2] || 0
const procesos = inicializarSimulacion(numeroProcesos)
simular(procesos)