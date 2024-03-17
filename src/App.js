
import './App.css';
import Aside from './components/Aside';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App bg-sky-500">
      <div className='app-container flex w-full gap-12 m-auto'>

        <Aside/>
        <MainContent/>

      </div>
    </div>
  );
}

export default App;
