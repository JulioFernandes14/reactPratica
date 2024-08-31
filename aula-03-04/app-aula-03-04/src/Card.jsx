export default function Card(imagem,nome,descricao) {

    return (

        <div className="card">
            <img src={imagem} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title"> {nome} </h5>
                <p className="card-text"> {descricao} </p>
            </div>
        </div>

    )

}