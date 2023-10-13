// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const buttonStyle =
	"text-[1.5rem] font-bold font-mono flex justify-center items-center gap-1 transition-colors";
const arrowLeft = "animate-slideLeft text-sm flex justify-center items-center";
const arrowRight =
	"animate-slideRight text-sm flex items-center justify-center";
/**@param {{gameStart: boolean, setGameStart: function, toggleMusic: boolean, toggleSounds: boolean}} props*/
export default function MainMenu(props) {
	const pickSoundRef = useRef(null);
	const menuMusicRef = useRef(null);
	const [activeButton, setActiveButton] = useState("");

	const toggleActiveButton = (e) => {
		pickSoundRef.current.currentTime = 0;
		setActiveButton(e.target.value);
		pickSoundRef.current.play();
	};
    
    useEffect(() => {
        if (!menuMusicRef) return
        if(!props.gameStart && props.toggleMusic) {
            menuMusicRef.current.play()
        } else {
            menuMusicRef.current.pause()
        }
        if(!pickSoundRef) return
        if (!props.toggleSounds) {
            pickSoundRef.current.volume = 0
        } else {
            pickSoundRef.current.volume = 1
        }
    }, [props.gameStart, props.toggleMusic, menuMusicRef, pickSoundRef, props.toggleSounds])

    

	return (
		<div className="flex flex-col items-center justify-center h-full text-white text-center font-serif">
			<div className="border-8 border-double border-green-400  w-[500px] h-64">
				<div className=" backdrop-blur-sm h-full w-full rounded-sm flex flex-col justify-around p-5">
					<h1 className="text-4xl font-bold tracking-wider">
						Choose Difficulty
					</h1>
					<div className="flex justify-around">
						<button
							value="easy"
							className={`${buttonStyle} ${
								activeButton === "easy" && "text-green-300"
							}`}
							onClick={toggleActiveButton}
						>
							{activeButton === "easy" && (
								<FontAwesomeIcon icon={faChevronLeft} className={arrowLeft} />
							)}
							Easy
							{activeButton === "easy" && (
								<FontAwesomeIcon icon={faChevronRight} className={arrowRight} />
							)}
						</button>
						<button
							value="medium"
							className={`${buttonStyle} ${
								activeButton === "medium" && "text-green-300"
							}`}
							onClick={toggleActiveButton}
						>
							{activeButton === "medium" && (
								<FontAwesomeIcon
									icon={faChevronLeft}
									className="animate-slideLeft text-sm"
								/>
							)}
							Medium
							{activeButton === "medium" && (
								<FontAwesomeIcon
									icon={faChevronRight}
									className="animate-slideRight text-sm"
								/>
							)}
						</button>
						<button
							value="hard"
							className={`${buttonStyle} ${
								activeButton === "hard" && "text-green-300"
							}`}
							onClick={toggleActiveButton}
						>
							{activeButton === "hard" && (
								<FontAwesomeIcon
									icon={faChevronLeft}
									className="animate-slideLeft text-sm"
								/>
							)}
							Hard
							{activeButton === "hard" && (
								<FontAwesomeIcon
									icon={faChevronRight}
									className="animate-slideRight text-sm"
								/>
							)}
						</button>
					</div>
					<div className="flex flex-col gap-1 items-start">
						<button className="text-2xl">Start Game</button>
						<button className="text-2xl">Quit Game</button>
					</div>
					<audio
						ref={pickSoundRef}
						src="./src/assets/audio/sweep-sound.wav"
					></audio>
					<audio
						ref={menuMusicRef}
						src="./src/assets/audio/a-distant-promise.mp3"
                        loop
					></audio>
				</div>
			</div>
		</div>
	);
}
