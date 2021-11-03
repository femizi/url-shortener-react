
import './App.css';
import { Bottom } from './components/Bottom';
import { Shortener } from './components/Shortener';
import { Top } from './components/Top';

function App() {
  return (
    <div className="App">
      <Top/>
      <Shortener/>
      <Bottom/>
    </div>
  );
}

export default App;
