import RequisicaoLogin from "../controller/LoginRequisicao.controller.js"
import criarModal from "../models/criarModal.models.js";

const logout = document.querySelector('.botao_logout')

logout.addEventListener("click", elem => {
    RequisicaoLogin.logout()
    window.location.href = "../../index.html";
    
})

criarModal.criarNovoHabito()