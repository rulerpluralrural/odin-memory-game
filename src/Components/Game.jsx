// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import Card from "./Cards";

/**@param {{gameStart: boolean, toggleMusic: boolean, gameMode: Array, setGameMode: function, handleScore: function, shuffle: function, setGameOver: function, notifStartSound: function, notifEndSound: function, menuMusicRef: any}} props*/
export default function Game({
	gameStart,
	toggleMusic,
	gameMode,
	setGameMode,
	handleScore,
	shuffle,
	setGameOver,
	notifStartSound,
	notifEndSound,
	menuMusicRef
}) {
	const inGameMusicRef = useRef(null);
	const [flip, setFlip] = useState(false)

	const toggleCard = (index) => {
		return () => {
			if (gameMode[index].clicked === true) {
				setGameOver(true);
				return;
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

	useEffect(() => {
		if (!inGameMusicRef) return;

		if (gameStart && toggleMusic) {
			inGameMusicRef.current.volume = 0.7;
			inGameMusicRef.current.play();
		} else {
			inGameMusicRef.current.currentTime = 0;
			inGameMusicRef.current.pause();
		}
	}, [gameStart, toggleMusic]);

	return (
		<div>
			<div className="cardBox flex justify-center items-center gap-5">
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
			<audio
				ref={inGameMusicRef}
				src="./src/assets/audio/peaceful-days.mp3"
				loop
			></audio>
		</div>
	);
}

