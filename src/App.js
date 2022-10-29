import './App.css';
import Header from './components/Header/Header.component';
import Slider from './components/Slider/Slider.component';
import Services from './components/Services/Services.Component';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Slider></Slider>
      <Services></Services>
    </div>
  );
}

export default App;
