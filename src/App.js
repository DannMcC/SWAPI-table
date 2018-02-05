import React, { Component, componentWillMount, onClick } from 'react'
import logo from './logo.svg'
import './App.css'
import data from './data.json'

/*
I had a hard time trying yo connect to the API. Since I decided to make a single query
on page load, it seemed like over kill to use something like apollo. Originally, I tried 
to make a simple post request using fetch, but it returned a 400 error and a opaque response. 
I played around a little bit with the no-cors tag, but it still wouldn't work.

I tried to use a couple different GET requests to do the query, but they didn't work either (below are the
fetch requests as well as the responses I got). 

I also tried to use a couple of libraries (Graphql-fetch and request-promise) but they returned 
similar errors.

Rather than banging my head against the wall trying to figure out what I was doing wrong, I decided to use 
the graphiql interface to do the query I needed, and then place the data in .JSON file. That way I could start
using the data to complete the rest of the task, and once the fetch request was working I could just pipe 
the data into the project and have it work. 
*/

// POST REQUEST

// fetch('http://localhost:55190/', {
//   mode: 'no-cors',
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({ query: '{allPeople { people {name gender homeworld{name}}}}' }),
// }).then(function(result) {
//     console.log(result)
// })

//GET REQUEST

// fetch('http://localhost:55190/graphql?query={allPeople{people{name%20gender%20homeworld{name}}}}', {
//   mode: 'no-cors',
//   method: 'GET',
//   headers: { 'Content-Type': 'application/json' },
//   }).then(function(result) {
//     console.log(result)
//   })
//RETURNS 400 ERROR AND OPAQUE RESPONSE^^^

// const headers = new Headers()
// headers.append('Origin','http://localhost:55190')
// fetch('http://localhost:55190?query={allPeople{edges{node{id}}}}', {
//   mode: 'no-cors',
//   method: 'GET',
//   headers,
// }).then(function(result) {
//   console.log(result)
// })
//RETURNS OPAQUE RESPONSE ^^^

// fetch('http://localhost:55190/?query={allPeople{people{name%20gender}}}', {
//   mode: 'no-cors',
//   method: 'GET',
//   headers: { 'Content-Type': 'application/json' },
// }).then(function(result) {
//   const string = JSON.stringify(result)
//   console.log(string)
// })
//RETURNS EMPTY SET ^^^

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

// RETURNS 400 ERROR ^^^

//http://graphql.org/swapi-graphql/?query={allPeople{people{name gender}}}



const allCharacters = data.data.allPeople.people
// First I take the data and break it up into an array of objects

class App extends Component {

// The state consists of the characters that will be visible, and any search input
  constructor (props) {
    super(props)
    this.state = {
      visibleCharacters: '',
      searchInput: ''
    }

    this.displayFemale = this.displayFemale.bind(this)
    this.displayMale = this.displayMale.bind(this)
    this.displayAll = this.displayAll.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

  }
// when the page loads, visibleCharacters is set to allCharacters 
  componentWillMount() {
    this.setState({visibleCharacters: allCharacters})
  }
/* displayFemale and displayMale are called when there respective buttons are pressed.
They both change the state of visibleCharacters to either males or females. In rectrospect,
I could have combined  these and displayAll into a single function that gets passed either 'male' or
'female' or 'all.'

I use filter to remove all objects were Object.gender is not either male or female

*/
  displayFemale() {
    const allFemales = allCharacters.filter(x => x.gender === "female")
    this.setState({visibleCharacters: allFemales})
  }

  displayMale() {
    const allMales = allCharacters.filter(x => x.gender === "male")
    this.setState({visibleCharacters: allMales})
  }

  displayAll() {
    this.setState({visibleCharacters: allCharacters})
  }
/* 
handleChange changes the state of 'searchInput' to whatever is entered into the search bar
as it is entered
*/
  handleChange(event) {
    this.setState({searchInput: event.target.value});
  }

/*
  handleSearch is binded to the 'search' button, and when it runs it it is pressed.
  It changes visibleCharacters to be all objects where Object.name or Object.homeworld.name 
  is the same as the search.

  An issue with doing it this way would be that if a characters name is the same as the planet they
  are from, but I don't think it was the case here. Also it's case sensitive.

  It would probably be better to use a regex that finds a string that contains the search. That way 'tatoo'
  would return 'Tatooine' as well as a hypothetical character named Tatoog Shriek
*/
  handleSearch(event) {
    const searchResult = allCharacters.filter(x => (x.homeworld.name === this.state.searchInput) || (x.name === this.state.searchInput))
    this.setState({visibleCharacters: searchResult})
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Stars Wars Character Database</h1>
        </header>
        <div className='buttons'>
          <button onClick={this.displayFemale}>Show only females</button>
          <button onClick={this.displayMale}>Show only males</button>
          <button onClick={this.displayAll}>Show all</button>
          <form onSubmit={this.handleSearch}>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <input type='submit' value='Search' />
          </form>
        </div>
        <table className='data-table'>
          <tbody>
            <tr className='table-head'>
              <td>Name</td>
              <td>Gender</td>
              <td>Homeworld</td>
            </tr>
            {/* 
              This maps through 'visibleCharacter' and returns a row for each object in the array
            */}
            {this.state.visibleCharacters.map((x) => {
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
      </div>
    );
  }
}

export default App;
