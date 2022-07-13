import CriandoDOMLogin from "./LoginDOM.controller.js"
class RequisicaoLogin{
    static url = "https://habits-kenzie.herokuapp.com/api/userLogin"
    static async login(loginData){
        const response = await fetch(this.url,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        })

        const data = await response.json()
        .catch(CriandoDOMLogin.modalErro())
        window.localStorage.setItem("username", data.response.usr_name)
        window.localStorage.setItem("email", data.response.usr_email)
        window.localStorage.setItem("image", data.response.usr_image)
        window.localStorage.setItem("token", data.token)
        console.log(data)
        return data
    }

}
export default RequisicaoLogin