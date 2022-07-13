import Habit from "../models/Habit.models.js"

export default class CriarTabela {
    static tabela(idSection) {
        let section = document.getElementById(idSection)
        let table = document.createElement("table")
        table.classList.add("table")
        table.id ="table"
        table.innerHTML = `<thead>
        <tr>
            <th>Status</th>
            <th>Título</th>
            <th>Descrição</th>
            <th>Categoria</th>
            <th>Editar</th>

        </tr>
    </thead>`
         section.appendChild(table)
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

            thEditar.addEventListener("click", () => Habit.deleteHabito(arr[i].habit_id))

            tr.append(thStatus, thTitulo, thDescricao, thCategoria, thEditar)
            tbody.appendChild(tr)
        }
        tabela.appendChild(tbody)
        console.log(arr)
    }
    

}