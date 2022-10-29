import './App.css';
import Header from './components/Header/Header.component';
import Slider from './components/Slider/Slider.component';
import Services from './components/Services/Services.Component';
import Portfolio from './components/Portfolio/Portfolio.Component';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Slider></Slider>
      <Services></Services>
      <Portfolio></Portfolio>
    </div>
  );
}

export default App;
