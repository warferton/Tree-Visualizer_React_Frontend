import "bootstrap/dist/css/bootstrap.css";
import "./css/background.css"

import Navbar from './components/navbar.component'
import Menu from './components/menu.component';
import {BinaryTree} from './components/tree/tree.component';


function App() {
  return (
    <>
      <Navbar/>
      <Menu drag/>
      <BinaryTree/>
    </>
  );
}

export default App;
