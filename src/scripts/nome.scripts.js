import RequisicaoLogin from "../controller/LoginRequisicao.controller.js"

const logout = document.querySelector('.botao_logout')

logout.addEventListener("click", elem => {
    RequisicaoLogin.logout()
    window.location.href = "../../index.html";
    
})









