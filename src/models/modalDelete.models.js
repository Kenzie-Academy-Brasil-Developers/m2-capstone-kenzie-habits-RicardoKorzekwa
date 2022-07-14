export default class RenderModalDelete{

    static modal = document.querySelector('.modal');

    static criarModalDelete(){

        const divModalDelete                = document.createElement('div');
        const divModalContainer             = document.createElement('div');
        const divModalInner                 = document.createElement('div');
        const divModalCabecalho             = document.createElement('div')
        const h2CabecalhoTitulo             = document.createElement('h2');
        const buttonSair                    = document.createElement('button');
        const divModalDeleteContent         = document.createElement('div');
        const h2ModalDeleteTitulo           = document.createElement('h2');
        const pModalDeleteParagrafo         = document.createElement('p');
        const divModalDeleteButao           = document.createElement('div');
        const divModalDeleteButaoCancelar   = document.createElement('button');
        const divModalDeleteButaoExcluir    = document.createElement('button');
    
        divModalDelete.className                = 'modal__delete';
        divModalContainer.className             = 'modal__delete__container';
        divModalInner.className                 = 'modal__inner';
        divModalCabecalho.className             = 'modal__delete__cabecalho';
        h2CabecalhoTitulo.className             = 'modal__delete__titulo';
        buttonSair.className                    = 'modal__delete__sair';
        divModalDeleteContent.className         = 'modal__delete__conteudo';
        h2ModalDeleteTitulo.className           = 'modal__delete__conteudo__titulo';
        pModalDeleteParagrafo.className         = 'modal__delete__conteudo__paragrafo';
        divModalDeleteButao.className           = 'modal__delete__butao__acao';
        divModalDeleteButaoCancelar.className   = 'modal__delete__butao__cancelar';
        divModalDeleteButaoExcluir.className    = 'modal__delete__butao__excluir';
    
        h2CabecalhoTitulo.innerText             = 'Excluir hábito';
        buttonSair.innerText                    = 'X';
        h2ModalDeleteTitulo.innerText           = 'Certeza que deseja excluir este hábito?';
        pModalDeleteParagrafo.innerText         = 'Após executar essa ação não será possível desfazer';
        divModalDeleteButaoCancelar.innerText   = 'Cancelar';
        divModalDeleteButaoExcluir.innerText    = 'Sim, excluir este hábito';
    
        divModalDeleteButao.append(divModalDeleteButaoCancelar, divModalDeleteButaoExcluir);
        divModalDeleteContent.append(h2ModalDeleteTitulo, pModalDeleteParagrafo);
        divModalCabecalho.append(h2CabecalhoTitulo, buttonSair);
        divModalInner.append(divModalCabecalho, divModalDeleteContent, divModalDeleteButao);
        divModalContainer.append(divModalInner);
        divModalDelete.append(divModalContainer);
    
        this.modal.append(divModalDelete);
        this.modal.display = 'flex'
        this.fecharModal()
    }

    static fecharModal(){
        const btnSair = document.querySelector('.modal__delete__sair');
        btnSair.addEventListener('click', elem => {
            this.modal.innerHTML = '';
            this.modal.style.display = 'none';
        })

    }

    static excluirTarefa(){}

}



                
            






