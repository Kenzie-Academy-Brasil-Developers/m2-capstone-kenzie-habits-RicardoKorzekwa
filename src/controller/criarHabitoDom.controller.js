export default class Modal {

    static modal = document.getElementById('criar_modal')

    static criarModalHabito() {

        const criarModal = document.createElement('div')
        criarModal.classList.add('.modal_habito')

        const modalHeader = document.createElement('div')
        modalHeader.classList.add('modal_header')

        const tituloCriarHabito = document.createElement('h3')
        tituloCriarHabito.innerText = "Criar Hábito"

        const botaoFechar = document.createElement('button')
        botaoFechar.setAttribute('id', 'fechar_criarModal')
        botaoFechar.innerText = "X"

        const criarForm = document.createElement('form')
        criarForm.classList.add('form_modal')

        const tituloHabito = document.createElement('p')
        tituloHabito.innerText = "Título"

        const inputTituloHabito = document.createElement('input')
        inputTituloHabito.setAttribute('id', 'titulo_criarModal')
        inputTituloHabito.classList.add('input_modal')
        inputTituloHabito.placeholder = "Digite um título"

        const tituloDescricao = document.createElement('p')
        tituloDescricao.innerText = "Descrição"

        const inputTituloDescricao = document.createElement('input')
        inputTituloDescricao.setAttribute('id', 'descricao_criarModal')
        inputTituloDescricao.classList.add('input_modal')
        inputTituloDescricao.placeholder = "Digitar uma descrição"

        const tituloCategoria = document.createElement('p')
        tituloCategoria.innerText = "Categoria"

        const criarSelect = document.createElement('select')
        criarSelect.setAttribute('id', 'selecionar_cate')
        criarSelect.classList.add('selecionar_habito')
        criarSelect.placeholder = "Selecione uma categoria"

        const selecionarCategoria1 = document.createElement('option')
        selecionarCategoria1.innerText = "💜 Saúde"
        

        const selecionarCategoria2 = document.createElement('option')
        selecionarCategoria2.innerText = "✏️ Estudos"
        

        const selecionarCategoria3 = document.createElement('option')
        selecionarCategoria3.innerText = "🏠 Casa"
        

        const selecionarCategoria4 = document.createElement('option')
        selecionarCategoria4.innerText = "💼 Trabalho"
        

        const selecionarCategoria5 = document.createElement('option')
        selecionarCategoria5.innerText = "⛵ Lazer"
        

        const create__submitButton = document.createElement('button')
        create__submitButton.setAttribute('id', 'create__submitButton')
        create__submitButton.type = "submit"
        create__submitButton.innerText = "Inserir"

        criarModal.appendChild(modalHeader)

        modalHeader.append(botaoFechar, tituloCriarHabito)

        criarForm.append(tituloHabito, inputTituloHabito, 
                         tituloDescricao, inputTituloDescricao, 
                         tituloCategoria, criarSelect)
        criarSelect.append(selecionarCategoria1, selecionarCategoria2, selecionarCategoria3, 
                           selecionarCategoria4, selecionarCategoria5)
        this.modal.appendChild(criarModal)

    } 
}