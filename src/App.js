import './App.css';
import Header from './components/Header/Header';
import News from './components/News/News';
import TopHeadline from './components/TopHeadline/TopHeadline';

function App() {
  return (
    <div className="App">
      <header>
        <Header></Header>
        <TopHeadline></TopHeadline>
        <News></News>
      </header>
    </div>
  );
}

export default App;
