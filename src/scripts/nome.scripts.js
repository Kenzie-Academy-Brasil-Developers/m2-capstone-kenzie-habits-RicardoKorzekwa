import RequisicaoLogin from "../controller/LoginRequisicao.controller.js"
import RenderModal from "../controller/modalEditarHabito.controller.js";

const logout = document.querySelector('.botao_logout')

logout.addEventListener("click", elem => {
    RequisicaoLogin.logout()
    window.location.href = "../../index.html";
    
})

