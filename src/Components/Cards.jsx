// eslint-disable-next-line no-unused-vars
import React from "react";
/**@type {import("react").CSSProperties} */
const flipStyle = {
	perspective: "1000px",
	transformStyle: "preserve-3d",
	backfaceVisibility: "hidden",
};

/**@param {{index: number, name:string, source:string, toggleCard: function, flip: boolean}} props*/
export default function Card({ name, source, toggleCard, flip }) {
	return (
		<>
			<div>
				<div
					style={flipStyle}
					className={`relative flex flex-col text-center text-slate-700 font-press-start gap-1 w-48 h-96 rounded-md cursor-pointer border-8 border-double border-green-600 bg-white ${
						flip && "animate-flip pointer-events-none"
					}`}
					// @ts-ignore
					onClick={toggleCard}
				>
					<img
						src={source}
						alt={name}
						className="w-full h-full object-cover object-center pointer-events-none "
					/>
					<h1 className="p-1 font-extrabold w-full bg-orange-400 border-2 border-white">
						{name}
					</h1>
					<div
						style={flipStyle}
						className="absolute top-[-8px] right-[-8px] w-48 h-96 flex items-center justify-center bg-white border-8 border-double rounded-md border-green-600 cursor-pointer [transform:rotateY(180deg)]"
					>
						<img src="./src/assets/card-back.png" />
					</div>
				</div>
			</div>
		</>
	);
}
