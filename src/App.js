import './App.css';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState('')

  const handelClick = e => {
    setResult(result + e.target.name)
  }
  const handelClear = e => {
    setResult('')
  }
  const handeltotal = e => {
    setResult(eval(result))
  }
  const handelDelete = e => {
    setResult(result.slice(0, -1))
  }
  return (
    <div className='App'>
      <div className='calculator'>

        <div className='display' onChange={() => setResult()}>{result}</div>
        <div className='container'>
          <button name='C' onClick={handelClear} className='bg-btn'>C</button>
          <button name='DEL' onClick={handelDelete} className='bg-btn'>DEL</button>

          <button name='/' onClick={handelClick} >/</button>
          <button name='%' onClick={handelClick} className='bg-btn'>%</button>
          <button name='*' onClick={handelClick} className='bg-btn'>x</button>
          <button name='7' onClick={handelClick} >7</button>
          <button name='8' onClick={handelClick} >8</button>
          <button name='9' onClick={handelClick} >9</button>
          <button name='-' onClick={handelClick} >-</button>
          <button name='4' onClick={handelClick} >4</button>
          <button name='5' onClick={handelClick} >5</button>
          <button name='6' onClick={handelClick} >6</button>
          <button name='+' onClick={handelClick} >+</button>
          <button name='3' onClick={handelClick} >3</button>
          <button name='2' onClick={handelClick} >2</button>
          <button name='1' onClick={handelClick} >1</button>
          <button name='.' onClick={handelClick} >.</button>
          <button name='0' onClick={handelClick} >0</button>
          <button className='bg-btn' name='=' onClick={handeltotal} >=</button>


        </div>
      </div>
    </div>
  );
}

export default App;
