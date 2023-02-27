import { useState } from 'react'
import reactLogo from './assets/react.svg'
import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Top High Schools in Chicago</h1>
      </div>

      <div className='container'>
        <Tile tile={tile1}/>
        <Tile tile={tile2}/>
        <Tile tile={tile3}/>
        <Tile tile={tile4}/>
        <Tile tile={tile5}/>
      </div>
    </div>
  )
}

class Tile extends React.Component{
  render(){
    return (
      <React.Fragment>
        <div className="Tile">
          <img className="image" src={this.props.tile.img} alt={this.props.tile.name} />
          <h3>{this.props.tile.name}</h3>
          <h4>{this.props.tile.location}</h4>
          <a href={this.props.tile.url}>
            <button>Visit Website</button>
          </a>
      </div>
      </React.Fragment>
    );
  }
}

const tile1 = {
  name: "Payton College Prep High School",
  location: "1034 N Wells St",
  url: "https://www.wpcp.org/",
  img: "https://lh3.googleusercontent.com/p/AF1QipMea7mdyr7QxZzTuB3eGWBHxTd-yeXOLfZyk1OM=s680-w680-h510"
}

const tile2 = {
  name: "Northside College Prep High School",
  location: "5501 N Kedzie Ave",
  url: "https://www.northsideprep.org/",
  img: "https://lh3.googleusercontent.com/p/AF1QipNsPpJWtfZveVt_4xc38tQsoitGwrUV8betBZmp=s680-w680-h510"
}

const tile3 = {
  name: "Jones College Prep High School",
  location: "700 S State St, Chicago",
  url: "https://www.jonescollegeprep.org/",
  img: "https://lh3.googleusercontent.com/p/AF1QipN_I9sEYgOUrYmpG-D7N9VAWGwGbrcEXPra4xXb=s680-w680-h510"
}

const tile4 = {
  name: "Young Magnet High School",
  location: "211 S Laflin St",
  url: "https://www.wyoung.org/",
  img: "https://lh3.googleusercontent.com/p/AF1QipPVbUDR5byTwmEnNUyXpY1ffgSY_Jbwd4SXeDEv=s680-w680-h510"
}

const tile5 = {
  name: "Lane Technical High School",
  location: "2501 W Addison St",
  url: "https://lanetech.org/",
  img: "https://lh3.googleusercontent.com/p/AF1QipOd8D18hmvTHzrOqeB6yZz794GOmnRQ6lRk_CH7=s680-w680-h510"
}



export default App
