import Habit from "../models/Habit.models.js"

export default class CriarTabela {
    static tabela(idSection) {
        let section = document.getElementById(idSection)
        let table = document.createElement("table")
        table.classList.add("table")
        table.id ="table"

       let cabecalho = this.cabecalho()

        table.appendChild(cabecalho)
         section.appendChild(table)
    }


    static cabecalho(){

        let thead = document.createElement("thead");

        let tr = document.createElement("tr")

        let thStatus = document.createElement("th")
        thStatus.innerText = "Status"

        let thTitulo = document.createElement("th")
        thTitulo.innerText="Título"

        let thDescricao = document.createElement("th")
        thDescricao.innerText = "Descrição"

        let thCategoria = document.createElement("th")
        thCategoria.innerText = "Categoria"

        let thEditar = document.createElement("th")
        thEditar.innerText= "Editar"

        tr.append(thStatus, thTitulo, thDescricao, thCategoria, thEditar)
        thead.appendChild(tr)

        return thead

    }

    static bodyTabela(arr, idTabela){
        let tabela = document.getElementById(idTabela)
        let tbody = document.createElement("tbody")
        for(let i=0; i<arr.length; i++){
            let tr = document.createElement("tr")

            let thStatus = document.createElement("th")
            let imput = document.createElement("input")
            imput.type = "checkbox"
            imput.classList.add("cursor")
            if(arr[i].habit_status != false){imput.checked = true}else{imput.checked = false}
            thStatus.appendChild(imput)

            imput.addEventListener("click", () =>{ 
                 Habit.completarHabito(arr[i].habit_id)
                 this.click()
            })
            
            let thTitulo = document.createElement("th")
            thTitulo.innerText = arr[i].habit_title
            if(arr[i].habit_status != false){thTitulo.classList.add("check")}

            let thDescricao = document.createElement("th")
            thDescricao.innerText =arr[i].habit_description

            let thCategoria = document.createElement("th")
            thCategoria.innerText= arr[i].habit_category

            let thEditar = document.createElement("th")
            thEditar.innerText = "°°°"
            thEditar.id = arr[i].habit_id
            thEditar.classList.add("cursor")

            tr.append(thStatus, thTitulo, thDescricao, thCategoria, thEditar)
            tbody.appendChild(tr)
        }
        tabela.appendChild(tbody)
    }
    
}