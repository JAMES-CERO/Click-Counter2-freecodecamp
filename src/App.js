import './App.css';
import logo from './components/FCClogo.png'
import Buttom from './components/Buttom';

function App() {

  const useClick = () => {
    console.log('Click');
  }
  const CounterRestart = () => {
    console.log('Reiniciar')
  }
  return (
    <div className="App">
      <div className='Logo'>
        <img  className='FFCimg'
        alt='FFC' src={logo}/>
      </div>
      <div className='MainContainer'>
        <Buttom text='click' isClick={true} useClick={useClick}/>
        <Buttom text='Reset' isClick={false} useClick={CounterRestart}/>
      </div>
    </div>
  );
}

export default App;
