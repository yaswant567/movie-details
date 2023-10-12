import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Movies from './components/Movies/Movies';
import Series from './components/TVseries/Series';
import MovieDescription from './components/Movies/MovieDescription';
import SeriesDescription from './components/TVseries/SeriesDescription';
import { Routes, Route } from 'react-router-dom';
import './app.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path='/'  Component={Movies}/>
          <Route path='/Home' Component={Home}/>
          <Route path='/Movies' Component={Movies}/>
          <Route path='/MovieDescription/:id' Component={MovieDescription}/>
          <Route path='/SeriesDescription/:id' Component={SeriesDescription}/>
          <Route path='/TVseries' Component={Series}/>
          {/*<Route path='/Description/:id' Component={TvDescription}/> */}
        </Routes>
      </main>
      <footer>
        Footer
      </footer>
    </div>
  );
}

export default App;
