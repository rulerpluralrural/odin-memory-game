// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import MainMenu from "./MainMenu";
import PropTypes from "prop-types";
import Game from "./Game";

/**@param {{toggleMusic: boolean, toggleSounds: boolean, gameMode: array, setGameMode: function, chooseMode:string, setChooseMode:function}} props*/
export default function Main(props) {
	const [gameStart, setGameStart] = useState(false);

	return (
		<div className="flex items-center justify-center">
			{!gameStart ? (
				<MainMenu
					gameStart={gameStart}
					setGameStart={setGameStart}
					toggleMusic={props.toggleMusic}
					toggleSounds={props.toggleSounds}
					chooseMode={props.chooseMode}
					setChooseMode={props.setChooseMode}
				/>
			) : (
				<Game
					gameStart={gameStart}
					setGameStart={setGameStart}
					toggleMusic={props.toggleMusic}
					toggleSounds={props.toggleSounds}
					gameMode={props.gameMode}
					setGameMode={props.setGameMode}
				/>
			)}
		</div>
	);
}

Main.propTypes = {
	toggleSounds: PropTypes.bool,
	toggleMusic: PropTypes.bool,
	gameMode: PropTypes.array,
	setGameMode: PropTypes.func,
	chooseMode: PropTypes.string,
	setChooseMode: PropTypes.func
};
