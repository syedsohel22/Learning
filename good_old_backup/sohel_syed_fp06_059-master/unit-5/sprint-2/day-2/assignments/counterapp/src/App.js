import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import { useSelector,useDispatch } from 'react-redux';
import {store} from "./Redux/store";

function App() {
  const Counters=useSelector((store)=>store.counter)
  const dispatch=useDispatch();
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
