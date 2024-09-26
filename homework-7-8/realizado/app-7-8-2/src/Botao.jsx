import { useState } from 'react';

export default function Botao() {

    const [citacao,setCitacao] = useState('');

    const clickButton = () => {

            setCitacao('O Flamengo é mais que um clube. É uma religião, uma nação, uma maneira de ver a vida.');

    }

    return (

        <div>

            <button onClick={clickButton}>Clique Aqui</button>

            <p> {citacao} </p>

        </div>

    )

}