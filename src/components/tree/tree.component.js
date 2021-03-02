import React from 'react'
import { motion } from 'framer-motion'
import "../../css/tree.css"

import Node from './tree-components/tree-node.component'


//test binary tree object

const empty_node = <Node data="-" hidden  key={Math.random()*10*Math.random()}/>




export const BinaryTree = (props) => {
    
    const test_tree = props.structure;

    let tree_display =[];
    
    let tree_level_array = [];

    let children_array = [];


    const pushNodeToQueue = (node) => {

        if(node.child_left){
            // queue.push(node.child_left);
            children_array.push(node.child_left);
            tree_level_array.push(<Node data={node.child_left.data} key={node.child_left.data}/>);
        }
        else{
            let el = empty_node;
            tree_level_array.push(el);
        }
            
        if(node.child_right){
            // queue.push(node.child_right); 
            children_array.push(node.child_right);
            tree_level_array.push(<Node data={node.child_right.data} key={node.child_right.data}/>);
        }
        else{
            let el = empty_node;
            tree_level_array.push(el);
        }
    }
    
    
    //TODO: comment
    const populateTree = (tree) => {

        let queue = [];
        queue.push(tree.root);

        let current_node = queue.shift();

        let element = <Node data={current_node.data} key={current_node.data}/>
        tree_display.push([element]);

        while(current_node){

            pushNodeToQueue(current_node);
            
            if(queue.length < 1){
                tree_display.push(tree_level_array);
                queue = children_array;
                //empty children array
                children_array = [];
                tree_level_array = [];
            }

            current_node = queue.shift();
        }
            
        //TODO: comments
        console.log(tree_display);
        tree_display = tree_display.map((array,index) => {
            console.log(index);
            console.log('length= ' + array.length);
            if(array.length < (Math.pow(2, index))){ 
                let diff = Math.pow(2, index) - array.length;
                console.log(diff);
                while(diff>0){
                    array.unshift(empty_node);
                    diff--;
                }
            }
            return <div className="tree-level" key={array[0]}>{array}</div>})
            //remove last
            tree_display.pop()
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