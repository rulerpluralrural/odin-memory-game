// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import GameOver from "../EndGame Pages/GameOver";
import GameWon from "../EndGame Pages/GameWon";

/**@param {{gameOver: boolean, toggleSounds: boolean, toggleMusic:boolean, pickSound: function, notifStartSound: function, gameWon: boolean, gameOverMusicRef: any, gameWonMusicRef: any, gameStart: boolean}} props*/
export default function EndGame({
	gameOver,
	toggleSounds,
	toggleMusic,
	pickSound,
	notifStartSound,
	gameWon,
    gameOverMusicRef,
    gameWonMusicRef,
}) {

	const handlePickSound = () => {
		if (toggleSounds) pickSound();
	};

	const handleSelectSound = () => {
		if (toggleSounds) notifStartSound()
	}

	useEffect(() => {
		if (gameOver && toggleMusic && !gameWon) {
			gameOverMusicRef.current.volume = 0.5;
				gameOverMusicRef.current.play();
		} else if (toggleMusic) {
			gameOverMusicRef.current.currentTime = 0
			gameOverMusicRef.current.pause();
		}

		if (gameOver && toggleMusic && gameWon) {
			gameWonMusicRef.current.volume = 0.5;
				gameWonMusicRef.current.play();
		} else if (!toggleMusic) {
			gameWonMusicRef.current.currentTime = 0
			gameWonMusicRef.current.pause();
		}
	}, [gameOver, toggleMusic, gameWon, gameOverMusicRef, gameWonMusicRef]);
	return (
		<>
			{!gameWon ? (
				<GameOver
					handlePickSound={handlePickSound}
					handleSelectSound={handleSelectSound}
				/>
			) : (
				<GameWon
					handlePickSound={handlePickSound}
					handleSelectSound={handleSelectSound}
				/>
			)}
		</>
	);
}
