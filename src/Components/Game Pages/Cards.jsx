// eslint-disable-next-line no-unused-vars
import React from "react";
import Tilt from "react-parallax-tilt";

/**@type {import("react").CSSProperties} */
const flipStyle = {
	perspective: "1000px",
	transformStyle: "preserve-3d",
	backfaceVisibility: "hidden",
};

/**@param {{index: number, name:string, source:string, toggleCard: function, flip: boolean, chooseMode: string}} props*/
export default function Card({ name, source, toggleCard, flip, chooseMode }) {
	return (
		<>
			<Tilt
			tiltReverse
			reset
			glareEnable
			glarePosition="all"
			glareMaxOpacity={0.4}
			>
				<div
					style={flipStyle}
					className={`relative flex flex-col text-center text-slate-700 font-press-start gap-1 rounded-md cursor-pointer border-8 border-double border-green-600 bg-white ${
						chooseMode === "medium"
							? "w-[160px] h-[300px] text-sm"
							: chooseMode === "easy"
							? "w-48 h-96"
							: "w-[160px] h-[260px] text-[.8rem]"
					} ${flip && "animate-flip pointer-events-none"}`}
					// @ts-ignore
					onClick={toggleCard}
				>
					<img
						src={source}
						alt={name}
						className="w-full h-full object-contain object-center pointer-events-none "
					/>
					<h1 className="p-1 font-extrabold w-full bg-orange-400 border-2 border-white">
						{name}
					</h1>
					<div
						style={flipStyle}
						className={`absolute top-[-8px] right-[-8px] w-48 h-96 flex items-center justify-center bg-white border-8 border-double rounded-md border-green-600 cursor-pointer [transform:rotateY(180deg)] ${
							chooseMode === "medium"
								? "w-[150px] h-[260px]"
								: chooseMode === "easy"
								? "w-48 h-96"
								: "w-[160px] h-[260px]"
						}`}
					>
						<img src="./src/assets/card-back.png" />
					</div>
				</div>
			</Tilt>
		</>
	);
}
