import React from 'react'
import { motion } from 'framer-motion'
import "../../css/tree.css"

import Node from './tree-components/tree-node.component'

export const BinaryTree = () => {

    const variants = {
        hidden: {
            opacity: 0, 
            y: "-100vh",
        },
        show:{
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 70,
                duration: 0.7,  
                delayChildren: 0.2,
                staggerChildren: 0.1  
            } 
        }
    }


    return (
        <motion.div className="tree binary-tree"
        variants = {variants}
        initial = "hidden"
        animate = "show"
        >
            <div className="tree-level">
                <Node data={3}/>
            </div>
            <div className="tree-level">
                <Node data={6}/>
                <Node data={4}/>
            </div>
            <div className="tree-level">
                <Node data={2}/>
                <Node data={2}/>
                <Node data={2}/>
                <Node data={2}/>
            </div>
            <div className="tree-level">
                <Node data={2}/>
                <Node data={2}/>
                <Node data={2}/>
                <Node data={2}/>
                <Node data={2}/>
                <Node data={2}/>
                <Node data={2}/>
                <Node data={2}/>
            </div>
            <div className="tree-level">
                <Node data={2}/>
                <Node data={2}/>
                <Node data={2}/>
                <Node data={2}/>
                <Node data={2}/>
                <Node data={2}/>
                <Node data={2}/>
                <Node data={2}/>
                <Node data={2}/>
                <Node data={2}/>
                <Node data={2}/>
                <Node data={2}/>
                <Node data={2}/>
                <Node data={2}/>
                <Node data={2}/>
                <Node data={2}/>
            </div>
           


        </motion.div>
    )
}