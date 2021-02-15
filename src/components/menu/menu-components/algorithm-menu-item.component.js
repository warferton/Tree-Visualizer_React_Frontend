import React from 'react';
import { motion } from "framer-motion";

const variants = {
    open:{
        y: 0,
        opacity: 1,
        transition: {
            y : {stiffness: 1000, velocity: -100}
        }
    },
    closed: {
        y: -50,
        opacity: 0,
        transition: {
            y: {stiffness: 1000}
        }
    }
}

export const AlgorithmMenuItem = ({algorithmName}) => {
    const style = {userSelect: "none" }
    return (
        <motion.li
            style={{listStyle: "none"}}
            variants={variants}
            whileHover={{scale : 1.10}}
            whileTap={{scale : 0.90}}
        >
            <h3 className="algorithm-option"  style={style}>{algorithmName || "OPTION"}</h3>
        </motion.li>
    )
}
