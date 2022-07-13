import CriarTabela from "../controller/homepageDOM.js";
import Habit from "../models/Habit.models.js";

const arrHabits = await Habit.listarTodosHabitos()
console.log(arrHabits)

CriarTabela.tabela("section_main")

