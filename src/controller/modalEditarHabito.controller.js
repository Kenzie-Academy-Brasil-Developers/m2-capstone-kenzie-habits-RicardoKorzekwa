import Habit from "../models/Habit.models.js"

export default class RenderModal{
    
    static  modal = document.querySelector(".modal")
    
    static habito(id_habito){
        

        const fundo             = document.createElement('div')
        const container         = document.createElement('div')
        const inner             = document.createElement('div')
        const cabecalho         = document.createElement('div')
        const titulo            = document.createElement('h2')
        const btnSair           = document.createElement('button')
        const form              = document.createElement('form')
        const conteudo          = document.createElement('div')
        const labelTitulo       = document.createElement('label')
        const inputTitulo       = document.createElement('input')
        const labelDescricao    = document.createElement('label')
        const inputDescricao    = document.createElement('input')
        const labelCategoria    = document.createElement('label')
        const selectCategoria   = document.createElement('select')
        const optionCasa        = document.createElement('option')
        const optionEstudo      = document.createElement('option')
        const optionLazer       = document.createElement('option')
        const optionTrabalho    = document.createElement('option')
        const optionSaude       = document.createElement('option')
        const status            = document.createElement('div')
        const labelStatus       = document.createElement('label')
        const inputCheckBox     = document.createElement('input')
        const containerBtn      = document.createElement('div')
        const cancelarBtn       = document.createElement('button')
        const salvarBtn         = document.createElement('button')

        fundo.className             = "modal__editarHabito"
        container.className         = "modal__editarHabito__container"
        inner.className             = "modal__inner"
        cabecalho.className         = "modal__editarHabito__cabecalho"
        titulo.className            = "modal__editarHabito__titulo"
        form.id                     = `${id_habito}`
        btnSair.className           = "modal__editarHabito__sair"
        conteudo.className          = "modal__editarHabito__conteudo"
        labelTitulo.className       = "modal__editarHabito__conteudo__labelTitulo"
        inputTitulo.className       = "modal__editarHabito__conteudo__inputTitulo"
        labelDescricao.className    = "modal__editarHabito__conteudo__labelDescricao"
        inputDescricao.className    = "modal__editarHabito__conteudo__inputTDescricao"
        labelCategoria.className    = "modal__editarHabito__conteudo__labelCategoria"
        selectCategoria.className   = "modal__editarHabito__conteudo__select"
        status.className            = "modal__editarHabito__conteudo__status"
        labelStatus.className       = "modal__editarHabito__conteudo__labelStatus"
        containerBtn.className      = "modal__editarHabito__butao__acao"
        cancelarBtn.className       = "modal__editarHabito__butao__cancelar"
        salvarBtn.className         = "modal__editarHabito__butao__salvarAlteracoes"
        form.className              = "form__editarHabito"

        inputCheckBox.type          = "checkbox"
        inputCheckBox.innerText     = "Status"

        titulo.innerText            = "Editar hábito"
        btnSair.innerText           = "X"

        labelTitulo.innerText       = "Título"
        inputTitulo.type            = "text"
        inputTitulo.required        = "true"
        inputTitulo.placeholder     = "Digite um título"

        labelDescricao.innerText    = "Descrição"
        labelDescricao.required     = "true"
        inputDescricao.type         = "text"
        inputDescricao.placeholder  = "Digite uma descrição"
        
        labelCategoria.innerText     = "Categoria"
        optionCasa.innerText         = "Casa"
        optionEstudo.innerText       = "Estudo"
        optionLazer.innerText        = "Lazer"
        optionTrabalho.innerText     = "Trabalho"
        optionSaude.innerText        = "Saúde"

        salvarBtn.innerText          = "Salvar"
        salvarBtn.type               = "submit"

        cancelarBtn.innerText        = "Cancelar"

        containerBtn.append(cancelarBtn, salvarBtn)
        status.append(labelStatus, inputCheckBox)
        selectCategoria.append(optionCasa, optionEstudo, optionLazer, optionSaude, optionTrabalho)
        conteudo.append(labelTitulo, inputTitulo, labelDescricao, inputDescricao, labelCategoria, selectCategoria)
        cabecalho.append(titulo,btnSair)
        inner.append(cabecalho, conteudo, containerBtn)
        form.append(inner)
        container.append(form)
        fundo.append(container)
        this.modal.append(fundo)
        this.modal.style.display = "flex"
        this.fechaModal()
        this.salvarDados()
        
    }

    static fechaModal(){

        const btnSair = document.querySelector(".modal__editarHabito__sair")
        const btnCancelar = document.querySelector(".modal__editarHabito__butao__cancelar")

        btnSair.addEventListener("click", elem => {
            this.modal.innerHTML = ''
            this.modal.style.display = 'none'
        })

        btnCancelar.addEventListener("click", elem => {
            this.modal.innerHTML = ''
            this.modal.style.display = 'none'
        })

        
    }

    static salvarDados(){
        const form           = document.querySelector(".form__editarHabito")
        const titulo         = document.querySelector(".modal__editarHabito__conteudo__inputTitulo")
        const descricao      = document.querySelector(".modal__editarHabito__conteudo__inputTDescricao")
        const categoria      = document.querySelector(".modal__editarHabito__conteudo__select")
        const btnSalvar      = document.querySelector(".modal__editarHabito__butao__salvarAlteracoes")
        
        btnSalvar.addEventListener("click", event => {
            
            event.preventDefault()
            const dadosFormatados = {
                habit_title: titulo.value,
                habit_description: descricao.value,
                habit_category: categoria.value
            }
            if(dadosFormatados.habit_title !== "" && dadosFormatados.habit_description){
                Habit.atualizarHabito(form.id, dadosFormatados)
            }else{
                this.modal.innerHTML = ''
                this.modal.style.display = 'none'
            }
            
        })
    }
}
