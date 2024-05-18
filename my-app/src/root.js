import { Toggle } from "./react-connections-game/src/components/ui/toggle";
import { useNavigate } from 'react-router-dom';

function Root() {	
	let navigate = useNavigate();
	function move(path) {
		navigate(path);
	}
	return (
		<div id="sidebar">
		<h1 className="font-space-mono">Games</h1>
		<div class="grid grid-rows-3 grid-cols-1 gap-4">
		<Toggle onClick={() => move("/games/connections")}>
		Connections
		</Toggle>
		<Toggle onClick={() => move("/games/wordle")}>Wordle</Toggle>
		<Toggle onClick={() => move("/games/crossword")}>Crossword</Toggle>
		</div>
		</div>
	);
}
export default Root;
