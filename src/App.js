import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import Table from './Components/Table';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ background: 'black' }}>
        <Body />
        <Table />
      </div>
    </div>
  );
}

export default App;
