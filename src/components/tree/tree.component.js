import React from 'react'
import { motion } from 'framer-motion'
import "../../css/tree.css"

import Node from './tree-components/tree-node.component'



const test_tree = {
    root: {
        parent: null,
        data: 7,
        child_right: {
            parent: 7,
            data: 32,
            child_right: {
                parent: 32,
                data: 72,
                child_right: {
                    parent: 72,
                    data: 76,
                    child_right: {
                        parent: 76,
                        data: 85,
                        child_right: null,
                        child_left: null
                    },
                    child_left: {
                        parent: 76,
                        data: 73,
                        child_right: null,
                        child_left: null
                    }
                },
                child_left: {
                    parent: 72,
                    data: 34,
                    child_right: {
                        parent: 34,
                        data: 71,
                        child_right: null,
                        child_left: null
                    },
                    child_left: null
                }
            },
            child_left: {
                parent: 32,
                data: 31,
                child_right: null,
                child_left: {
                    parent: 31,
                    data: 25,
                    child_right: null,
                    child_left: null
                }
            }
        },
        child_left: null
    }
}


export const BinaryTree = (props) => {
    
    let tree_display =[]
    
    let tree_level_array = [];

    let children_array = [];


    const pushNodeToQueue = (node) => {

        if(node.child_left){
            // queue.push(node.child_left);
            children_array.push(node.child_left);
            tree_level_array.push(<Node data={node.child_left.data} key={node.child_left.data}/>);
        }
        else{
            let el =  <Node data="NA" hidden key={Math.random()+Math.random()*10}/>
            tree_level_array.push(el);
        }
            
        if(node.child_right){
            // queue.push(node.child_right); 
            children_array.push(node.child_right);
            tree_level_array.push(<Node data={node.child_right.data} key={node.child_right.data}/>);
        }
        else{
            let el =  <Node data="NA" hidden key={Math.random()*10*Math.random()}/>
            tree_level_array.push(el);
        }
    }
    
    
    
    const populateTree = (tree) => {

        let queue = [];
        queue.push(tree.root);

        let current_node = queue.shift();

        // temp_array.push(current_node.data);

        let element = <Node data={current_node.data} key={current_node.data}/>
        tree_display.push([element]);

        while(current_node){

            pushNodeToQueue(current_node);
            
            if(queue.length < 1){
                // console.log(children_array);
                tree_display.push(tree_level_array);
                queue = children_array;
                //empty children array
                children_array = [];
                tree_level_array = [];
            }

            current_node = queue.shift();
        }
            
        //if tree level is cleared
        console.log(tree_display);
        tree_display = tree_display.map(array => <div className="tree-level" key={array[0]}>{array}</div>)
    }  

    

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


    populateTree(test_tree);


    return (
        <>
        <motion.div className="tree binary-tree"
        variants = {variants}
        initial = "hidden"
        animate = "show"
        >

            {tree_display}
           
        </motion.div>
        </>
    )
}