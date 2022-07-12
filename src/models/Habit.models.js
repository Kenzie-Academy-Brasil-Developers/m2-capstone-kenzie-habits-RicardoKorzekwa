export default class Habit{
    static urlBase  = "https://habits-kenzie.herokuapp.com/api/habits"
    static token    = JSON.parse(localStorage.getItem("@kenzie-habit:token"))
    
    static async criarHabito(habito){
        return await fetch(this.urlBase, {
            method  : "POST",
            headers : {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
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
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))
    }

    static async listarHabitosXcategoria(categoria){
        return await fetch(`${this.urlBase}/category/:habit_${categoria}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))
    }

    static async atualizarHabito(id, habitoAtualizado){
        return await fetch(`${this.urlBase}/complete/:habit_${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type"  : "application/json",
                Authorization   : `Bearer ${token}`
            },
            body: JSON.stringify(habitoAtualizado)
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))
    }

    static async completarHabito(id){
        return await fetch(`${this.urlBase}/complete/:habit_${id}`,{
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))
    }

    static async deleteHabito(id){
        return await fetch(`${this.urlBase}/complete/:habit_${id}`,{
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))
    }

}