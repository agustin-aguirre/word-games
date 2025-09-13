import GameOverlay from './components/overlays/game/GameOverlay';
import Game from "./games/blackboard/Game";
import './App.css'


function App() {
	return (
		<GameOverlay>
			<Game />
		</GameOverlay>
  );
}

export default App
