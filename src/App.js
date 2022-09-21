import './App.css';
import WeatherCodeIcons from './components/WeatherCodeIcons';
import Weather from './pages/Weather';

function App() {
  return (
    <div className="App">
      <WeatherCodeIcons code={0}/>
    </div>
  );
}

export default App;
