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
        .then(res => res.json())
        .then(res => {
            window.localStorage.setItem("@kenzieHabit-username", res.response.usr_name)
            window.localStorage.setItem("@kenzieHabit-email", res.response.usr_email)
            window.localStorage.setItem("@kenzieHabit-image", res.response.usr_image)
            window.localStorage.setItem("@kenzieHabit-token", res.token)
        })
        .catch(err => CriandoDOMLogin.modalErro())
        return response
    }
    static logout(){
        window.localStorage.removeItem("@kenzieHabit-username")
        window.localStorage.removeItem("@kenzieHabit-email")
        window.localStorage.removeItem("@kenzieHabit-image")
        window.localStorage.removeItem("@kenzieHabit-token")
    }

}
export default RequisicaoLogin