import './Dev.css'

function Dev(props) {

    return (

        <div className='dev'>
        
            <img src={props.imagem}/>

            <h1>{props.nome}</h1>

            <span className="localizacao"> {props.localizacao} </span>
        
        </div>

    )

}

export default Dev