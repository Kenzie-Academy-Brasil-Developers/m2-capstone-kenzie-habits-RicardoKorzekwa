import CriarTabela from "../controller/homepageDOM.js";
import Habit from "../models/Habit.models.js";
import RequisicaoLogin from "../controller/LoginRequisicao.controller.js"

const logout = document.querySelector('.botao_logout')

logout.addEventListener("click", elem => {
    RequisicaoLogin.logout()
    window.location.href = "../../index.html";
    
})
const arrHabits = await Habit.listarTodosHabitos()
console.log(arrHabits)

CriarTabela.tabela("section_main")

