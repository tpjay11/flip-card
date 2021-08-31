import Card from "../Card";
import './style.css'

function Board ({cards, handleClick, flippedCards}) {
    return(
        <div className="game-board" style={{'gridTemplateColumns': '1fr 1fr'}}>
            {
                cards.map((card) => {
                    return (
                        <Card key={card.id} id={card.id} name = {card.name} handleClick={handleClick}  flipped={flippedCards.includes(card.id)}/>
                    )
                })
            }
        </div>
    ) 
}

export default Board;