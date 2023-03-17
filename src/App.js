import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Aside from './Aside';

function App() {
  const { name, title } = { name: "Nguyen Quang", title: "Développeur Web" }
  return (
    <div className="App">
      <Header className="App-header" name={name} title={title} />
      <main className="cv-react">
        <Aside />
        <Main />
      </main>
    </div >
  );
}

export default App;