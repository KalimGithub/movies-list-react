import logo from './logo.svg';
import './App.css';
import MoviesList from './Components/MoviesList';
import GenreFilter from './Components/GenreFilter';

function App() {
  return (
    <div className="App">
      <MoviesList />
      {/* <GenreFilter /> */}
    </div>
  );
}

export default App;
