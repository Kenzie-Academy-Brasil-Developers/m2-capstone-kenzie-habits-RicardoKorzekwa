import CriarTabela from "../controller/homepageDOM.js";
import Habit from "../models/Habit.models.js";
import RequisicaoLogin from "../controller/LoginRequisicao.controller.js"
import criarModal from "../models/criarModal.models.js";
import RenderModal from "../controller/modalEditarHabito.controller.js";

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


