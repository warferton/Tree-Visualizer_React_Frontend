import "bootstrap/dist/css/bootstrap.css";
import "./css/background.css"

import Navbar from './components/navbar.component'
import MenuColumn from './components/menu-column.component';

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <MenuColumn/>
      </div>
    </>
  );
}

export default App;
