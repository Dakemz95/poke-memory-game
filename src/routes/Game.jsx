import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { fetchData } from '../services/fetchData';
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import Options from '../components/Options';
import './Game.css';
import WinModal from '../components/WinModal';
import { logDOM } from '@testing-library/react';

// Game modes
const gameModes = [
  {
    id: 1,
    name: 'easy',
    count: 6
  },
  {
    id: 2,
    name: 'medium',
    count: 12
  },
  {
    id: 3,
    name: 'hard',
    count: 24
  }
]

const types = {
  normal : '#dad7cb',
  fighting: '#8b3310',
  flying: '#90bbec',
  poison: '#b118be',
  ground: '#d3b246',
  rock: '#877848',
  bug: '#95d036',
  ghost: '#33224b',
  fire: '#ed4401',
  water: '#0a79c4',
  grass: '#299b29',
  electric: '#dcc818',
  psychic: '#df20a6',
  ice: '#70e4d4',
  dragon: '#6e226e',
  steel: '#c9c9c9',
  dark: '#302a20',
  fairy: '#ffb3d2'
}

const Game = () => {
  const { mode } = useParams()
  let navigate = useNavigate()
  const [cards, setCards] = useState([])
  const [choice1, setChoice1] = useState(null)
  const [choice2, setChoice2] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  // Shuffle cards
  const shuffleCards = async (count) => {
    let data = await fetchData(count)
    let list = [...data, ...data]
      .sort(function () { return Math.random() - 0.5 })
      .map((card, i) => ({ 
        ...card, 
        index: i,
        type1: getTypes(card.type1),
        type2: getTypes(card.type2)
      }))
    setCards(list)
  }

  // get pokemon types
  const getTypes = (type) => {
    return Object.values(types)[Object.keys(types).indexOf(type)]
  }

  // Start new game
  const startNewGame = async () => {
    let dificult = gameModes.find( item => item.name === mode )
    await shuffleCards(dificult.count)
  }

  // Restart Game 
  const restartGame = async () => {
    let dificult = gameModes.find( item => item.name === mode )
    setCards(prev => {
      return prev.map(card => ({...card, matched: false}))
    })
    setTimeout(shuffleCards(dificult.count), 10000)
    setIsComplete(false)
    resetTurn()
  }

  // Handle choice
  const handleChoice = (card) => {
    !choice1 
      ? setChoice1(card) 
      : choice1.index !== card.index && setChoice2(card)
  }

  // Reset choice and set new turn
  const resetTurn = () => {
    setChoice1(null)
    setChoice2(null)
    setDisabled(false)
  }

  // Compare cards
  useEffect(() => {
    if ( choice1 && choice2 ) {
      setDisabled(true)
      if (choice1.id === choice2.id ) {
        setCards(prev => {
          return prev.map(card => {
            return card.id === choice1.id || card.id === choice2.id 
              ? {...card, matched: true}
              : card
          })
        })
        resetTurn()
      } else {
        setTimeout(() => {
          resetTurn()
        }, 1000)
      }
    }
  }, [choice1, choice2, cards])

  // start game on load
  useEffect(() => {
    startNewGame()
  }, [])

  useEffect(() => {
    if (cards.length > 0 && cards.every(card => card.matched)) {
      console.log('jgf');
      setIsComplete(true)
    } else {
      console.log('jol');
    }
  }, [cards])

  // Leave game
  function leaveGame() {
    navigate('/')
  }

  return (
    <>
      <Options restartGame={restartGame} leaveGame={leaveGame} />
      <div className="game-grid">
        <div className="game-status">

        </div>
        <div className={`game-board ${mode}`}>
          {
            cards.map((card) => (
              <Card card={card} 
                disabled={disabled} 
                handleChoice={handleChoice} 
                flipped={ card.matched || card === choice1 || card === choice2} 
                key={card.index} />
            ))
          }
        </div>
      </div>
      <WinModal isComplete={isComplete} restartGame={restartGame} leaveGame={leaveGame} />
    </>
  )
}

export default Game
