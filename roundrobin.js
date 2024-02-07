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
    const listaHTML = document.getElementById("listaProcesos")

    while (procesosTerminados.length < procesos.length) {
        procesos.forEach(p => {
            const elementoLista = document.createElement("li")

            if (p.lista.length == 0) {
                elementoLista.textContent = `Proceso ${p.numero} terminado.`
                if (!procesosTerminados.includes(p.numero)) procesosTerminados.push(p.numero)
            } else {
                elementoLista.textContent = `Proceso ${p.numero} - ${p.lista.shift()}`
            }

            listaHTML.appendChild(elementoLista)
        })
    }
}

const numeroProcesos = prompt("Ingresa el número de procesos.") || 0
const procesos = inicializarSimulacion(numeroProcesos)
simular(procesos)