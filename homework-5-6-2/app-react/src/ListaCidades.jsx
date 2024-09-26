import Cidade from './Cidade.jsx'

let listaCidades = [
    "São Paulo",
    "Rio de Janeiro",
    "Belo Horizonte",
    "Brasília",
    "Salvador",
    "Fortaleza",
    "Curitiba",
    "Recife",
    "Porto Alegre",
    "Manaus",
    "Belém",
    "Goiânia",
    "Campinas",
    "São Luís",
    "Florianópolis"
  ];
  

function ListaCidades() {

    return(

        <ul>
            {
                listaCidades.map(cidade => <Cidade nome={cidade} key={listaCidades.indexOf[cidade]}/>)
            }
        </ul>

    )

}

export default ListaCidades