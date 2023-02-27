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
        <Tile tile={tile6}/>
        <Tile tile={tile7}/>
        <Tile tile={tile8}/>
        <Tile tile={tile9}/>
        <Tile tile={tile10}/>
        <Tile tile={tile11}/>
        <Tile tile={tile12}/>
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

const tile6 = {
  name: "Illinois Mathematics and Science Academy",
  location: "1500 Sullivan Rd, Aurora",
  url: "https://www.imsa.edu/",
  img: "https://www.cordoganclark.com/portfolio/tiles/educational/K-12/IMSA/1.jpg"
}

const tile7 = {
  name: "Adlai E. Stevenson High School",
  location: "1 Stevenson Dr, Lincolnshire",
  url: "https://www.d125.org/",
  img: "https://lh3.googleusercontent.com/p/AF1QipMWXSeMdUWO3JeCDghGNbYdfUmack9vSKO98kb6=s680-w680-h510"
}

const tile8 = {
  name: "Hinsdale Central High School",
  location: "5500 S Grant St, Hinsdale",
  url: "https://central.hinsdale86.org/",
  img: "https://lh3.googleusercontent.com/p/AF1QipPwUoiOOhTKl2KDPfJ7b1GTC_3dEQwJ3jm5341i=s680-w680-h510"
}

const tile9 = {
  name: "Glenbrook South High School",
  location: "4000 W Lake Ave, Glenview",
  url: "https://gbs.glenbrook225.org/",
  img: "https://sunsetvillagehomes.com/wp-content/uploads/sites/6/2020/10/PANA7967.jpg"
}

const tile10 = {
  name: "Neuqua Valley High School",
  location: "2360 95th St, Naperville",
  url: "http://nvhs.ipsd.org/",
  img: "https://i0.wp.com/www.positivelynaperville.com/wp-content/uploads/2012/04/nequa.png?fit=2256%2C1496&ssl=1"
}

const tile11 = {
  name: "Glenbrook North High School",
  location: "300 Shermer Rd, Northbrook",
  url: "https://gbn.glenbrook225.org/",
  img: "https://images.homesbymarco.com/pics/schools/4/451/large/glenbrook_north_high_school_1.jpg"
}

const tile12 = {
  name: "Vernon Hills High School",
  location: "145 Lakeview Pkwy",
  url: "https://www.d128.org/vhhs",
  img: "https://www.dailyherald.com/storyimage/DA/20180813/NEWS/180819607/AR/0/AR-180819607.jpg&updated=201808131932&MaxW=900&maxH=900&noborder&Q=80"
}



export default App
