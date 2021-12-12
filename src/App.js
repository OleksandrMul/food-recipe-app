import './App.css'
import { useState } from 'react'
import Axios from 'axios'
import RecipeTile from './components/recipeTile'

function App() {
  const YOUR_APP_ID = 'c5c19023'
  const YOUR_APP_KEY = '3c8f5fc7d905bb15cc0ac71417e1f8ad'
  const [query, setQuery] = useState('')
  const [healthLabel, setHealthLabel] = useState('vegetarian')
  const [recepies, setRecepies] = useState([])

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=${healthLabel}`

  const getRecipeInfo = async () => {
    let result = await Axios.get(url)
    setRecepies(result.data.hits)
    console.log(result.data.hits)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    getRecipeInfo()
  }

  return (
    <div className="app">
      <h1>
        <u>Food Recipe Hub</u>🥗
      </h1>
      <form
        type="submit"
        onSubmit={(event) => onSubmit(event)}
        className="app__searchForm"
      >
        <input
          type="text"
          placeholder="Type the Ingredient"
          autoComplete="Off"
          className="app__input"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value)
          }}
        />
        <select className="app__healthLabels">
          <option
            value="vegan"
            onClick={() => {
              setHealthLabel('vegan')
            }}
          >
            vegan
          </option>
          <option
            value="vegetarian"
            onClick={() => {
              setHealthLabel('vegetarian')
            }}
          >
            vegetarian
          </option>
          <option
            value="low-sugar"
            onClick={() => {
              setHealthLabel('low-sugar')
            }}
          >
            low-sugar
          </option>
          <option
            value="dairy-free"
            onClick={() => {
              setHealthLabel('dairy-free')
            }}
          >
            dairy-free
          </option>
          <option
            value="immuno-supportive"
            onClick={() => {
              setHealthLabel('immuno-supportive')
            }}
          >
            immuno-supportive
          </option>
          <option
            value="wheat-free"
            onClick={() => {
              setHealthLabel('wheat-free')
            }}
          >
            wheat-free
          </option>
        </select>
        <input className="app__submit" type="submit" value="Get Recipe" />
      </form>
      <div className='app__recipes'>
        {recepies.map((recipe) => {
          return <RecipeTile key={recipe["recipe"]["calories"]} recipe={recipe} />
        } )}
      </div>
    </div>
  )
}

export default App
