import './App.css'

function App() {
  return (
    <div className="app">
      <h1>
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
          <option value='vegan'>vegan</option>
        </select>
        <input className='app__submit' type='submit' value='Get Recipe'/>
      </div>
    </div>
  )
}

export default App
