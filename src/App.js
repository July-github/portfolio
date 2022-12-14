import './App.scss';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import { Error } from './pages/Error/index'
import { Header } from './components/Header/index'
import { About } from './pages/About/index'
import { Projets } from './pages/Projets/index'
import { GlobalStyle } from './components/GlobalStyle/index';

function App() {

  return (
    <div className="App">
      <Router baseline='/'>
        <GlobalStyle/>
        <Header/>
        <Routes>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/' element={<Projets/>}></Route>
          <Route path='/*' element={<Error/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
