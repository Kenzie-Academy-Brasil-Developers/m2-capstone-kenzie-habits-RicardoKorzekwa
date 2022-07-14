
class CriandoDOMHomepage{

    static modalEditarPerfil(){
        const div = document.getElementById("modalEditar")

        const divContainer= document.createElement("div")
        divContainer.classList.add("modalContainer")

        const divInner = document.createElement("div")
        divInner.classList.add("modalInner")

        const sectionCabecalho = document.createElement("section")
        sectionCabecalho.classList.add("modalEditarCabecalho")

        const h1TituloModal = document.createElement("h1")
        h1TituloModal.setAttribute("id", "editarPerfilTitulo")
        h1TituloModal.insertAdjacentHTML("afterbegin", "Editar Perfil")

        const buttonModal = document.createElement("button")
        buttonModal.setAttribute("id", "modalEditarButton")
        buttonModal.insertAdjacentHTML("afterbegin", "X")

        

        const form = document.createElement("form")
        form.classList.add("formularioEditarPerfil")

        const labelNome = document.createElement("label")
        labelNome.insertAdjacentHTML("afterbegin", "Nome")

        const labelImg =  document.createElement("label")
        labelImg.insertAdjacentHTML("afterbegin", "URL da imagem")

        const inputNome = document.createElement("input")
        inputNome.type="text"
        inputNome.placeholder="Insira aqui o nome"
        inputNome.classList.add("inputEditarPerfil")
        inputNome.label="Nome"

        const inputImg = document.createElement("input")
        inputImg.type="text"
        inputImg.placeholder= "url..."
        inputImg.classList.add("inputEditarPerfil")

        const button =document.createElement("button")
        button.classList.add("buttonEditarPerfil")
        button.insertAdjacentHTML("afterbegin", "Salvar alterações")
        
        sectionCabecalho.append(h1TituloModal, buttonModal)
        form.append(labelNome,inputNome,labelImg, inputImg, button)
        divInner.append(sectionCabecalho, form)
        divContainer.append(divInner)
        
        div.append(divContainer)

        buttonModal.addEventListener("click",()=>{
            div.style.display= "none"
        })

    }
}
CriandoDOMHomepage.modalEditarPerfil()