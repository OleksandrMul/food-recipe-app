import './App.css'
import { useState } from 'react'
import Axios from 'axios'

function App() {
  const YOUR_APP_ID = 'c5c19023'
  const YOUR_APP_KEY = '3c8f5fc7d905bb15cc0ac71417e1f8ad'
  const [recepies, setRecepies] = useState([])

  const url = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`

  const getRecipeInfo = async () => {
    let result = await Axios.get(url)
    setRecepies(result.data.hits)
    console.log(result.data.hits);
   
  }

  return (
    <div className="app">
      <h1 onClick={getRecipeInfo}>
        <u>Food Recipe Hub</u>🥗
      </h1>
      <div className="app__searchForm">
        <input
          type="text"
          placeholder="Type the Ingredient"
          autoComplete="Off"
          className="app__input"
        />
        <select className="app__healthLabels">
          <option value="vegan">vegan</option>
        </select>
        <input className="app__submit" type="submit" value="Get Recipe" />
      </div>
    </div>
  )
}

export default App
