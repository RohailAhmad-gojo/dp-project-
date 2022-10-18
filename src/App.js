import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Departments from './components/Departments/Departments';
import Home from './components/Home/Home';
import Join from './components/Join/Join';
import Navbar from './components/Navbar/Navbar';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Contact/>
      <Departments/>
      <Join/>
      <Team/>
      <Footer/>
    </div>
  );
}

export default App;
