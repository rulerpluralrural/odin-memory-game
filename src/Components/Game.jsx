// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Card from "./Cards";

/**@param {{gameStart: boolean, toggleMusic: boolean, gameMode: Array, setGameMode: function, handleScore: function, shuffle: function, setGameOver: function}} props*/
export default function Game({
	gameStart,
	toggleMusic,
	gameMode,
	setGameMode,
	handleScore,
	shuffle,
	setGameOver,
}) {
	const inGameMusicRef = useRef(null);
	const soundRef = useRef(null);

	const toggleCard = (index) => {
		return () => {
			if (gameMode[index].clicked === true) {
				setGameOver(true);
				return;
			}
			gameMode[index].clicked = true;
			handleScore()
			setGameMode([...gameMode]);
			shuffle();
			soundRef.current.currentTime = 0;
			soundRef.current.play();
		};
	};

	useEffect(() => {
		if (!inGameMusicRef) return;

		if (gameStart && toggleMusic) {
			inGameMusicRef.current.volume = 0.7;
			inGameMusicRef.current.play();
		} else {
			inGameMusicRef.current.currentTime = 0;
			inGameMusicRef.current.pause();
		}
	}, [gameStart, toggleMusic]);
	console.log(gameMode);
	return (
		<div>
			<div className="flex justify-center items-center gap-5">
				{gameMode.map((item, index) => {
					return (
						<Card
							key={index}
							index={index}
							name={item.name}
							source={item.source}
							toggleCard={toggleCard(index)}
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
	toggleMusic: PropTypes.bool,
	gameMode: PropTypes.array,
	setGameMode: PropTypes.func,
	handleScore: PropTypes.func,
	shuffle: PropTypes.func,
	setGameOver:PropTypes.func
};
