
export default function Imagem() {

    const enter = () => {

        document.body.style.background = "linear-gradient(red, black)";
    }

    const saida = () => {

        document.body.style.background = 'white';

    }

    return (

        <>
        
            <img style={{ width: '300px', height: '200px', cursor: 'pointer' }} src="https://mengomania.com/media/image_bank/2024/8/thumbs/flamengo-x-penarol.jpg.1200x0_q70_crop-top.webp" onMouseEnter={enter} onMouseLeave={saida} />
        
        </>

    )


}