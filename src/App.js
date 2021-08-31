import { useEffect, useState, useRef} from 'react';
import './App.css';
import initializeDeck from './deck';
import Board from './components/Board';

function App() {
  const [level, setLevel] = useState(1);
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([])
  const [resolvedCards, setResolvedCards] = useState([])
  const [disabled, setDisabled] = useState(false)
  const [newGame, setNewGame] = useState(false)
  const [playGame, setPlayGame] = useState(true)
  const [score, setScore] = useState(0)
  const [timer, setTimer] = useState(60);

  const timerRef = useRef()

  function findCard(cardId) {
    return cards.find(card => card.id === cardId)
  }

  function hasMatch (clickCardId) {
    const clickCard = findCard(clickCardId);
    let matchCardId = flippedCards.find(id => {
          let card = findCard(id);
          return id !== clickCardId && card.name === clickCard.name
    });
    if (matchCardId === undefined) {
      return []
    } else {
      return [clickCardId,matchCardId]
    }
  } 
  function findFlippedNoMatchCards () {
    return flippedCards.filter((id) =>  !resolvedCards.includes(id))
  }
  function updateScore () {
    const increaseScore = Math.pow(level, 2) + timer
    setScore(score => score + increaseScore)
  }
  function endGame () {
    alert(score)
    setDisabled(true)
  }

  useEffect(() => {

    if (newGame && playGame) {
        timerRef.current = setInterval(() => {
        setTimer(timer => {

          if (timer === 0) {
            setPlayGame(false)
            return timer
          } else {
            return timer - 1
          }
        })
      },1000)

    }
    if (playGame === false) {
      clearInterval(timerRef.current);

      endGame()
    }
  }, [newGame, playGame])
  const handleClick = (evt) => {
    let clickCardId = +evt.currentTarget.id

    
    // debugger
    if (!resolvedCards.includes(clickCardId) && !disabled) {
      
      if (!flippedCards.includes(clickCardId)) {
          let has_match = hasMatch(clickCardId);
          if (has_match.length === 0) {
            const flippedNoMatchCards = findFlippedNoMatchCards();
            if (flippedNoMatchCards.length === 0) {
              setFlippedCards([...flippedCards, clickCardId])

            } else {
              setDisabled(true)
              setFlippedCards([...flippedCards, clickCardId]);
              setTimeout(() => {
                const newFlippedCards = flippedCards.filter(cardId => cardId !== flippedNoMatchCards[0])
                setFlippedCards(newFlippedCards)
                setDisabled(false)
              }, 1500);
            }
          } else {
            setFlippedCards([...flippedCards, clickCardId]);
            setResolvedCards([...resolvedCards, ...has_match])
            updateScore();
          }
      } else {
         const copyFlippedCards = flippedCards.filter(cardId => cardId !== clickCardId)
        setFlippedCards(copyFlippedCards)
      }

    }




  }

  const handleNewGameClick = (evt) => {
    setNewGame(true)

  }
  const handlePlayGameClick = (evt) => {
      setPlayGame(!playGame)
  }
  function reset() {
    setLevel(1);
    setCards([])
    setFlippedCards([])
    setResolvedCards([])
    setPlayGame(true)
    setScore(0)
    setTimer(60)
  }
  function startGame() {
    reset()
    setCards(initializeDeck(level))
    setDisabled(false)
  }
  useEffect(() => {
    if (playGame=== true) {
        startGame()
    } 
  }, [playGame])
  return (
    <div className="App">
      <h1 className="game-title">The classic MeMmmm Game</h1>
      <div className="game-stats">
        <div className="game-stats__level">
          <div className="game-stats__level--label">Current Level:</div>
          <div className="game-stats__level--value">{level}</div>
        </div>
        <div className="game-stats__score">
          <div className="game-stats__score--label">Score:</div>
          <div className="game-stats__score--value">{score}</div>
        </div>
        {newGame ? (
          <button className="game-stats__button" type="button" onClick = {handlePlayGameClick}>
            {playGame ? 'End Game': 'Start Game'}
          </button>
        ) : (
          <button className="game-stats__button" type="button" onClick ={handleNewGameClick}>
            New Game
          </button>
        )}
      </div>
      <div className="game-timer">
        <div className="game-timer__bar" style={{width: `${timer*100/60}%`}}>{timer}s</div>
      </div>
      {newGame ? (
        <Board
          cards={cards}
          handleClick={handleClick}
          flippedCards={flippedCards}
        />
      ) : (
        <div className="game-board">
          <div className="game-instruction">
            <h3 className="game-instruction__header">Instruction</h3>
            <p className="game-instruction__content">
              - Click on the card to view the back face of the card. <br />
              - Get two exact same card to score.
              <br />- Score are based on the time and level. <br />- You only
              have 60s for each level. <br />- There are three levels, '2x2',
              '4x4' and '6x6'. <br />- Press 'Start Game' button when you are
              ready.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
