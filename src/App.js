import './App.scss';
import { Home } from './pages/Home/index'
import { Header } from './components/Header/index'

function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
    </div>
  );
}

export default App;
