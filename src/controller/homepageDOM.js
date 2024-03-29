import Habit from "../models/Habit.models.js"
import RenderModal from "./modalEditarHabito.controller.js"

export default class CriarTabela {
    static tabela(idSection) {
        let section = document.getElementById(idSection)
        let table = document.createElement("table")
        table.classList.add("table")
        table.id ="table"
        let tbody = document.createElement("tbody")
        tbody.id="tbody"
       let cabecalho = this.cabecalho()

        table.append(cabecalho,tbody)
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
        thDescricao.className = 'excluir'
        thDescricao.innerText = "Descrição"

        let thCategoria = document.createElement("th")
        thCategoria.className = 'excluir'
        thCategoria.innerText = "Categoria"

        let thEditar = document.createElement("th")
        thEditar.innerText= "Editar"

        tr.append(thStatus, thTitulo, thDescricao, thCategoria, thEditar)
        thead.appendChild(tr)

        return thead

    }

    static bodyTabela(arr, idTabela){
        let tabela = document.getElementById(idTabela)
        let tbody = document.getElementById("tbody")
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
            thDescricao.className = 'excluir'
            thDescricao.innerText = arr[i].habit_description

            let thCategoria = document.createElement("th")
            let span = document.createElement("span")
            thCategoria.className = 'excluir'
            span.innerText= arr[i].habit_category
            span.classList.add("categoria")
            thCategoria.appendChild(span)
            

            let thEditar = document.createElement("th")
            thEditar.innerText = "°°°"
            thEditar.id = arr[i].habit_id
            thEditar.classList.add("cursor")


            thEditar.addEventListener("click", () => RenderModal.habito(arr[i].habit_id))


            tr.append(thStatus, thTitulo, thDescricao, thCategoria, thEditar)
            tbody.appendChild(tr)
        }
        tabela.appendChild(tbody)
    }
    
}