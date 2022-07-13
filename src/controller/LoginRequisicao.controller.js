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
        window.localStorage.setItem("@kenzieHabit-username", data.response.usr_name)
        window.localStorage.setItem("@kenzieHabit-email", data.response.usr_email)
        window.localStorage.setItem("@kenzieHabit-image", data.response.usr_image)
        window.localStorage.setItem("@kenzieHabit-token", data.token)
        console.log(data)
        return data
    }
    static logout(){
        window.localStorage.removeItem("@kenzieHabit-username")
        window.localStorage.removeItem("@kenzieHabit-email")
        window.localStorage.removeItem("@kenzieHabit-image")
        window.localStorage.removeItem("@kenzieHabit-token")
    }

}
export default RequisicaoLogin