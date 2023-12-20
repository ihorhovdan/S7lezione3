import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import books from './data/books.json'
import MyNavBar from './components/MyNavBar';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import BookList from './components/BookList';



function App() {
  const libri = books.horror

  return (
    <div className="App">

      <header className="App-header">
        <MyNavBar />
        <div className='w-100'>
        <Welcome />
        </div>
      </header>
        <BookList books = {libri}/>
        {/*<AllTheBooks /> */}
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
