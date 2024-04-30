import './App.css'
import Evento from './Evento'
import Galeria from './Galeria'
import Cabecalho from "./Cabecalho"
import Rodape from './Rodape'

export default function App() {
return (
    <>
    <Cabecalho/>
     <Evento
     titulo={"Evento senai"}
     descricao={"Descrição evento"}
     horario={"14/12/24 às 17h"}
     local={"Senai"}
     />
     <Galeria/>
     <Rodape/>
    </>
  )
}
