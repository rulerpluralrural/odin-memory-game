// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import MainMenu from "./MainMenu";
import PropTypes from "prop-types"

/**@param {{toggleMusic: boolean, toggleSounds: boolean}} props*/
export default function Main(props) {
	const [gameStart, setGameStart] = useState(false);

	return (
		<div>
			<MainMenu gameStart={gameStart} setGameStart={setGameStart} toggleMusic={props.toggleMusic} toggleSounds={props.toggleSounds}/>
		</div>
	);
}

Main.propTypes = {
	toggleSounds: PropTypes.bool,
	toggleMusic: PropTypes.bool
}
