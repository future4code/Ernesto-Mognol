function criarTarefa() {
    const novaTarefa = document.getElementById("tarefa")
    if (novaTarefa.value !== "") {
        const diaSemana = document.getElementById("dias-semana")
        if(diaSemana.value == "domingo"){
            const diaExato = document.getElementById("domingo")
            diaExato.innerHTML += `<li>${novaTarefa.value}</li>`
            novaTarefa.value = ""
        }
        if(diaSemana.value == "segunda"){
            const diaExato = document.getElementById("segunda")
            diaExato.innerHTML += `<li>${novaTarefa.value}</li>`
            novaTarefa.value = ""
        }
        if(diaSemana.value == "terca"){
            const diaExato = document.getElementById("terca")
            diaExato.innerHTML += `<li>${novaTarefa.value}</li>`
            novaTarefa.value = ""
        }
        if(diaSemana.value == "quarta"){
            const diaExato = document.getElementById("quarta")
            diaExato.innerHTML += `<li>${novaTarefa.value}</li>`
            novaTarefa.value = ""
        }
        if(diaSemana.value == "quinta"){
            const diaExato = document.getElementById("quinta")
            diaExato.innerHTML += `<li>${novaTarefa.value}</li>`
            novaTarefa.value = ""
        }
        if(diaSemana.value == "sexta"){
            const diaExato = document.getElementById("sexta")
            diaExato.innerHTML += `<li>${novaTarefa.value}</li>`
            novaTarefa.value = ""
        }
        if(diaSemana.value == "sabado"){
            const diaExato = document.getElementById("sabado")
            diaExato.innerHTML += `<li>${novaTarefa.value}</li>`
            novaTarefa.value = ""
        }
    }
    else{
        alert("Insira uma atividade no campo 'Nova Tarefa!'")
    }
}