import './App.css';
import { add, sub, mul, divide } from './Calc'



function App() {
  return (
    <div className="App">
      <ul>
        <br></br>
        <li><h3>Sum of Two Numbers is: {add(40, 4)}</h3> </li>
        <br></br><br></br>,
        <li><h3>Subtraction of Two Numbers is: {sub(40, 4)}</h3> </li>
        <br></br><br></br>
        <li><h3>Multiplication of Two Numbers is: {mul(40, 4)} </h3></li>
        <br></br><br></br>
        <li><h3>Division of Two Numbers is: {divide(40, 4)} </h3></li>
        <br></br>
      </ul>

    </div>
  );
}

export default App;
