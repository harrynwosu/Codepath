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
        <Card card={card}q/>
      </div>
      <button type="next" className="nextCard" onClick={updateCard}>⭢</button>
    </div>
  )
}

const Card = ({card}) =>{
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
            <img src={this.props.cardface.img} alt={this.props.cardface.country}/>
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
  difficulty: "",
  img: "https://www.dontwasteyourmoney.com/wp-content/uploads/2020/04/maps-international-full-lamination-giant-world-map-78x48-inch-world-map.jpg"
} 

const card1 = {
  country: "France",
  capital: "Paris",
  difficulty: "easy",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnka0YbBVJNoJEAjO5P-G7hFPJUOX95q49s5Nmi14TQIGe2tbUh4orU_FfhVwygDY7E0c&usqp=CAU"
}

const card2 = {
  country: "China",
  capital: "Beijing",
  difficulty: "medium",
  img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Badaling_China_Great-Wall-of-China-01.jpg/220px-Badaling_China_Great-Wall-of-China-01.jpg"
}

const card3 = {
  country: "Nigeria",
  capital: "Abuja",
  difficulty: "hard",
  img: "https://static.latribune.fr/1928087/lagos-nigeria.jpg"
}

const card4 = {
  country: "Vietnam",
  capital: "Hanoi",
  difficulty: "hard",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBHDhWiReYJE-dNZQVUGDLs12M5XBa0b1Do9GRwFC7Zgu75mN4Gp0XkvO1V0ldACFKtIc&usqp=CAU"
}

const card5 = {
  country: "Malaysia",
  capital: "Kuala Lumpur",
  difficulty: "medium",
  img: "https://www.internationalcitizens.com/wp-content/uploads/2022/10/iStock-1316908757.jpg"
}

const card6 = {
  country: "Indonesia",
  capital: "Jakarta",
  difficulty: "easy",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbSy9g7mHDcFDQUEi1HoVPfiRPwWWO3CpYix2K_P0eAKzr2b6UcJ3caqPvBoe4BMABQ1s&usqp=CAU"
}

const card7 = {
  country: "Iran",
  capital: "Tehran",
  difficulty: "medium",
  img: "https://www.wilsoncenter.org/sites/default/files/styles/embed_text_block/public/media/uploads/images/Tehran%20Skyscrappers_0.jpg"
}

const card8 = {
  country: "Egypt",
  capital: "Cairo",
  difficulty: "easy",
  img: "https://www.planetware.com/photos-large/EGY/egypt-cairo-pyramids-of-giza.jpg"
}

const card9 = {
  country: "Hungary",
  capital: "Budapest",
  difficulty: "medium",
  img: "https://a.cdn-hotels.com/gdcs/production163/d345/47e14d8a-051b-4932-85d1-8f5c0363fde7.jpg"
}

const card10 = {
  country: "England",
  capital: "London",
  difficulty: "easy",
  img: "https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTYyNDg1MjE3MTI1Mjc5Mzk4/topic-london-gettyimages-760251843-promo.jpg"
}

const card11 = {
  country: "Pakistan",
  capital: "Karachi",
  difficulty: "hard",
  img: "https://static.dw.com/image/61500140_605.jpg"
}

const card12 = {
  country: "Colombia",
  capital: "Bogota",
  difficulty: "hard",
  img: "https://ivhq.imgix.net/images/hero/volunteer-in-colombia-with-world-leaders-ivhq.jpg?auto=format,compress"
}

const card13 = {
  country: "Argentina",
  capital: "Buenos Aires",
  difficulty: "medium",
  img: "https://travellersworldwide.com/wp-content/uploads/2022/07/Shutterstock_1371228326.jpg.webp"
}

const card14 = {
  country: "Japan",
  capital: "Tokyo",
  difficulty: "easy",
  img: "https://afar.brightspotcdn.com/dims4/default/1e3e731/2147483647/strip/false/crop/1440x720+0+0/resize/1440x720!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.amazonaws.com%2Fbrightspot%2Fcf%2F8a%2F20b4a2c544a58be93512ad67084c%2Fbohler-japankk-4006.jpg"
}

const card15 = {
  country: "Philippines",
  capital: "Manila",
  difficulty: "medium",
  img: "https://a.cdn-hotels.com/gdcs/production41/d1859/0e3e7394-9ef7-48b3-9318-49fb1c4e060a.jpg?impolicy=fcrop&w=800&h=533&q=medium"
}


export default App
