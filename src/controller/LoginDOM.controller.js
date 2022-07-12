import RequisicaoLogin from "./LoginRequisicao.controller.js"



class CriandoDOMLogin{
    static div = document.getElementById("boxLogin")
    static loginForm(){
    //parte com background azul
        const sectionTitulo = document.createElement("section")
        const h1      = document.createElement("h1")
        const p       = document.createElement("p")
        const p2      = document.createElement("p")

        sectionTitulo.classList.add("sectionTitulo")
        h1.classList.add("loginTitulo")
        p.classList.add("loginDescricao")
        
        h1.insertAdjacentHTML("afterbegin", "KenzieHabit")
        p.insertAdjacentHTML("afterbegin", "Faça aqui seu login")
        p2.insertAdjacentHTML("afterbegin", "Faça aqui seu login")

        sectionTitulo.append(h1,p)
    
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
        location.href = "https://open.spotify.com/playlist/0WteF68M95vAMpsvwnwzhO"
       }else{
        window.alert("email ou senha inválidos")
       }})
       })
    }
}
CriandoDOMLogin.loginForm()