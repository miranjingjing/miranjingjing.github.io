import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Hobbies } from './components/Hobbies';
import { Projects } from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Hobbies/>
      <Projects />
    </div>
  );
}

export default App;
