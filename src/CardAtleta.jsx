function CardAtleta(props){
    return (
        <div className="card">
            <img src={props.dados.foto} class="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.dados.nome}</h5>
                <p className="card-text">{props.dados.descricao}</p>
            </div>
        </div>
    )
}

/*
function CardAtleta({dados}){
    return (
        <div className="card">
            <img src={dados.foto} class="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{dados.nome}</h5>
                <p className="card-text">{dados.descricao}</p>
            </div>
        </div>
    )
}
*/
export default CardAtleta