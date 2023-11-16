import {Button} from '@primer/react'
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Button>Default</Button>
        <SideBar/>
    </div>
  );
}

export default App;
