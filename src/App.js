import Header from './components/Header/Header';
import Movies from './components/Movies/Movies';
import MovieDescription from './components/Movies/MovieDescription';
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
          <Route path='/Movies' Component={Movies}/>
          <Route path='/Description/:id' Component={MovieDescription}/>
          {/* <Route path='/TVseries' Component={TV}/>
          <Route path='/Description/:id' Component={TvDescription}/> */}
        </Routes>
      </main>
      <footer>
        Footer
      </footer>
    </div>
  );
}

export default App;
