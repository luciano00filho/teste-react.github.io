import fotoDummy from 'https://dummyimage.com/300'

function CardFeriado(props){
    return (
        <div className="card">
            <img src={fotoDummy} class="card-img-top" alt="Imagem padrão com fundo cinza" />
            <div className="card-body">
                <h5 className="card-title">{props.dados.date} - {props.dados.name}</h5>
                <p className="card-text">{props.dados.type}</p>
            </div>
        </div>
    )
}

export default CardFeriado