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
    const contenedor = document.getElementById("tablasRoundRobin")

    let numeroCiclo = 1

    while (procesosTerminados.length < procesos.length) {
        const tabla = document.createElement("table")
        tabla.id = `tablaRoundRobin${numeroCiclo}`
        contenedor.appendChild(tabla)

        let fila = tabla.insertRow()
        let celda = fila.insertCell()
        celda.outerHTML = `<th colsPan="2">Ciclo ${numeroCiclo}</th>`

        fila = tabla.insertRow()
        fila.insertCell(0).outerHTML = "<th>Proceso</th>"
        fila.insertCell(1).outerHTML = "<th>Comando</th>"

        procesos.forEach(p => {
            fila = tabla.insertRow()
            fila.insertCell(0).textContent = `Proceso ${p.numero}`

            if (p.lista.length == 0) {
                fila.insertCell(1).textContent = `Proceso ${p.numero} terminado.`
                if (!procesosTerminados.includes(p.numero)) procesosTerminados.push(p.numero)
            } else {
                fila.insertCell(1).textContent = `${p.lista.shift()}`
            }
        })

        numeroCiclo += 1
    }
}

function desplegarInfoProcesos(procesos) {
    const tabla = document.getElementById("tablaProcesos")

    procesos.forEach(p => {
        const fila = tabla.insertRow()
        fila.insertCell(0).textContent = `Proceso ${p.numero}`

        const listaComandos = document.createElement("ul")

        p.lista.forEach(c => {
            const elemento = document.createElement("li")
            elemento.textContent = c
            listaComandos.appendChild(elemento)
        })

        fila.insertCell(1).appendChild(listaComandos)
    })
}

const numeroProcesos = prompt("Ingresa el número de ciclos") || 0
const procesos = inicializarSimulacion(numeroProcesos)

desplegarInfoProcesos(procesos)
simular(procesos)