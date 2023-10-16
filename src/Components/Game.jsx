// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import Card from "./Cards";

/**@param {{gameMode: Array, setGameMode: function, handleScore: function, shuffle: function, setGameOver: function, notifStartSound: function, notifEndSound: function, toggleSounds: boolean, gameOver: boolean,setGameWon: function}} props*/
export default function Game({
	gameMode,
	setGameMode,
	handleScore,
	shuffle,
	setGameOver,
	notifStartSound,
	notifEndSound,
	gameOver,
	toggleSounds,
	setGameWon
}) {
	const [flip, setFlip] = useState(false)

	const toggleCard = (index) => {
		return () => {
			if (gameMode[index].clicked === true) {
				if (toggleSounds) notifEndSound()
				setGameWon(false)
				setGameOver(true);
			}
			setFlip(true)
			gameMode[index].clicked = true;	
			setGameMode([...gameMode]);
			handleScore()
			setTimeout(shuffle, 500)
			setTimeout(() => {
				setFlip(false)
			}, 1000)
			notifStartSound()
		};
	};

	return (
			<div className={`flex justify-center items-center gap-5 ${gameOver && 'opacity-0 transition-opacity'}`}>
				{gameMode.map((item, index) => {
					return (
						<Card
							key={index}
							index={index}
							name={item.name}
							source={item.source}
							toggleCard={toggleCard(index)}
							flip={flip}
						/>
					);
				})}
			</div>
	);
}

