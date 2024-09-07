import Card from './Card.jsx';

const arrAtletas = [

    {

        nome:'Daniel Dias',
        imagem:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Daniel_Dias_Rio2016b_cr.jpg/250px-Daniel_Dias_Rio2016b_cr.jpg',
        descricao:"Daniel Dias, nadador paraolímpico, é um dos exemplos de que pessoas com deficiência podem dirigir e têm esse direito. Ele nasceu com má-formação congênita dos membros superiores e da perna direita."

    },

    {

        nome:'Carol Santiago',
        imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBLqHiirESyHhsu_yMBZnySu26w3G0XP1rQ&s',
        descricao:"Carol Santiago nasceu com síndrome de Morning Glory, uma alteração na retina que reduz o campo de visão. Carol começou a nadar aos quatro anos, natação convencional."

    },

    {

        nome:'Petrúcio Ferreira',
        imagem:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Petr%C3%BAcio_Ferreira_Rio2016d.jpg/240px-Petr%C3%BAcio_Ferreira_Rio2016d.jpg',
        descricao:"Petrúcio Ferreira dos Santos (São José do Brejo do Cruz, 18 de novembro de 1996) é um velocista paralímpico brasileiro, considerado o atleta paralímpico mais rápido do mundo."

    }

];

export default function CardGroup() {

    return(

        <div className="card-group">

            {
                arrAtletas.map(atleta => {

                    return (
                        <Card key={arrAtletas.indexOf(atleta)} nome={atleta.nome} imagem={atleta.imagem} descricao={atleta.descricao} />
                    )

                })
            }

        </div>

    )

}