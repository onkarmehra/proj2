import logo from './logo.svg';
import './App.css';
import CustomizedAccordions from './acc'
import './styles.css'
import Bar1 from './Bar1'
import Layout from './layout';
import Navbar from './components/navbar';
import { render } from "react-dom";
import {Routes,Route} from "react-router-dom";
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}/>
        <Route path="/page1" element={<Page1/>}/>
       <Route path="/page2" element={<Page2/>} />
       <Route path="/page3" element={<Page3/>} />
      
    </Routes>
  );
}

export default App;
