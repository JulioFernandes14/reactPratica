import './LinkRedeSocial.css'

function LinkRedeSocial({vlink,vtexto}){
    return (
        <>
            <a href={vlink} target="_blank">{vtexto}</a>
        </>
    )
}
export default LinkRedeSocial