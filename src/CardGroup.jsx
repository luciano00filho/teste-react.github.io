import CardAtleta from "./CardAtleta.jsx"
import arrAtletas from './assets/dados-atletas.json'

function CardGroup(){
    return (
        <div className="card-group">
            {
                arrAtletas.map(atleta => <CardAtleta dados={atleta} />)
            }
        </div>
    )
}

export default CardGroup