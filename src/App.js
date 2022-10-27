import './App.scss';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home/index'
import { Error } from './pages/Error/index'
import { Header } from './components/Header/index'
import { About } from './pages/About/index'
import { GlobalStyle } from './components/GlobalStyle/index';

function App() {

  return (
    <div className="App">
      <Router baseline='/'>
      <GlobalStyle/>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/*' element={<Error/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
