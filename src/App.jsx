import './App.css'

import BlackboardGame from "./blackboard/BlackboardGame";
import Tictactoe from './tictactoe/Tictactoe';


function App() {
  return (
    <>
      <header>
        Juegos
      </header>
      <section>
        <div className="game-container">
          <BlackboardGame />
          <Tictactoe />
        </div>
      </section>
    </>
  )
}

export default App
