// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import pickAudio from './assets/audio/sweep-sound.wav'
import loseAudio from './assets/audio/lose-sound.mp3'
import notifAudio from './assets/audio/game-notif-sound.wav'

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
			const audio = new Audio(pickAudio);
			audio.currentTime = 0;
			audio.volume = 0.7;
			audio.play();
		}
	};

	const notifStartSound = () => {
		if (toggleSounds) {
			const audio = new Audio(notifAudio)
			audio.currentTime = 0;
			audio.volume = 0.7;
			audio.play();
		}
	};

	const notifEndSound = () => {
		if (toggleSounds) {
			const audio = new Audio(loseAudio);
			audio.currentTime = 0;
			audio.volume = 0.7;
			audio.play();
		}
	};

	const restartApp = () => {
		setChooseMode("")
		setGameMode([])
		setGameOver(true)
		setGameWon(false)
		setGameStart(false)
		setScore(0)
		gameOverMusicRef.current.currentTime = 0
		gameWonMusicRef.current.currentTime = 0
		gameOverMusicRef.current.pause()
		gameWonMusicRef.current.pause()
	}

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
					source: "/assets/characters/chrono.jpg",
					clicked: false,
				},
				{
					name: "Marle",
					source: "/assets/characters/marle.webp",
					clicked: false,
				},
				{
					name: "Lucca",
					source: "/assets/characters/lucca.webp",
					clicked: false,
				},
				{
					name: "Frog",
					source: "/assets/characters/frog.jpg",
					clicked: false,
				},
				{
					name: "Robo",
					source: "/assets/characters/robo.jpg",
					clicked: false,
				},
			]);
		} else if (chooseMode === "medium") {
			setGameMode([
				{
					name: "Chrono",
					source: "/assets/characters/chrono.jpg",
					clicked: false,
				},
				{
					name: "Marle",
					source: "/assets/characters/marle.webp",
					clicked: false,
				},
				{
					name: "Lucca",
					source: "/assets/characters/lucca.webp",
					clicked: false,
				},
				{
					name: "Frog",
					source: "/assets/characters/frog.jpg",
					clicked: false,
				},
				{
					name: "Ayla",
					source: "/assets/characters/ayla.jpg",
					clicked: false,
				},
				{
					name: "Magus",
					source: "/assets/characters/magus.webp",
					clicked: false,
				},
				{
					name: "Robo",
					source: "/assets/characters/robo.jpg",
					clicked: false,
				},
				{
					name: "Schala",
					source: "/assets/characters/schala.jpg",
					clicked: false,
				},
				{
					name: "Ozzie",
					source: "/assets/characters/ozzie.jpg",
					clicked: false,
				},
				{
					name: "Kino",
					source: "/assets/characters/kino.jpg",
					clicked: false,
				},
			]);
		} else if (chooseMode === "hard") {
			setGameMode([
				{
					name: "Chrono",
					source: "/assets/characters/chrono.jpg",
					clicked: false,
				},
				{
					name: "Marle",
					source: "/assets/characters/marle.webp",
					clicked: false,
				},
				{
					name: "Lucca",
					source: "/assets/characters/lucca.webp",
					clicked: false,
				},
				{
					name: "Frog",
					source: "/assets/characters/frog.jpg",
					clicked: false,
				},
				{
					name: "Ayla",
					source: "/assets/characters/ayla.jpg",
					clicked: false,
				},
				{
					name: "Magus",
					source: "/assets/characters/magus.webp",
					clicked: false,
				},
				{
					name: "Robo",
					source: "/assets/characters/robo.jpg",
					clicked: false,
				},
				{
					name: "Schala",
					source: "/assets/characters/schala.jpg",
					clicked: false,
				},
				{
					name: "Ozzie",
					source: "/assets/characters/ozzie.jpg",
					clicked: false,
				},
				{
					name: "Kino",
					source: "/assets/characters/kino.jpg",
					clicked: false,
				},
				{
					name: "Azala",
					source: "/assets/characters/azala.jpg",
					clicked: false,
				},
				{
					name: "Belthasar",
					source: "/assets/characters/belthasar.jpg",
					clicked: false,
				},
				{
					name: "Dalton",
					source: "/assets/characters/dalton.jpg",
					clicked: false,
				},
				{
					name: "Melchior",
					source: "/assets/characters/melchior.jpg",
					clicked: false,
				},
				{
					name: "Tata",
					source: "/assets/characters/tata.jpg",
					clicked: false,
				},
				{
					name: "Gaspar",
					source: "/assets/characters/gaspar.jpg",
					clicked: false,
				},
			]);
		}
	}, [chooseMode]);

	return (
		<div
			className={`bg-[url('/assets/Chrono-bg.jpg')] min-h-screen h-auto w-full bg-cover bg-center`}
		>
			<audio
					ref={menuMusicRef}
					src="/assets/audio/a-distant-promise.mp3"
					loop
				></audio>
				<audio
					ref={inGameMusicRef}
					src="/assets/audio/peaceful-days.mp3"
					loop
				></audio>
				<audio
					ref={gameOverMusicRef}
					src="/assets/audio/brink-of-time.mp3"	
					loop
				></audio>
				<audio
					ref={gameWonMusicRef}
					src="/assets/audio/courage-and-pride.mp3"
					loop
				></audio>
			<div className="w-full min-h-screen backdrop-brightness-75 flex flex-col-reverse gap-5 p-5">
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
					restartApp={restartApp}
				/>
				<Footer
					score={score}
					bestScore={bestScore}
					restartApp={restartApp}
					toggleSounds={toggleSounds}
					notifStartSound={notifStartSound}
					gameStart={gameStart}
				/>
			</div>
		</div>
	);
}
