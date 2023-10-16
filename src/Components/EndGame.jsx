// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import GameOver from "./GameOver";
import GameWon from "./GameWon";

/**@param {{gameOver: boolean, toggleSounds: boolean, toggleMusic:boolean, pickSound: function, gameWon: boolean, gameOverMusicRef: any, gameWonMusicRef: any}} props*/
export default function EndGame({
	gameOver,
	toggleSounds,
	toggleMusic,
	pickSound,
	gameWon,
    gameOverMusicRef,
    gameWonMusicRef
}) {

	const handleSound = () => {
		if (toggleSounds) pickSound();
	};

	useEffect(() => {
		if (gameOver && toggleMusic && !gameWon) {
			gameOverMusicRef.current.currentTime = 0;
			gameOverMusicRef.current.volume = 0.6;
			setTimeout(() => {
				gameOverMusicRef.current.play();
			}, 1500);
		} else if (!gameOver || !toggleMusic || gameWon) {
			gameOverMusicRef.current.volume = 0;
			gameOverMusicRef.current.pause();
		}

		if (gameOver && toggleMusic && gameWon) {
			gameWonMusicRef.current.currentTime = 0;
			gameWonMusicRef.current.volume = 0.6;
			setTimeout(() => {
				gameWonMusicRef.current.play();
			}, 1500);
		} else if (!gameOver || !toggleMusic || !gameWon) {
			gameWonMusicRef.current.volume = 0;
			gameWonMusicRef.current.pause();
		}
	}, [gameOver, toggleMusic, gameWon, gameOverMusicRef, gameWonMusicRef]);
	return (
		<>
			{!gameWon ? (
				<GameOver
					handleSound={handleSound}
				/>
			) : (
				<GameWon
					handleSound={handleSound}
				/>
			)}
		</>
	);
}
