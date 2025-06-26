import './App.css'

import BlackboardGame from "./blackboard/BlackboardGame";


function App() {
  return (
    <>
      <header>
        Juegos
      </header>
      <section>
        <div className="game-container">
          <BlackboardGame />
        </div>
      </section>
    </>
  )
}

export default App
