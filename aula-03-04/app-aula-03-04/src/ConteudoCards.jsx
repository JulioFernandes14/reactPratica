import Card from './Card.jsx'

const arrAtletas = [

    {
        nome: 'Daniel de Faria Dias' ,
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Daniel_Dias_Rio2016b_cr.jpg/250px-Daniel_Dias_Rio2016b_cr.jpg' ,
        descricao: 'Nadador paralímpico, nascido em 1988 conquistou nove medalhas nos Jogos Paralímpicos de Pequim 2008 (4 de ouro, 4 de prata e 1 de bronze), se tornando o atleta com mais medalhas em uma única edição dos Jogos.' ,
    },

    {
        nome: 'Débora Bezerra de Menezes' ,
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/D%C3%A9bora_Menezes_em_T%C3%B3quio_2020_%28cropped%29.jpg/220px-D%C3%A9bora_Menezes_em_T%C3%B3quio_2020_%28cropped%29.jpg' ,
        descricao: 'Começou a competir no atletismo mas preferiu se concentrar no parataekwondo após a universidade. Recebeu o Prêmio Brasil Olímpico de Melhor Atleta do Ano de Parataekwondo em 2017, 2018 e 2019 pelo Comitê Paralímpico Brasileiro. Nos Jogos Paralímpicos de Verão de 2020 em Tóquio conquistou a medalha de prata na categoria mais de 58 kg feminino.' ,
    },

    {
        nome: 'Clodoaldo Francisco da Silva' ,
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Clodoaldo_Silva_2016.jpg/200px-Clodoaldo_Silva_2016.jpg' ,
        descricao: 'Conhecido como Tubarão das Piscinas, é um nadador paralímpico brasileiro filiado ao Partido Socialismo e Liberdade. É considerado o atleta paralímpico mais popular do Brasil.' ,
    },

]

export default function ConteudoCards() {

    return (

        <div className="card-group">

           { arrAtletas.map(element => Card(element.imagem,element.nome,element.descricao))}

        </div>

    )

}