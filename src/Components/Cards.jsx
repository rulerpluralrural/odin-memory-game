// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types"

/**@param {{index: number, name:string, source:string, toggleCard: function}} props*/
export default function Card({name, source, toggleCard}) {

    return (
        <>
            <div className="flex flex-col text-center text-white font-press-start gap-1 w-48 h-96 rounded-sm cursor-pointer border-8 border-double bg-green-600 backdrop-blur-xl" 
            // @ts-ignore
            onClick={toggleCard}>
                <img src={source} alt={name} className="w-full h-full object-cover object-center bg-slate-500 pointer-events-none"/>
                <h1>{name}</h1>
            </div>
        </>
    )
}

Card.propTypes = {
    index: PropTypes.number,
    name: PropTypes.string,
    source: PropTypes.string,
    toggleCard: PropTypes.func,
}