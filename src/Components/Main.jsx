// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import Game from "./Game";
import EndGame from "./EndGame";

/**@param {{toggleMusic: boolean, toggleSounds: boolean, gameMode: array, setGameMode: function, chooseMode:string, setChooseMode:function, handleScore: function, shuffle: function, pickSound: function, notifStartSound: function, notifEndSound: function, menuMusicRef: any, inGameMusicRef: any, gameWonMusicRef: any, gameOverMusicRef: any}} props*/
export default function Main({
	toggleMusic,
	toggleSounds,
	gameMode,
	setGameMode,
	chooseMode,
	setChooseMode,
	handleScore,
	shuffle,
	pickSound,
	notifStartSound,
	notifEndSound,
	menuMusicRef,
	inGameMusicRef,
	gameOverMusicRef,
	gameWonMusicRef
}) {
	const [gameStart, setGameStart] = useState(false);
	const [gameOver, setGameOver] = useState(true);
	const [gameWon, setGameWon] = useState(false);
	const checkCards = gameMode.every((card) => card.clicked === true);

	const toggleGameStart = () => {
		if (chooseMode === "") return;
		if (toggleSounds) notifStartSound();
		setGameStart(true);
		setGameOver(false);
	};

	useEffect(() => {
		if (!menuMusicRef) return;
		if (!gameStart && toggleMusic) {
			menuMusicRef.current.currentTime = 0;
			menuMusicRef.current.volume = 0.5;
			menuMusicRef.current.play();
		} else if (gameStart || !toggleMusic) {
			menuMusicRef.current.volume = 0;
			menuMusicRef.current.pause();
		}

		if (!inGameMusicRef) return;
		if (gameStart && toggleMusic && !gameOver) {
			inGameMusicRef.current.volume = 0.6;
			inGameMusicRef.current.play();
		} else if (!gameStart || !toggleMusic || gameOver){
			inGameMusicRef.current.currentTime = 0;
			inGameMusicRef.current.pause();
		}

		if (checkCards) {
			setGameWon(true)
			setGameOver(true)
		}
	}, [gameStart, toggleMusic, menuMusicRef, inGameMusicRef, checkCards, gameOver]);

	return (
		<div className="flex items-center justify-center">
			{!gameStart ? (
				<MainMenu
					gameStart={gameStart}
					setGameStart={setGameStart}
					toggleMusic={toggleMusic}
					toggleSounds={toggleSounds}
					chooseMode={chooseMode}
					setChooseMode={setChooseMode}
					setGameOver={setGameOver}
					pickSound={pickSound}
					notifStartSound={notifStartSound}
					toggleGameStart={toggleGameStart}
				/>
			) : gameStart && !gameOver ? (
				<Game
					gameMode={gameMode}
					setGameMode={setGameMode}
					handleScore={handleScore}
					shuffle={shuffle}
					setGameOver={setGameOver}
					notifStartSound={notifStartSound}
					notifEndSound={notifEndSound}
					gameOver={gameOver}
					toggleSounds={toggleSounds}
					setGameWon={setGameWon}
				/>
			) : (
				<EndGame
					gameOver={gameOver}
					toggleSounds={toggleSounds}
					toggleMusic={toggleMusic}
					pickSound={pickSound}
					gameWon={gameWon}
					gameWonMusicRef={gameWonMusicRef}
					gameOverMusicRef={gameOverMusicRef}
				/>
			)}
		</div>
	);
}
