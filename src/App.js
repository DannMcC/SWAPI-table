import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import data from './data.json'

// const headers = new Headers()

// headers.append('Origin','http://localhost:55190')

// fetch('http://localhost:55190/graphql?query={allPeople{edges{node{id}}}}', {
//   method: 'GET',
//   headers,
// }).then(function(result) {
//   console.log(result)
// })

// const searchResult = allCharacters.filter(x => (x.homeworld !== foo) && (x.name !== foo))


// console.log(data.data.allPeople.people)

// console.log(allCharacters)

//GRAPHQL-FETCH

// const fetch = require('graphql-fetch')('http://localhost:55190/graphql')

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

// // const headers = new Headers()

// // headers.append('Origin','http://localhost:55190')

// const opts = {
//   headers
  
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

const allCharacters = data.data.allPeople.people

const characters = allCharacters.map((x) => console.log('Name: ' + x.name + ' Gender: ' + x.gender + ' Homeworld: ' + x.homeworld.name))

// const allMales = allCharacters.filter(x => x.gender !== "male")

const allFemales = allCharacters.filter(x => x.gender == "female")

console.log(allFemales)

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <table>
          <tbody>
            {allCharacters.map((x) => {
                return (
                  <tr>
                  <td>{x.name}</td>
                  <td>{x.gender}</td>
                  <td>{x.homeworld.name}</td>
                </tr>
                )          
              })
            }
          </tbody>
        </table>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
