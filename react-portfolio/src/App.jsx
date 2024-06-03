

import styles from "./App.module.css";
import { Navbar } from "./components/navbar/Navbar";
import {Hero} from "./components/Hero/Hero";
import {About} from "./components/About/About";
import { Experince } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
function App() {
  return <div className={styles.App}>
    <Navbar/>
    <Hero/>
  
    <Experince/>
    <Projects/>
    <Contact/>
  </div>

  
}

export default App
