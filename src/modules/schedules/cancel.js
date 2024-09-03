import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll(".period")

// Gera evento click para cada lista (manhã, tarde, noite)
periods.forEach((period) => {
  // Captura o evento de clique na lista.
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // Obtém a li pai do elemento clicado.
      const item = event.target.closest("li")

      // Pega o id do agendamento para remover.
      const { id } = item.dataset

      // Cofirma que o id foi selecionado.
      if (id) {
        // Confirma se o usuário quer cancelar.
        const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")

        if (isConfirm) {
          // Faz a requição na API para cancelar.
          await scheduleCancel({ id })
  
          // Recarrega os agendaentos.
          schedulesDay()
        }
      }
    }
  })
})
