/* export default class renderCriarModal {

    static criarHabito() {
        const modal = document.getElementById('criar_modal')

        const modalHabito = document.createElement('div')
        const modalHeader = document.createElement('div')
        const titulo = document.createElement('h3')
        const fecharModal = document.createElement('p')
        const formModal = document.createElement('form')
        const tituloHabito = document.createElement('p')
        const inputTituloHabito = document.createElement('input')
        const descricaoHabito = document.createElement('p')
        const inputDescricaoHabito = document.createElement('input')
        const categoriaHabito = document.createElement('p')
        const selecionarCategoriaHabito = document.createElement('select')
        const selecionarCategoria1 = document.createElement('option')
        const selecionarCategoria2 = document.createElement('option')
        const selecionarCategoria3 = document.createElement('option')
        const selecionarCategoria4 = document.createElement('option')
        const selecionarCategoria5 = document.createElement('option')
        const selecionarCategoria6 = document.createElement('option')
        const botaoModalHabito = document.createElement('input')

        modalHabito.classList.add('modal_habito')
        modalHabito.setAttribute('id', 'modal_habito')

        modalHeader.classList.add('modal_header')

        titulo.innerText = "Criar Hábito"

        fecharModal.setAttribute('id', 'fechar_criarModal')
        fecharModal.innerText = "X"

        formModal.classList.add('form_modal')

        tituloHabito.innerText = "Título"

        inputTituloHabito.classList.add('input_modal')
        inputTituloHabito.setAttribute('id', 'titulo_criarModal')
        inputTituloHabito.placeholder = "Digitar Título"

        descricaoHabito.innerText = "Descrição"

        inputDescricaoHabito.classList.add('input_modal')
        inputDescricaoHabito.setAttribute('id', 'descricao_criarModal')
        inputDescricaoHabito.placeholder = "Digitar Descrição"

        categoriaHabito.innerText = "Categoria"

        selecionarCategoriaHabito.classList.add('selecionar_habito')
        selecionarCategoriaHabito.setAttribute('id', 'selecionar_cate')

        selecionarCategoria1.innerText = "Selecionar Categoria"
        selecionarCategoria2.innerText = "💜 Saúde"
        selecionarCategoria3.innerText = "🖊️ Estudo"
        selecionarCategoria4.innerText = "🏠 Casa"
        selecionarCategoria5.innerText = "🔨 Trabalho"
        selecionarCategoria6.innerText = "🏖️ Lazer"

        botaoModalHabito.classList.add('botao_modalHabito')
        botaoModalHabito.value = "Inserir"
        botaoModalHabito.setAttribute('id', 'botaoInserir')


        modalHeader.append(titulo, fecharModal)
        formModal.append(tituloHabito, inputTituloHabito, descricaoHabito, inputDescricaoHabito, categoriaHabito,
            selecionarCategoriaHabito, selecionarCategoria1, selecionarCategoria2, selecionarCategoria3,
            selecionarCategoria4, selecionarCategoria5, selecionarCategoria6)
        modalHabito.append(modalHeader, formModal)
        modal.append(modalHabito)

    
    }
} */