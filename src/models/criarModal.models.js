import Habit from "./Habit.models.js";


class criarModal {

    static criarNovoHabito() {

        let botaoCriar = document.querySelector('.botao_criar');
        let botaoFechar = document.getElementById('fechar_criarModal')
        let botaoInserir = document.getElementById('botaoInserir')
        botaoCriar.addEventListener('click', (e) => {
            e.preventDefault()
            let modal = document.getElementById('criar_modal');

            modal.style.display = 'flex';

            

            botaoInserir.addEventListener('click', (e) => {
                e.preventDefault();
                let titulo = document.getElementById('titulo_criarModal');
                let descricao = document.getElementById('descricao_criarModal');
                let categoria = document.getElementById('selecionar_cate');
                
                
                let novoHabito = {
                    habit_title: titulo.value,
                    habit_description: descricao.value,
                    habit_category: categoria.value
                }
                console.log(novoHabito.habit_category)
                novoHabito.habit_category == "💜 Saúde" ? novoHabito.habit_category = 'saude' : novoHabito.habit_category == "✏️ Estudo" ? novoHabito.habit_category = 'estudos' : novoHabito.habit_category == "🏠 Casa" ? novoHabito.habit_category = 'casa' : novoHabito.habit_category == "💼 Trabalho" ? novoHabito.habit_category = 'trabalho' : novoHabito.habit_category == "⛵ Lazer" ? novoHabito.habit_category = 'lazer' :
                console.log(novoHabito)
                Habit.criarHabito(novoHabito);
                modal.innerHTML = ""
                modal.style.display = 'none';
                
            })
        })

        botaoFechar.addEventListener('click', (e) => {
            e.preventDefault()

            let modal = document.getElementById('criar_modal');

            modal.style.display = 'none';
        })
    }

}
export default criarModal



