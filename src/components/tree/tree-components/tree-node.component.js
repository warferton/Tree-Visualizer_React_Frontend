import React from 'react'
import { motion } from 'framer-motion'

import "../../../css/node.css"



const whileHover = {
    cursor: "pointer",
    scale: 1.35,
    color: "white",
    textShadow: "0px 0px 3px white",
    boxShadow: "none",
    borderColor: "yellow"
}

const variants={
    hidden:{
        opacity: 0, 
        y: "-100vh",
    },
    show:{
        opacity: 1,
        y: 0,   
        transition: {
            damping: 6
        }
    }
}

export default function Node(props){
    return(
        <motion.div className="tree-node"
            whileHover={whileHover}
            variants={variants}
        >
            <h4>{props.data}</h4>
        </motion.div>
    )
}   