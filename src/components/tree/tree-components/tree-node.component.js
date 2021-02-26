import React from 'react'
import { motion } from 'framer-motion'

import "../../../css/node.css"



const whileHover = {
    scale: 1.35,
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
    let style = {};
    if(props.hidden){
        style = {visibility: 'hidden'};
    }
    return(
        <>
            <motion.div 
                className={`tree-node id-${props.id} childL-${props.leftChildId} childR-${props.rightChildId}`}
                id = {props.id}
                whileHover={whileHover}
                variants={variants}
                style={style}
            >
                <h4>{props.data}</h4>
            </motion.div>
        </>
    )
}   