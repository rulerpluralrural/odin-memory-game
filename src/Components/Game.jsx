// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Card from "./Cards";

/**@param {{gameStart: boolean, setGameStart: function, toggleMusic: boolean, toggleSounds: boolean, gameMode: Array, setGameMode: function}} props*/
export default function Game(props) {
	const inGameMusicRef = useRef(null);
	const soundRef = useRef(null)

	useEffect(() => {
		if (!inGameMusicRef) return;

		if (props.gameStart && props.toggleMusic) {
			inGameMusicRef.current.volume = 0.7;
			inGameMusicRef.current.play();
		} else {
			inGameMusicRef.current.currentTime = 0;
			inGameMusicRef.current.pause();
		}
	}, [props.gameStart, props.toggleMusic]);

	return (
		<div>
			<div className="flex justify-center items-center gap-5">
				{props.gameMode.map((item, index) => {
					return (
						<Card
							key={index}
							index={index}
							name={item.name}
							source={item.source}
							soundRef={soundRef}
						/>
					);
				})}
			</div>
			<audio
				ref={inGameMusicRef}
				src="./src/assets/audio/peaceful-days.mp3"
				loop
			></audio>
			<audio ref={soundRef} src="./src/assets/audio/sweep-sound.wav"></audio>
		</div>
	);
}

Game.propTypes = {
	gameStart: PropTypes.bool,
	setGameStart: PropTypes.func,
	toggleMusic: PropTypes.bool,
	toggleSounds: PropTypes.bool,
	gameMode: PropTypes.array,
	setGameMode: PropTypes.func,
};
