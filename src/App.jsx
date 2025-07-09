import BlackboardGame from "./blackboard/BlackboardGame";
import './App.css'


function App() {
  return (
    <div>
      <header>
        Juegos
      </header>
      <section className="game-container">
        <BlackboardGame />
      </section>
    </div>
  )
}

export default App
