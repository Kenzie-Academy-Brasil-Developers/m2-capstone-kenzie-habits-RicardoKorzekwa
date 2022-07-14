import CriarTabela from "../controller/homepageDOM.js";
import Habit from "../models/Habit.models.js";
import RequisicaoLogin from "../controller/LoginRequisicao.controller.js"
import criarModal from "../models/criarModal.models.js";

import RenderModal from "../controller/modalEditarHabito.controller.js";

import CriandoDOMHomepage from "../controller/HomepageDOM.controller.js";

criarModal.criarNovoHabito()

const logout = document.querySelector('.botao_logout')

logout.addEventListener("click", elem => {
    RequisicaoLogin.logout()
    window.location.href = "../../index.html";
    
})

let arrHabitos = await Habit.listarTodosHabitos()
let arrHabitosFinal= []
let arrHabitosFalse =[]

 arrHabitos.forEach((elem) => {
     if(elem.habit_status != true){arrHabitosFinal.push(elem)}else{
        arrHabitosFalse.push(elem)
     }
 }
 )

arrHabitosFalse.forEach((elem) => {arrHabitosFinal.push(elem)})

CriarTabela.tabela("section_main")
CriarTabela.bodyTabela(arrHabitosFinal,"table")
criarModal.criarNovoHabito()

const btnConcluidos = document.getElementById("btnConcluidos")
btnConcluidos.addEventListener("click", ()=>{
    let tbody = document.getElementById("tbody")
    tbody.innerHTML = ""
    CriarTabela.bodyTabela(arrHabitosFalse,"table")
})

const btnTodos = document.getElementById("btnTodos")
btnTodos.addEventListener("click", ()=>{
    let tbody = document.getElementById("tbody")
    tbody.innerHTML = ""
    CriarTabela.bodyTabela(arrHabitosFinal,"table")
})



let btnEdit = document.querySelector('.botao_editar')



btnEdit.addEventListener("click", () => sairM())

const div = document.getElementById("modalEditar")

function sairM() {
    div.innerHTML=""
    let modal = CriandoDOMHomepage.modalEditarPerfil()
    div.appendChild(modal)
    div.style.display="inline"
}



let imagemHeader = document.querySelector(".img_header1")
let imagemHeader2 = document.querySelector(".img_header2")
let imagemHeader3 = document.querySelector(".imgPerfil")



const imagem = window.localStorage.getItem("@kenzieHabit-image")
const nome = window.localStorage.getItem("@kenzieHabit-username")

imagemHeader.src = imagem
imagemHeader2.src = imagem

let nome1 = document.querySelector(".nome1")
let nome2 = document.querySelector(".nome2")


imagemHeader3.href = imagem
nome1.innerText = nome
nome2.innerText = nome

