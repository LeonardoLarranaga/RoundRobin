const comandos = ["console.log('Consola')", "a = 13 + 14", "const lista - ['c', 1, 2, 3]", "console.log(lista)", "lista.shift()", "const proceso = new Object()", "proceso.nombre = 'Proceso 24'", "prompt('Ingresa un mensaje')"]

function elegirComando() {
    return comandos[Math.floor(Math.random() * comandos.length)]
}

function inicializarSimulacion(numeroProcesos) {
    const procesos = []
    let cantidadComandos = 2;

    for (let i = 0; i < numeroProcesos; i++) {
        const lista = []
        for (let j = 0; j < cantidadComandos; j++) lista.push(elegirComando())

        procesos.push({
            numero: i + 1,
            lista: lista
        })

        cantidadComandos += 1
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