import Header from './components/Header/Header';
import Movies from './components/Movies/Movies';
import MovieDescription from './components/Movies/MovieDescription';
import { BrowserRouter as router, Route, Switch, BrowserRouter } from 'react-router-dom';
import './app.css';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <main>
        <MovieDescription/>
      </main>
      <footer>
        Footer
      </footer>


    </div>
  );
}

export default App;
