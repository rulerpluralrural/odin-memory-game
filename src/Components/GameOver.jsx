// eslint-disable-next-line no-unused-vars
import React from "react";

const buttonStyle = "hover:animate-pulse focus:animate-pulse hover:border-b-2 focus:border-b-2 border-white border-dashed outline-none"

export default function GameOver({ handleSound }) {
	return (
		<div
			className={`w-[450px] h-[300px] bg-slate-950 text-white flex flex-col justify-center items-center gap-3 rounded-md p-5 text-md font-press-start shadow-red-700 shadow-[10px_15px_25px] border-white border-8 border-double animate-fadeIn`}
		>
			<p className="text-center text-3xl border-2 p-5 border-white rounded-md">
				Game Over!
			</p>
			<p>Play Again?</p>
			<div className="flex justify-center gap-5 items-center w-full ">
				<button
					className={buttonStyle}
					onMouseOver={handleSound}
					onFocus={handleSound}
				>
					Yes
				</button>
				<button
					className={buttonStyle}
					onMouseOver={handleSound}
					onFocus={handleSound}
				>
					No
				</button>
			</div>
		</div>
	);
}
