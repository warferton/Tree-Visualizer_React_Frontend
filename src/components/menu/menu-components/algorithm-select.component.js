import React from 'react';
import { motion } from "framer-motion"

import {AlgorithmMenuItem as MenuItem} from "./algorithm-menu-item.component"


const formVariants = {
    open:{
        y: 0,
        opacity: 1,
        transition: {
            y : {stiffness: 1000, velocity: -100}
        },
    },
    closed: {
        y: -50,
        opacity: 0,
        transition: {
            y: {stiffness: 1000}
        },
    }
}

const slideVariants ={
    open:{ 
        x:0, 
        opacity: 1,
        transition:{
            duration: 0.4,
            x:{stiffness : 400}
        }
    },
    closed: { 
        x: "-3vw", 
        opacity: 0, 
        transition:{
            duration: 0.1,
            x:{stiffness : 400}
        }
    }
}

export function AlgorithmSelect(){
    return(
        <div className="algorithm-select-form">
            <motion.h4 
                className="navbar-brand"
                variants={slideVariants}
                >Algorithms
            </motion.h4>
            <motion.form
                variants={formVariants}>{/* TODO:  ADD onSubmit func*/}
                <div className="form-group algorithm-options">
                    {/* v Change to MenueItemComponents v */}
                    <MenuItem algorithmName="Test"/>
                    <MenuItem/>
                    <MenuItem/>
                    <MenuItem/>
                    <MenuItem/>
                </div>
                <div className="form-group">
                    <motion.input className="btn btn-primary btn-lg" 
                        value="Run" 
                        type="submit"
                        whileHover={{scale: 1.15, originX: 0}}
                        whileTap={{scale: 0.95}}
                    />
                </div>
            </motion.form>
        </div> 
    )
}