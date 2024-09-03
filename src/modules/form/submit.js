import dayjs from "dayjs"

import { scheduleNew } from "../../services/schedule-new.js"
import { schedulesDay } from "../schedules/load"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

// Data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrege a data atual
selectedDate.value = inputToday

// Define data mínima como sendo a atual
selectedDate.min = inputToday

form.onsubmit = async (event) => {
  // Previne o compotamento padrão de carregar a página
  event.preventDefault()
  try {
    // Recuperando o nome do cliente
    const name = clientName.value.trim()
    if(!name){
      return alert("Informe o nome do cliente!")
      }
      
      // Recupera o ahorário selecionado
      const hourSelected = document.querySelector(".hour-selected")
      
      
      // REcupera ohorario selecionado
      if (!hourSelected) {
        return alert("Selecione a hora.")
        }
        
        // Recupera somente a hora
        const [hour] = hourSelected.innerText.split(":")
        // Insere a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour")
        
        // Gera um ID
        const id = new Date().getTime()
        
        // Faz o agendamento
        await scheduleNew({
          id,
          name,
          when,
          })
          
          console.log(id, name, when)
          
    // Recerraga os agendamentos
    await schedulesDay()

    // Limpa o input de nome do cliente
    clientName.value = ""
    
  } catch (error) {
    alert("Não foi possível realizar o agendamento.")
    console.log(error)
  }
}