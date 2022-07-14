export default class Habit{
    static urlBase  = "https://habits-kenzie.herokuapp.com/api/habits"
    static token   = localStorage.getItem('@kenzieHabit-token')
    
    static async criarHabito(habito){
        return await fetch(this.urlBase, {
            method  : "POST",
            headers : {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.token}`
            },
            body: JSON.stringify(habito)
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))
    }

    static async listarTodosHabitos(){
        return await fetch(this.urlBase, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.token}`
            }
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))
    }

    static async listarHabitosXcategoria(categoria){
        return await fetch(`${this.urlBase}/category/${categoria}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))
    }

    static async atualizarHabito(id, habitoAtualizado){
        console.log(id)
        return await fetch(`${this.urlBase}/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type"  : "application/json",
                Authorization   : `Bearer ${this.token}`
            },
            body: JSON.stringify(habitoAtualizado)
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))
        .then(res => window.location.reload())
    }

    static async completarHabito(id){
        return await fetch(`${this.urlBase}/complete/${id}`,{
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err)).then(()=> window.location.reload())
    }

    static async deleteHabito(id){
        return await fetch(`${this.urlBase}/${id}`,{
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err)).then(()=> window.location.reload())
    }

    static async editarPerfil(perfilAtualizado){
        return await fetch("https://habits-kenzie.herokuapp.com/api/user/profile",{
            method: "POST",
            headers:{
                "Content-Type"  : "application/json",
                Authorization: `Bearer ${this.token}`
            },
            body:JSON.stringify(perfilAtualizado)
        })
        .then(perfilAtualizado => JSON.parse(perfilAtualizado))
        .then(window.localStorage.setItem("@kenzieHabit-username", perfilAtualizado.usr_name),
              window.localStorage.setItem("@kenzieHabit-image",perfilAtualizado.usr_image)  )
        .catch(err => console.log(err))
    }

}
