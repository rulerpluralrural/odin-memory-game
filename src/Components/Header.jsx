// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMusic,
	faCircleQuestion,
	faVolumeHigh,
	faSlash,
} from "@fortawesome/free-solid-svg-icons";

const iconStyle =
	"cursor-pointer transition-all duration-200 ease-linear text-black border-2 border-slate-800 rounded-full p-3 text-lg hover:scale-110";

/**@param {{toggleMusic: boolean, setToggleMusic: function, toggleSounds: boolean, setToggleSounds: function, pickSound: function}} props*/
export default function Header({
	toggleMusic,
	toggleSounds,
	setToggleMusic,
	setToggleSounds,
	pickSound,
}) {
	const [help, setHelp] = useState(false);

	const handleMusic = () => {
		if (toggleSounds) pickSound();
		setToggleMusic(!toggleMusic);
	};

	const handleSounds = () => {
		if (toggleSounds) pickSound();
		setToggleSounds(!toggleSounds);
	};

	const toggleHelp = () => {
		if (toggleSounds) pickSound();
		setHelp(!help);
	};

	return (
		<div className="flex justify-between items-center w-full px-3 py-2">
			<div className="flex gap-3 relative	">
				<FontAwesomeIcon
					icon={faVolumeHigh}
					className={`${iconStyle} ${
						!toggleSounds ? "bg-red-600" : "bg-white"
					} aspect-[1/1] hover:bg-red-600`}
					onClick={handleSounds}
				/>
				{!toggleSounds && (
					<FontAwesomeIcon
						icon={faSlash}
						className="absolute left-2 top-3 text-2xl pointer-events-none scale-105 opacity-95 transition-transform"
					/>
				)}
				<FontAwesomeIcon
					icon={faMusic}
					className={`${iconStyle} ${
						!toggleMusic ? "bg-red-600" : "bg-white"
					} hover:bg-red-600`}
					onClick={handleMusic}
				/>
				{!toggleMusic && (
					<FontAwesomeIcon
						icon={faSlash}
						className="absolute left-[65px] top-3 text-2xl pointer-events-none scale-105 opacity-95 transition-transform"
					/>
				)}
			</div>
			<div className="self-start flex flex-col font-press-start font-bold">
				<FontAwesomeIcon
					icon={faCircleQuestion}
					className={`cursor-pointer transition-transform text-4xl duration-200 border-[1px] border-slate-800 rounded-full hover:scale-110 hover:text-red-400 hover:border-0 text-white w-[37px] self-end ${
						help && "text-red-400"
					}`}
					onClick={toggleHelp}
				/>
				<div
					className={`w-full ${
						help ? "opacity-100" : "opacity-0"
					} transition-opacity flex items-center`}
				>
					<img
						src="./src/assets/characters/luca.png"
						alt="luca-img"
						className="h-[150px] w-[150px] object-center object-contain animate-bounce"
					/>
					<div className=" backdrop-blur-md border-4 border-double rounded-sm border-green-300 font-thin text-white text-[.8rem] text-left p-3 mt-2 self-start break-words w-96">
						<h1 className="mb-2">
							&bull; Don&apos;t click on the same image twice
						</h1>
						<h1>
							&bull; Click the game logo on the bottom left to go back to the
							menu
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
}
