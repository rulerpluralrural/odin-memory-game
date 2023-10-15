// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import Game from "./Game";
import GameOverMenu from "./GameOverMenu";

/**@param {{toggleMusic: boolean, toggleSounds: boolean, gameMode: array, setGameMode: function, chooseMode:string, setChooseMode:function, handleScore: function, shuffle: function, pickSound: function, notifStartSound: function, notifEndSound: function, menuMusicRef: any, inGameMusicRef: any}} props*/
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
}) {
	const [gameStart, setGameStart] = useState(false);
	const [gameOver, setGameOver] = useState(true);

	const toggleGameStart = () => {
		if (chooseMode === "") return;
		notifStartSound();
		setGameStart(true);
		setGameOver(false);
	};

	useEffect(() => {
		if (!menuMusicRef) return;
		if (!gameStart && toggleMusic) {
			menuMusicRef.current.currentTime = 0;
			menuMusicRef.current.volume = 0.5;
			menuMusicRef.current.play();
		} else {
			menuMusicRef.current.pause();
		}

		if (!inGameMusicRef) return;
		if (gameStart && toggleMusic) {
			inGameMusicRef.current.currentTime = 0;
			inGameMusicRef.current.volume = 0.5;
			inGameMusicRef.current.play()
		} else {
			inGameMusicRef.current.pause();
		}
	}, [gameStart, toggleMusic, menuMusicRef, inGameMusicRef]);

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
					gameStart={gameStart}
					toggleMusic={toggleMusic}
					gameMode={gameMode}
					setGameMode={setGameMode}
					handleScore={handleScore}
					shuffle={shuffle}
					setGameOver={setGameOver}
					pickSound={pickSound}
					notifStartSound={notifStartSound}
					notifEndSound={notifEndSound}
					menuMusicRef={menuMusicRef}
					inGameMusicRef={inGameMusicRef}
				/>
			) : (
				<GameOverMenu />
			)}
		</div>
	);
}
