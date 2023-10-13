// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import MainMenu from "./MainMenu";

/**@param {{toggleMusic: boolean, toggleSounds: boolean}} props*/
export default function Main(props) {
	const [gameStart, setGameStart] = useState(false);

	return (
		<div>
			<MainMenu gameStart={gameStart} setGameStart={setGameStart} toggleMusic={props.toggleMusic} toggleSounds={props.toggleSounds}/>
		</div>
	);
}
