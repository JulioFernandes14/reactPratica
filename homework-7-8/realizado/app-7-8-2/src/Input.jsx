import { useState } from "react"

export default function Input() {

    const [valor,setValor] = useState(0);

    const contagem = (e) => {

        setValor(e.target.value.length)

    }

    const estilo = {

        background:'black',
        padding:'20px',
        marginTop:'10px',
        color:'white',
        width:'50px',
        height:'50px',
        fontSize:'22px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'

    }

    return (
        
        <div>

            <input type="text" name="" onInput={contagem}/>

            <div className="contador" style={estilo}>{valor}</div>

        </div>

    )

}