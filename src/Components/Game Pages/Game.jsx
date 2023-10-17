// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import Card from "../Game Pages/Cards";

/**@param {{gameMode: Array, setGameMode: function, handleScore: function, shuffle: function, setGameOver: function, notifStartSound: function, notifEndSound: function, toggleSounds: boolean,setGameWon: function, chooseMode: string}} props*/
export default function Game({
	gameMode,
	setGameMode,
	handleScore,
	shuffle,
	setGameOver,
	notifStartSound,
	notifEndSound,
	toggleSounds,
	setGameWon,
	chooseMode
}) {
	const [flip, setFlip] = useState(false);

	const toggleCard = (index) => {
		return () => {
			const selectedCard = gameMode[index]
			if (selectedCard.clicked) {
				if (toggleSounds) notifEndSound();
				setGameWon(false);
				setGameOver(true);
			} else if (!selectedCard.clicked) {
				if (toggleSounds) notifStartSound();
				handleScore();
				setFlip(true);
				selectedCard.clicked = true;
				setGameMode([...gameMode]);
				setTimeout(shuffle, 500);
				setTimeout(() => {
					setFlip(false);
				}, 1000);
			}
		};
	};

	return (
		<div
			className={`grid justify-center items-center grid-cols-2 md:grid-cols-5 ${chooseMode === "hard" ? "grid-cols-2 xl:grid-cols-8 lg:grid-cols-5 md:grid-cols-4" : chooseMode === "medium" ? 'grid-cols-2 lg:grid-cols-5 md:grid-cols-3' : ""} gap-5 animate-fadeIn`}	
		>
			{gameMode.map((item, index) => {
				return (
					<Card
						key={index}
						index={index}
						name={item.name}
						source={item.source}
						toggleCard={toggleCard(index)}
						flip={flip}
						chooseMode={chooseMode}
					/>
				);
			})}
		</div>
	);
}
