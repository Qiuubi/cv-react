import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Aside from './components/Aside';
import Footer from './components/Footer';
import dataApp from './components/datas/dataApp';

function App() {
  return (
    <div className="App">
      <Header className="App-header" name={dataApp.headerName} title={dataApp.headerTitle} />
      <main className="cv-react">
        <Aside />
        <Main />
      </main>
      <Footer links={dataApp.footerLinks} title={dataApp.footerFrameworkTitle} frameworkLink={dataApp.footerFrameworkLink} />
    </div >
  );
}

export default App;