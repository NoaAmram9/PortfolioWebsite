
import './App.css';
import AboutTab from './components/About/AboutTab.js';
import bgImage from './NoaAmramLogo1.png'; // Import your background image

function App() {
  return (
    <div
      className="App"
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <AboutTab />
    </div>
  );
}

export default App;
