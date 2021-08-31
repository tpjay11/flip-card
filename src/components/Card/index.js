import './style.css';

function Card ({id, name, handleClick, flipped}) {
    return (
        <div className={`card ${name} ${flipped ? 'card--flipped' : ''}` } data-tech="css3" onClick = {handleClick} id={id}>
            <div className="card__face card__face--front"></div>
            <div className="card__face card__face--back"></div>
        </div>
    )
}

export default Card;