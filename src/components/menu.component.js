import React from 'react'
import "../css/menu-column.css"
import {motion, useCycle} from 'framer-motion'

import {MenuNavigation} from "./menu/menu-navigation"
import {MenuToggle} from './menu/menu-components/menu-toggle.component'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(40px at 35px 20px)",
    transition: {
      delay: 0.07,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const childrenVariants ={
    open:{ 
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed:{ 
        transition: { staggerChildren: 0.05, delayChildren: -1 }
    }
}



export default function Menu(props){
     const [isOpen, toggleOpen] = useCycle(false, true);
    return (
        <>
            <motion.div 
            initial = {false}
            className="container"
            animate={isOpen ? "open" : "closed" } 
            variants={sidebar}
            >
                <MenuToggle toggle={ () => toggleOpen()} />
                <MenuNavigation variants={childrenVariants} fetchTree={props.fetchTree}/>
            </motion.div>
        </>
    )
}