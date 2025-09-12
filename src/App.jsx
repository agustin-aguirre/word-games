import GameOverlay from './components/overlays/game/GameOverlay';
import BlackboardGame from "./blackboard_v1/BlackboardGame";
import './App.css'


function App() {
	return (
		<GameOverlay>
			<BlackboardGame />
		</GameOverlay>
  );
}

export default App
