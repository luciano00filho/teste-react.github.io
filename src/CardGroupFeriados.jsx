import CardFeriado from "./CardFeriado.jsx"
import arrFeriados from 'https://gist.githubusercontent.com/mauriciogofas/f6263565aa671c736a11e4ade5a6dd9f/raw/46fbd61127c0650efad477393ceedfdf54769860/holidays.json'

function CardGroupFeriados(){
    return (
        <div className="card-group">
            {
                arrFeriados["2025"].map(dataF => <CardFeriado dados={dataF} />)
            }
        </div>
    )
}

export default CardGroupFeriados