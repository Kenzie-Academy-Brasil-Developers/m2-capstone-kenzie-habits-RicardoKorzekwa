import RequisicaoLogin from "./LoginRequisicao.controller.js"



class CriandoDOMLogin{
    static div = document.getElementById("boxLogin")
    static loginForm(){
    //parte com background azul
        const sectionTitulo = document.createElement("section")
        const h1            = document.createElement("h1")
        const p             = document.createElement("p")
        const p2            = document.createElement("p")
        const sectionImg    = document.createElement("section")
        const imgLogin      = document.createElement("img")

        sectionImg.classList.add("sectionImg")
        imgLogin.classList.add("imgLogin")
        imgLogin.src = "./src/assets/img/login.png.png"

        sectionImg.append(imgLogin)

        sectionTitulo.classList.add("sectionTitulo")
        h1.classList.add("loginTitulo")
        p.classList.add("loginDescricao")
        
        h1.insertAdjacentHTML("afterbegin", "KenzieHabit")
        p.insertAdjacentHTML("afterbegin", "Faça aqui seu login")
        p2.insertAdjacentHTML("afterbegin", "Faça aqui seu login")

        sectionTitulo.append(h1,p, sectionImg)
    
    //form
        const sectionForm = document.createElement("section")
        const form        = document.createElement("form")
        const loginTitulo = document.createElement("h1")
        const labelEmail  = document.createElement("label")
        const inputEmail  = document.createElement("input")
        const inputSenha  = document.createElement("input")
        const labelSenha  = document.createElement("label")
        const button      = document.createElement("button")

        labelEmail.insertAdjacentHTML("afterbegin", "E-mail")
        labelSenha.insertAdjacentHTML("afterbegin", "Senha")

        inputEmail.required = true
        inputEmail.type= "email"

        inputSenha.type = "password"
        inputSenha.required = true

        sectionForm.classList.add("sectionForm")
        loginTitulo.classList.add("tituloForm")
        inputEmail.classList.add("inputEmail")
        inputSenha.classList.add("inputSenha")
        button.classList.add("buttonForm")

        inputEmail.placeholder= "Insira aqui seu email"
        inputSenha.placeholder= "Insira aqui sua senha"

        loginTitulo.insertAdjacentHTML("afterbegin", "Login")
        button.insertAdjacentHTML("afterbegin", "Entrar")

        form.append(labelEmail,inputEmail,labelSenha, inputSenha, button)
        sectionForm.append(loginTitulo, form)
        this.div.append(sectionTitulo, sectionForm)

       form.addEventListener("submit", async(event)=>{
        event.preventDefault()
        const loginData = {
            email: inputEmail.value,
            password: inputSenha.value
        }
       await RequisicaoLogin.login(loginData)
       .then(res => res.response.usr_name)
       .then(res=>{ if(res !== undefined){
        location.href = N//homepage
       }})
       })
    }
    
    static modalErro(){
        const divModal     = document.getElementById("modal")
        const divContainer = document.createElement("div")
        const divModalInner= document.createElement("div")
        const p            = document.createElement("p")
        const button       = document.createElement("button")

        divContainer.classList.add("conteiner")
        divModalInner.classList.add("modal-inner")
        p.setAttribute("id", "texto-erro")
        p.insertAdjacentHTML("afterbegin", "E-mail ou senha inválidos")
        button.setAttribute("id", "botao-modal")
        button.insertAdjacentHTML("afterbegin", "Sair")

        divModalInner.append(p, button)
        divContainer.append(divModalInner)

        divModal.append(divContainer)

        divModal.style.display = "flex"
        button.addEventListener("click", ()=>{
            divModal.style.display = "none"
            divModal.innerHTML =""
        })


    }
}
CriandoDOMLogin.loginForm()
export default CriandoDOMLogin