import Dev from './Dev.jsx'
import Descricao from './Descricao.jsx'
import LinkRedeSocial from './LinkRedeSocial.jsx'
import './App.css'

const desenvolvedor = {

  nome: "Júlio Fernandes",
  imagem: "https://i.imgur.com/Ja6rWRB.png",
  localizacao: "Rio de Janeiro, Brazil",
  descricao:'" Desenvolvedor Full Stack "',
  links:[{vlink:'https://www.github.com/JulioFernandes14',vtexto:'GitHub'},

    {vlink:'https://www.linkedin.com/in/julio-c%C3%A9sar-fernandes-090897236/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',vtexto:'Linkedin'},
    
    {vlink:'https://www.instagram.com/juliocesarmf.14/',vtexto:'Instagram'},

    {vlink:'https://wa.me/5521964801037',vtexto:'Whatsapp'},
    
    {vlink:'mailto:juliocesarmf.1412@gmail.com',vtexto:'Email'}]

}

function App() {
  
  return(

    <main>

      <div className="card-dev">
        <Dev imagem={desenvolvedor.imagem} nome={desenvolvedor.nome} localizacao={desenvolvedor.localizacao}/>

        <Descricao descricao={desenvolvedor.descricao}/>

        {desenvolvedor.links.map(obj => {
          return (
            <LinkRedeSocial vlink={obj.vlink} vtexto={obj.vtexto}/>
          )
        })}
      </div>

    </main> 

  )

}

export default App
