import "bootstrap/dist/css/bootstrap.css";
import "./css/background.css"

import React, {useState} from "react";
import axios from "axios";

import Navbar from './components/navbar.component'
import Menu from './components/menu.component';
import {BinaryTree} from './components/tree/tree.component';
import Loader from 'react-loader-spinner'

function App() {

    const [data_structure_data, setData] = useState({})

//   const [data_structure_name, setName] = useState('')

    const [loading, setLoading] = useState(true)

    const fetchBinaryTree = async (num_nodes) => {
	    setLoading(true);
	    await axios.get('http://localhost:5500/binarytree/construct/' + num_nodes)
            .then(response => {
                console.log('response:');
                console.log(response);
                setData(response.data)
                setLoading(false);
            })
            .catch(err => console.log(err))  
        // if(data_structure_data !== null && typeof data_structure_data !== 'undefined')

        console.log(data_structure_data);
  }

// console.log(process.env.BINARY_TREE_URL);

  return (
    <>
      <Navbar/>
      <Menu drag fetchTree={fetchBinaryTree}/>
      {loading ? 
      <Loader 
      type="Rings" 
      color="#250A4D" 
      style={{position:"absolute", top: "20vh", left:"35%"}}height="400" width="400" 
      /> : 
      <BinaryTree structure={data_structure_data}/>}

    </>
  );
}

export default App;
