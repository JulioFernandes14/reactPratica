import './Card.css'

function Card(props) {

    return (

        <div className="card">
            <img src={props.imagem} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.nome}</h5>
                <p className="card-text">{props.descricao}</p>
            </div>
        </div>

    )

}

export default Card