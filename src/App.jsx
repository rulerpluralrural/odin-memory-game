// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

export default function App() {
	const [gameMode, setGameMode] = useState([]);
	const [chooseMode, setChooseMode] = useState("");
	const [toggleSounds, setToggleSounds] = useState(true);
	const [toggleMusic, setToggleMusic] = useState(true);
	const [score, setScore] = useState(0);
	const [gameStart, setGameStart] = useState(false);
	const [gameOver, setGameOver] = useState(true);
	const [gameWon, setGameWon] = useState(false);
	const [bestScore, setBestScore] = useState(
		JSON.parse(localStorage.getItem("best-score")) || 0
	);

	const menuMusicRef = useRef(null);
	const inGameMusicRef = useRef(null);
	const gameOverMusicRef = useRef(null);
	const gameWonMusicRef = useRef(null);

	const pickSound = () => {
		if (toggleSounds) {
			const audio = new Audio("./src/assets/audio/sweep-sound.wav");
			audio.currentTime = 0;
			audio.volume = 0.7;
			audio.play();
		}
	};

	const notifStartSound = () => {
		if (toggleSounds) {
			const audio = new Audio("./src/assets/audio/game-notif-sound.wav");
			audio.currentTime = 0;
			audio.volume = 0.7;
			audio.play();
		}
	};

	const notifEndSound = () => {
		if (toggleSounds) {
			const audio = new Audio("./src/assets/audio/lose-sound.wav");
			audio.currentTime = 0;
			audio.volume = 0.7;
			audio.play();
		}
	};

	const handleScore = () => {
		setScore(score + 1);
		if (score >= bestScore) {
			setBestScore(bestScore + 1);
			localStorage.setItem("best-score", JSON.stringify(bestScore + 1));
		}
	};

	const shuffle = () => {
		setGameMode([...gameMode.sort(() => (Math.random() > 0.5 ? 1 : -1))]);
	};

	useEffect(() => {
		if (chooseMode === "easy") {
			setGameMode([
				{
					name: "Chrono",
					source: "./src/assets/characters/chrono.jpg",
					clicked: false,
				},
				{
					name: "Marle",
					source: "./src/assets/characters/marle.webp",
					clicked: false,
				},
				{
					name: "Lucca",
					source: "./src/assets/characters/lucca.webp",
					clicked: false,
				},
				{
					name: "Frog",
					source: "./src/assets/characters/frog.jpg",
					clicked: false,
				},
			]);
		} else if (chooseMode === "medium") {
			setGameMode([
				{
					name: "Chrono",
					source: "./src/assets/characters/chrono.jpg",
				},
				{
					name: "Marle",
					source: "./src/assets/characters/marle.webp",
				},
				{
					name: "Lucca",
					source: "./src/assets/characters/lucca.webp",
				},
				{
					name: "Frog",
					source: "./src/assets/characters/frog.jpg",
				},
				{
					name: "Chrono",
					source: "./src/assets/characters/chrono.jpg",
				},
				{
					name: "Marle",
					source: "./src/assets/characters/marle.webp",
				},
				{
					name: "Lucca",
					source: "./src/assets/characters/lucca.webp",
				},
				{
					name: "Frog",
					source: "./src/assets/characters/frog.jpg",
				},
			]);
		} else {
			[
				{
					name: "Chrono",
					source: "./src/assets/characters/chrono.jpg",
				},
				{
					name: "Marle",
					source: "./src/assets/characters/marle.webp",
				},
				{
					name: "Lucca",
					source: "./src/assets/characters/lucca.webp",
				},
				{
					name: "Frog",
					source: "./src/assets/characters/frog.jpg",
				},
			];
		}
	}, [chooseMode]);

	return (
		<div className="bg-[url('./src/assets/Chrono-bg.jpg')] w-full h-screen bg-cover bg-center">
			<div className="w-full h-full backdrop-brightness-75 grid grid-rows-[80px_1fr_220px] grid-c">
				<audio
					ref={menuMusicRef}
					src="./src/assets/audio/a-distant-promise.mp3"
					loop
				></audio>
				<audio
					ref={inGameMusicRef}
					src="./src/assets/audio/peaceful-days.mp3"
					loop
				></audio>
				<audio
					ref={gameOverMusicRef}
					src="./src/assets/audio/brink-of-time.mp3"
					loop
				></audio>
				<audio
					ref={gameWonMusicRef}
					src="./src/assets/audio/courage-and-pride.mp3"
					loop
				></audio>
				<Header
					toggleMusic={toggleMusic}
					setToggleMusic={setToggleMusic}
					toggleSounds={toggleSounds}
					setToggleSounds={setToggleSounds}
					pickSound={pickSound}
				/>
				<Main
					toggleMusic={toggleMusic}
					toggleSounds={toggleSounds}
					pickSound={pickSound}
					notifStartSound={notifStartSound}
					notifEndSound={notifEndSound}
					menuMusicRef={menuMusicRef}
					inGameMusicRef={inGameMusicRef}
					gameMode={gameMode}
					setGameMode={setGameMode}
					chooseMode={chooseMode}
					setChooseMode={setChooseMode}
					handleScore={handleScore}
					shuffle={shuffle}
					gameOverMusicRef={gameOverMusicRef}
					gameWonMusicRef={gameWonMusicRef}
					gameStart={gameStart}
					setGameStart={setGameStart}
					gameOver={gameOver}
					setGameOver={setGameOver}
					gameWon={gameWon}
					setGameWon={setGameWon}
				/>
				<Footer
					score={score}
					bestScore={bestScore}
					setChooseMode={setChooseMode}
					setGameStart={setGameStart}
					setGameWon={setGameWon}
					setGameOver={setGameOver}
					toggleSounds={toggleSounds}
					notifStartSound={notifStartSound}
				/>
			</div>
		</div>
	);
}
