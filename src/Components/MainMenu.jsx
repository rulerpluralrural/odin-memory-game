// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const buttonStyle =
	"text-[1rem] font-bold font-mono flex justify-center items-center gap-1 transition-colors";
const arrowLeft = "animate-slideLeft text-sm flex justify-center items-center";
const arrowRight =
	"animate-slideRight text-sm flex items-center justify-center";
const indicator =
	"hover:before:h-0 hover:before:w-0 hover:before:border-x-8 before:border-x-transparent before:border-b-[16px] before:border-b-green-200 before:absolute before:rotate-[90deg] before:top-[2px] before:left-[-25px] before:animate-pulse";

/**@param {{chooseMode: string, setChooseMode: function, toggleSounds: boolean, pickSound: function, notifStartSound: function, toggleGameStart: function}} props*/
export default function MainMenu({
	chooseMode,
	setChooseMode,
	toggleSounds,
	pickSound,
	notifStartSound,
	toggleGameStart,
}) {

	const togglePickMode = (e) => {
		if (toggleSounds) pickSound();
		setChooseMode(e.target.value);
	};

	const rickRoll = () => {
		notifStartSound();
		window.location.assign("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
	};

	return (
		<div className="flex flex-col items-center justify-center h-full text-white text-center font-serif  font-press-start">
			<div className="border-8 border-double border-green-400  w-[500px] h-64">
				<div className=" backdrop-blur-sm h-full w-full rounded-sm flex flex-col justify-around p-5">
					<h1 className="text-[1.2rem] tracking-wider">Choose Difficulty</h1>
					<div className="flex justify-around">
						<button
							value="easy"
							className={`${buttonStyle} ${
								chooseMode === "easy" && "text-green-300"
							}`}
							onClick={togglePickMode}
						>
							{chooseMode === "easy" && (
								<FontAwesomeIcon icon={faChevronLeft} className={arrowLeft} />
							)}
							Easy
							{chooseMode === "easy" && (
								<FontAwesomeIcon icon={faChevronRight} className={arrowRight} />
							)}
						</button>
						<button
							value="medium"
							className={`${buttonStyle} ${
								chooseMode === "medium" && "text-green-300"
							}`}
							onClick={togglePickMode}
						>
							{chooseMode === "medium" && (
								<FontAwesomeIcon
									icon={faChevronLeft}
									className="animate-slideLeft text-sm"
								/>
							)}
							Medium
							{chooseMode === "medium" && (
								<FontAwesomeIcon
									icon={faChevronRight}
									className="animate-slideRight text-sm"
								/>
							)}
						</button>
						<button
							value="hard"
							className={`${buttonStyle} ${
								chooseMode === "hard" && "text-green-300"
							}`}
							onClick={togglePickMode}
						>
							{chooseMode === "hard" && (
								<FontAwesomeIcon
									icon={faChevronLeft}
									className="animate-slideLeft text-sm"
								/>
							)}
							Hard
							{chooseMode === "hard" && (
								<FontAwesomeIcon
									icon={faChevronRight}
									className="animate-slideRight text-sm"
								/>
							)}
						</button>
					</div>
					<div className="flex flex-col gap-1 items-start pl-8 font-medium">
						<button
							className={`text-md relative ${indicator}`}
							// @ts-ignore
							onClick={toggleGameStart}
						>
							Start Game
						</button>
						<button
							className={`text-md relative ${indicator}`}
							onClick={rickRoll}
						>
							Quit Game
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

MainMenu.propTypes = {
	gameStart: PropTypes.bool,
	setGameStart: PropTypes.func,
	toggleSounds: PropTypes.bool,
	toggleMusic: PropTypes.bool,
	chooseMode: PropTypes.string,
	setChooseMode: PropTypes.func,
	setGameOver: PropTypes.func,
};
