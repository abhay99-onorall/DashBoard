import { useState } from 'react';
import './App.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';
import { motion, AnimateSharedLayout } from "framer-motion";


function App() {

  const [selected, setSelected] = useState(2);
  return (
    <motion.div className="App">
      <div className="AppGlass">
        <Sidebar selected={selected} setSelected={setSelected}/>
        <MainDash selected={selected} />
        {selected === 0 && <RightSide/>}
      </div>
    </motion.div>
  );
}

export default App;
