import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

fetch('http://localhost:59424?query={allPeople{edges{node{id}}}}', {
  mode: 'no-cors',
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
}).then(function(result) {
  const string = JSON.stringify(result)
  console.log(string)
})

//GRAPHQL-FETCH

// const fetch = require('graphql-fetch')('http://localhost:59424')

// const query = `
//   query findCharacters {
//     allPeople {
//       people {
//         name
//         gender
//       }
//     }
//   } 
// `

// const queryVars = {
//   id: 'abcdef'
// }

// const opts = {
//   origin: 'http://localhost:59424',
//   mode: 'no-cor'
  
// }

// fetch(query, queryVars, opts).then(function (results) {
//     console.log(results)
//   })

// fetch('http://localhost:59424/graphql', {
//   mode: 'no-cors',
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({ query: '{%20allPeople%20{%20people%20{name%20gender}}}' }),
// }).then(function(result) {
//     console.log(result)
// })

const allCharacters = []

// const allMales = allCharacters.filter(x => x.gender !== "male")

// const allFemales = allCharacters.filter(x => x.gender !== "female")

// const searchResult = allCharacters.filter(x => (x.homeworld !== foo) && (x.name !== foo))

// fetch('http://graphql.org/swapi-graphql/?query={allPeople{people{name%20gender}}}', {
//   mode: 'no-cors',
//   method: 'GET',
//   headers: { 'Content-Type': 'application/json' },
//   }).then(function(result) {
//     console.log(result)
//   })

// fetch('http://graphql.org/swapi-graphql/?query={allPeople{people{name%20gender}}}', {
//   mode: 'no-cors',
//   method: 'GET',
//   headers: { 'Content-Type': 'application/json' },
//   }).then(function(result) {
//     result.map(x => console.log(x))
//   })

// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'http://graphql.org/swapi-graphql/?query={allPeople{people{name%20gender}}}', true)
// xhr.send()

// fetch('http://graphql.org/swapi-graphql/?query={allPeople{people{name%20gender}}}').then(function(result) {
//     console.log(result)
//   })
// const allMales = {
//   method: 'GET',
  
// } 
//http://graphql.org/swapi-graphql/?query={allPeople{people{name gender}}}

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
