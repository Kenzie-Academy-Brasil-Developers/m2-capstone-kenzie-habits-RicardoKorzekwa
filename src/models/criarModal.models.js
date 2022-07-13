import Habit from "./Habit.models.js";


class criarModal {

    static criarNovoHabito() {

        let btnCreate = document.querySelector('.botao_criar');
        let closePageCreate = document.getElementById('closeCreate')

        btnCreate.addEventListener('click', (e) => {
            e.preventDefault()
            console.log('teste')
            let modal = document.getElementById('modalCreate');

            modal.style.display = 'flex';

            let insertBtn = document.getElementById('insertBtn')

            insertBtn.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('testeClique')
                let title = document.getElementById('modalTitleCreate');
                let desc = document.getElementById('modalDescriCreate');
                let select = document.getElementById('selectCatHabit');

                let bodyNewHabit = {
                    habit_title: title.value,
                    habit_description: desc.value,
                    habit_category: select.value
                }

                Habit.criarHabito(novoHabito);
            })
        })

        closePageCreate.addEventListener('click', (e) => {
            e.preventDefault()

            let modal = document.getElementById('modalCreate');

            modal.style.display = 'none';
        })
    }

}
export default criarModal



