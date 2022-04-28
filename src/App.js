import './App.css';
import Header from './components/Header'
import data from './data';
import Body from './components/body/Body';

function App() {
  return (
    <div>
      <Header />
      <Body data={data}/>
    </div>
  );
}

export default App;
