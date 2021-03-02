import React, {useState} from 'react';
import { motion } from "framer-motion"



const formVariants = {
    open:{
        y: 0,
        opacity: 1,
        transition: {
            y : {stiffness: 1000, velocity: -100}
        },
    },
    closed: {
        y: "10vh",
        opacity: 0,
        transition: {
            y: {stiffness: 1000}
        },
    }
}


export function CreateTreeForm(props){
    const [num_nodes, setNumNodes] = useState(5)
    
    const [] = useState()
    
    const onSubmit = (event) =>{
        if(num_nodes > 0)
            props.fetchTree(num_nodes);
        //request random tree
        else
            props.fetchTree('random');

        event.preventDefault();
    }

    return(
        <div className="create-tree-form">
            <motion.form
                variants={formVariants}
                onSubmit={onSubmit}
            >
                <div className="form-group"> {/* implement with slider */}
                    <input className="form-control" type="number" value={num_nodes} onChange={ e => setNumNodes(e.target.value)} required placeholder="0" pattern="[0-9]" max="31" min="0"/>
                    <label className="label-primary">Nodes</label>
                </div>

                <div className="form-group">
                    <motion.input 
                        className="btn btn-primary btn-lg" 
                        type="submit" 
                        value="Create Tree"
                        whileHover={{scale: 1.15, originX: 0}}
                        whileTap={{scale: 0.95}}/>
                </div>
            </motion.form>
        </div>
    )
}