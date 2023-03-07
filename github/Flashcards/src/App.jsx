import { useState } from 'react'
import reactLogo from './assets/react.svg'
import React from 'react'
import './App.css'

function App() {
  var idx = 0
  const [card, setCard] = useState(card0)
  const cards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15]
  const updateCard = () => {
    var random = Math.floor(Math.random() * cards.length)
    while (cards[random] == card){
      random = Math.floor(Math.random() * cards.length)
    }
    setCard(cards[random])
  }
  return (
    <div>
      <div>
        <h2>Know Your Cities</h2>
        <h4>How well do you know the capital cities of the world? Test your geographical knowledge here!</h4>
        <h5>Number of cards: 15</h5>
        <br></br>
      </div>

      <div>
        <Card card={card} onClick={onClick}/>
      </div>
      <button type="next" className="nextCard" onClick={updateCard}>⭢</button>
    </div>
  )
}

const Card = ({card, onClick}) =>{
  const [state, setState] = useState("front")
  const updateState = () => {
    if (state=="front"){
      setState("back")
    }else{
      setState("front")
    }
  }

    return(
      <React.Fragment>
        <div className='card' id ={card.difficulty}>
          {state == "front"
            ? <Front cardface={card} onClick={updateState}/>
            : <Back cardface={card} onClick={updateState}/>
          }
        </div>
      </React.Fragment>
    )
  }


class Front extends React.Component{
  render(){
    return(
      <React.Fragment>
        <div className = "front">
            <h4>{this.props.cardface.country}</h4>
            <br></br>
        </div>
      </React.Fragment>
    )
  }
}

class Back extends React.Component{
  render(){
    return(
      <React.Fragment>
        <div className = "back">
            <h4>{this.props.cardface.capital}</h4>
            <br></br>
        </div>
      </React.Fragment>
    )
  }
}
const card0 = {
  country: "Start!",
  capital: "Press the next arrow to start the flashcards..",
  difficulty: ""
} 

const card1 = {
  country: "France",
  capital: "Paris",
  difficulty: "easy"
}

const card2 = {
  country: "China",
  capital: "Beijing",
  difficulty: "medium"
}

const card3 = {
  country: "Nigeria",
  capital: "Abuja",
  difficulty: "hard"
}

const card4 = {
  country: "Vietnam",
  capital: "Hanoi",
  difficulty: "hard"
}

const card5 = {
  country: "Malaysia",
  capital: "Kuala Lumpur",
  difficulty: "medium"
}

const card6 = {
  country: "Indonesia",
  capital: "Jakarta",
  difficulty: "easy"
}

const card7 = {
  country: "Iran",
  capital: "Tehran",
  difficulty: "medium"
}

const card8 = {
  country: "Egypt",
  capital: "Cairo",
  difficulty: "easy"
}

const card9 = {
  country: "Hungary",
  capital: "Budapest",
  difficulty: "medium"
}

const card10 = {
  country: "England",
  capital: "London",
  difficulty: "easy"
}

const card11 = {
  country: "Pakistan",
  capital: "Karachi",
  difficulty: "hard"
}

const card12 = {
  country: "Colombia",
  capital: "Bogota",
  difficulty: "hard"
}

const card13 = {
  country: "Argentina",
  capital: "Buenos Aires",
  difficulty: "medium"
}

const card14 = {
  country: "Japan",
  capital: "Tokyo",
  difficulty: "easy"
}

const card15 = {
  country: "Philippines",
  capital: "Manila",
  difficulty: "medium"
}


export default App
