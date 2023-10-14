// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

export default function App() {
	const [items, setItems] = useState([
		{
			name: "Chrono",
			source: "./src/assets/characters/chrono.jpg",
		},
		{
			name: "Marle",
			source: "./src/assets/characters/marle.png",
		},
		{
			name: "Luca",
			source: "./src/assets/characters/luca.png",
		},
		{
			name: "Robo",
			source: "./src/assets/characters/robo.jpg",
		},
		{
			name: "Ayla",
			source: "./src/assets/characters/ayla.jpg",
		},
		{
			name: "Frog",
			source: "./src/assets/characters/frog.jpg",
		},
		{
			name: "Magus",
			source: "./src/assets/characters/magus.png",
		},
		{
			name: "Schala",
			source: "./src/assets/characters/schala.jpg",
		},
		{
			name: "Ozzie",
			source: "./src/assets/characters/ozzie.jpg",
		},
		{
			name: "Kino",
			source: "./src/assets/characters/kino.jpg",
		},
		{
			name: "Dalton",
			source: "./src/assets/characters/dalton.jpg",
		},
		{
			name: "Robo",
			source: "./src/assets/characters/robo.jpg",
		},
	]);
	const [toggleMusic, setToggleMusic] = useState(false);
	const [toggleSounds, setToggleSounds] = useState(true);

	return (
		<div className="bg-[url('./src/assets/Chrono-bg.jpg')] w-full h-screen bg-cover bg-center">
			<div className="w-full h-full backdrop-brightness-75 grid grid-rows-[80px_1fr_220px] grid-c">
				<Header
					toggleMusic={toggleMusic}
					setToggleMusic={setToggleMusic}
                    toggleSounds={toggleSounds}
					setToggleSounds={setToggleSounds}
				/>
				<Main toggleMusic={toggleMusic} toggleSounds={toggleSounds}/>
				<Footer />
			</div>
		</div>
	);
}
