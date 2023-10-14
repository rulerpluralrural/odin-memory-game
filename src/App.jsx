// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

export default function App() {
	const [gameMode, setGameMode] = useState([]);
	const [chooseMode, setChooseMode] = useState("");
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [toggleMusic, setToggleMusic] = useState(false);
	const [toggleSounds, setToggleSounds] = useState(true);

	useEffect(() => {
		if (chooseMode === "easy") {
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
	}, [chooseMode])
	

	return (
		<div className="bg-[url('./src/assets/Chrono-bg.jpg')] w-full h-screen bg-cover bg-center">
			<div className="w-full h-full backdrop-brightness-75 grid grid-rows-[80px_1fr_220px] grid-c">
				<Header
					toggleMusic={toggleMusic}
					setToggleMusic={setToggleMusic}
					toggleSounds={toggleSounds}
					setToggleSounds={setToggleSounds}
				/>
				<Main
					toggleMusic={toggleMusic}
					toggleSounds={toggleSounds}
					gameMode={gameMode}
					setGameMode={setGameMode}
					chooseMode={chooseMode}
					setChooseMode={setChooseMode}
				/>
				<Footer />
			</div>
		</div>
	);
}
