import { Toggle } from "./react-connections-game/src/components/ui/toggle";
import { MdChatBubble } from 'react-icons/md';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { useState } from 'react';
import SidebarMenu from './sidebar';

function Crossword() {
	const [iframeSrc, setMyString] = useState("");
	const [showButton, setShowButton] = useState(true);

	function submitForm(event) {
		event.preventDefault();
		var input = document.getElementById("friendGame").value;
		setMyString(input);
	}

	return (
		<div id="sidebar">
		<SidebarMenu />
		<h1 className="font-space-mono">Crosswords</h1>
		<div id="iframe-bar" style={{display: 'table', margin: 'auto', textAlign:'center'}}>
		<iframe id="embed-crossword" title="downforacross" allow="clipboard-read; clipboard-write" style={{border:'1px black solid', height: '500px', width: '350px'}} src={iframeSrc} onLoad={() => setShowButton(false)}></iframe>
		</div>
		{ showButton ? <div class="grid grid-rows-1 grid-cols-1 gap-4">
		<Toggle onClick={() => setMyString("https://downforacross.com/beta/play/33802")}>
		Create Easy
		</Toggle>
		</div> : <div style={{textAlign: 'center'}} class="grid grid-rows-1 grid-cols-1 gap-4">
			<form onSubmit={(event) => submitForm(event)}>
				<input class="py-3 px-4 w-300 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" id="friendGame" type="text" placeholder="https://downforacross.com/beta/game/12345-abc"></input>
		<div><input class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" value="Join friend's game"></input>
		</div>
		<div style={{display:'inline-flex', verticalAlign: 'middle'}}>Click on the <IconContext.Provider value={{style: { margin:'3px'}}}><AiOutlineMenuUnfold /></IconContext.Provider> </div>
		<div style={{display:'inline-flex', verticalAlign: 'middle'}}>and then the <IconContext.Provider value={{style: { margin: '3px'}}}><MdChatBubble /></IconContext.Provider></div>
		<div style={{display:'inline-flex', verticalAlign: 'middle'}}>to get a link to your crossword to share with friends!</div> 
		</form>
				</div> }
		</div>
	);
}
export default Crossword;
