export default class CriarTabela {
    static tabela(idSection) {
        let section = document.getElementById(idSection)
        let table = document.createElement("table")
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
            thStatus.appendChild(imput)

            let thTitulo = document.createElement("th")
            thTitulo.innerText = arr[i].habit_title

            let thDescricao = document.createElement("th")
            thDescricao.innerText =arr[i].habit_description

            let thCategoria = document.createElement("th")
            thCategoria.innerText= arr[i].habit_category

            let thEditar = document.createElement("th")
            thEditar.innerText = "°°°"
            thEditar.id = arr[i].habit_id
        }
    }

}