// eslint-disable-next-line no-unused-vars
import React from "react";

/**@param {{score: number, bestScore: number, restartApp: function, notifStartSound: any, toggleSounds: boolean, gameStart: boolean}} props*/
export default function Footer({
	score,
	bestScore,
	restartApp,
	notifStartSound,
	toggleSounds,
	gameStart,
}) {
	
	const restartGame = () => {
		if (!gameStart) return;
		if (toggleSounds) notifStartSound();
		restartApp();
	};

	return (
		<div className="w-full flex justify-between items-center">
			<img
				src="./src/assets/chrono-trigger-logo.png"
				alt="logo"
				className="cursor-pointer h-52 object-cover hover:scale-105 transition-transform duration-200 ease-in ml-5"
				onClick={restartGame}
			/>
			<div className="flex flex-col items-start text-left mr-5 text-white font-press-start w-[250px] backdrop-blur-lg border-4 border-double p-3 border-green-300 rounded-sm">
				<h1>
					Score: <span className="text-green-300">{score}</span>
				</h1>
				<h1>
					Best Score: <span className="text-yellow-400">{bestScore}</span>
				</h1>
			</div>
		</div>
	);
}
