import Habit from "../models/Habit.models.js"
import RequisicaoLogin from "./LoginRequisicao.controller.js"



export default class CriandoDOMHomepage{

    static modalEditarPerfil(){
        
        const sair1 = document.getElementById("modal")

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

        buttonModal.addEventListener("click", ()=> { window.location.reload()})
        

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
        

        form.addEventListener("submit", (event)=>{
            event.preventDefault()
            if(inputImg.value != "" && inputNome.value != ""){
                window.localStorage.setItem("@kenzieHabit-username",inputNome.value)

                Habit.editarPerfil({
                    usr_image: inputImg.value,

                    usr_name: inputNome.value
                })
            }else if(inputImg.value != ""){

                Habit.editarPerfil({
                    usr_image: inputImg.value,
                })
            }else if(inputNome.value != ""){
                window.localStorage.setItem("@kenzieHabit-username",inputNome.value)
                Habit.editarPerfil({
                    usr_name: inputNome.value,
                })
            }

            
           })
        
       
        buttonModal.addEventListener("click",()=>{
            sair1.innerHTML = ""
            sair1.style.display= "none"
        })
        
        return divContainer

    }

}

