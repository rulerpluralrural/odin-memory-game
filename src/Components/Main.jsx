// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import MainMenu from "./Game Pages/MainMenu";
import Game from "./Game Pages/Game";
import EndGame from "./Game Pages/EndGame";

/**@param {{toggleMusic: boolean, toggleSounds: boolean, gameMode: array, setGameMode: function, chooseMode:string, setChooseMode:function, handleScore: function, shuffle: function, pickSound: function, notifStartSound: function, notifEndSound: function, menuMusicRef: any, inGameMusicRef: any, gameWonMusicRef: any, gameOverMusicRef: any, gameStart: boolean, setGameStart: function, gameOver: boolean, setGameOver: function, gameWon: boolean, setGameWon: function, restartApp: function}} props*/
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
	gameWonMusicRef,
	gameStart,
	setGameStart,
	gameOver,
	setGameOver,
	gameWon,
	setGameWon,
	restartApp
}) {
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
			menuMusicRef.current.volume = 0.5;
			menuMusicRef.current.play();
		} else if (gameStart || !toggleMusic) {
			menuMusicRef.current.currentTime = 0
			menuMusicRef.current.pause();
		}

		if (!inGameMusicRef) return;
		if (gameStart && toggleMusic && !gameOver) {
			inGameMusicRef.current.volume = 0.5;
			inGameMusicRef.current.play();
		} else if (!gameStart || !toggleMusic || gameOver){
			inGameMusicRef.current.currentTime = 0
			inGameMusicRef.current.pause();
		}

		if (checkCards) {
			setGameWon(true)
			setGameOver(true)
		}
	}, [gameStart, toggleMusic, menuMusicRef, inGameMusicRef, checkCards, gameOver]);

	return (
		<div className="flex items-center justify-center animate-scale flex-grow">
			{!gameStart ? (
				<MainMenu
					toggleSounds={toggleSounds}
					chooseMode={chooseMode}
					setChooseMode={setChooseMode}
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
					toggleSounds={toggleSounds}
					setGameWon={setGameWon}
					chooseMode={chooseMode}
				/>
			) : (
				<EndGame
					gameOver={gameOver}
					toggleSounds={toggleSounds}
					toggleMusic={toggleMusic}
					pickSound={pickSound}
					notifStartSound={notifStartSound}
					gameWon={gameWon}
					gameWonMusicRef={gameWonMusicRef}
					gameOverMusicRef={gameOverMusicRef}
					gameStart={gameStart}
					restartApp={restartApp}
				/>
			)}
		</div>
	);
}
