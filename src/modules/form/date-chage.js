import { schedulesDay } from "../schedules/load"

// Seleciona o input de data
const selectedDate = document. getElementById("date")

// Recarrega a lista de horários quando o inputde data mudar.
selectedDate.onchange = () => schedulesDay()