// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMusic,
	faCircleQuestion,
	faVolumeHigh,
	faSlash,
} from "@fortawesome/free-solid-svg-icons";

const iconStyle =
	"cursor-pointer transition-all duration-200 ease-linear text-black border-2 border-slate-800 rounded-full p-3 text-lg bg-white hover:scale-110";

/**@param {{toggleMusic: boolean, setToggleMusic: function, toggleSounds: boolean, setToggleSounds: function}} props*/
export default function Header(props) {
	const handleMusic = () => {
		props.setToggleMusic(!props.toggleMusic);
	};

	const handleSounds = () => {
		props.setToggleSounds(!props.toggleSounds);
	};

	return (
		<div className="flex justify-between items-center w-full px-3 py-2">
			<div className="flex gap-3 relative	">
				<FontAwesomeIcon
					icon={faVolumeHigh}
					className={`${iconStyle} ${!props.toggleSounds && "bg-red-500"} aspect-[1/1]`}
					onClick={handleSounds}
				/>
				{!props.toggleSounds && (
					<FontAwesomeIcon
						icon={faSlash}
						className="absolute left-2 top-3 text-2xl pointer-events-none scale-105 opacity-95 transition-transform"
					/>
				)}
				<FontAwesomeIcon
					icon={faMusic}
					className={`${iconStyle} ${
						!props.toggleMusic && "bg-red-500"
					}`}
					onClick={handleMusic}
				/>
				{!props.toggleMusic && (
					<FontAwesomeIcon
						icon={faSlash}
						className="absolute left-[65px] top-3 text-2xl pointer-events-none scale-105 opacity-95 transition-transform"
					/>
				)}
			</div>
			<FontAwesomeIcon
				icon={faCircleQuestion}
				className="cursor-pointer transition-transform text-4xl duration-200 border-2 border-slate-800 rounded-full hover:scale-110 text-white bg-black"
			/>
		</div>
	);
}
