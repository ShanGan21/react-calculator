
import ReactDOM from 'react-dom';
import React, {Component,useState,useEffect,useRef} from 'react';
import './index.css';
import App from './App';


function Calculator()
{
  const [total,setTotal]=useState("");
  const inputRef= useRef(null);

  useEffect(() => inputRef.current.focus()
  )
 
  function clearClicked(e){
      setTotal("");
  }

  function equalClicked(e){

    if (total.value !== "") {
      // calculate and show the answer to display   
      setTotal(eval(total));
    }

    
}

function addClicked(e){
  setTotal(total + e.target.value);
}

function minusClicked(e){
  setTotal(total + e.target.value);
}

function divisionClicked(e){


  setTotal(total + e.target.value);
}

function multiplyClicked (e){
  setTotal(total + e.target.value);
}

function nineClicked(e){

  setTotal(total +e.target.value);
}

function eightClicked(e){
  setTotal(total + e.target.value);
}

function sevenClicked(e){
  setTotal(total + e.target.value);
}

function sixClicked(e){
  setTotal(total + e.target.value);
}
function fiveClicked(e){
  setTotal(total + e.target.value);
}

function fourClicked(e){
  setTotal(total + e.target.value);
}
function threeClicked(e){
  setTotal(total + e.target.value);
}
function twoClicked(e){
  setTotal(total + e.target.value);
}
function oneClicked(e){
  setTotal(total + e.target.value);
}

function zeroClicked(e){
  setTotal(total + e.target.value);
}


  return(


<div class="calculator">

  <div class="display"><input value ={total} ref={inputRef}></input></div>
   
  <div class="keys">
      <div class="row">
          <button onClick={nineClicked} value='9'>9</button>
          <button onClick={eightClicked} value='8'>8</button>
          <button onClick={sevenClicked} value='7'>7</button>
          <button onClick={minusClicked} class="operator" value='-'>-</button>
      </div>
   
      <div class="row">
   
          <button onClick={sixClicked} value='6'>6</button>
          <button onClick={fiveClicked} value='5'>5</button>
          <button onClick={fourClicked} value='4'>4</button>
          <button onClick={multiplyClicked} class="operator" value='*'> *</button>
      </div>
   
      <div class="row">
          <button onClick={threeClicked} value='3'>3</button>
          <button onClick={twoClicked} value='2'>2</button>
          <button onClick={oneClicked} value='1'>1</button>
          <button onClick={divisionClicked} class="operator" value='/'>/</button>
      </div>
   
      <div class="row">
          <button onClick={clearClicked}  value='C'>C</button>
          <button onClick={zeroClicked}  value='0'>0</button>
          <button onClick={equalClicked}  value='='>=</button>
          <button onClick={addClicked} class="operator"  value='+'>+</button>
      </div>
</div>
</div>
  )

}


const element=<Calculator></Calculator>

ReactDOM.render(element,document.getElementById("root"));