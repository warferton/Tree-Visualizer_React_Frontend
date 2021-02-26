import React from 'react';
import {motion} from 'framer-motion'

import {CreateTreeForm} from './menu-components/tree-create.component'
import {AlgorithmSelect} from './menu-components/algorithm-select.component'


const slideVariants ={
    open:{ 
        x:0, 
        opacity: 1,
        transition:{
            duration: 0.35,
            x:{stiffness : 500}
        }
    },
    closed: { 
        x: "6vw", 
        opacity: 0,
        transition:{
            duration: 0.15,
            x:{stiffness : 800}
        }
    }
}

export const MenuNavigation = () => {
    return(
        <>
            <motion.h3 
                className="navbar-brand brand-lg"
                variants={slideVariants}
                >Menu
            </motion.h3>
            <CreateTreeForm/>
            <hr className="solid"/>
            <AlgorithmSelect/>
            <hr className="solid"/>
        </>
    )
}
