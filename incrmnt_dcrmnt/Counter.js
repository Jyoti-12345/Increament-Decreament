import React, { useState } from 'react';
import './Counter.css';

const Counter = (props) => {

    const[num, setNum] = useState(0);

    const incHandle = () =>{
        setNum(num + 1);
    }
    const decHandle = () =>{
        if(num > 0){
        setNum(num - 1);
        }else{
            alert("Sorry, Zero limit");
            setNum(0)
        }
    }

  return(
    <>
        <div className="main_div">
          <div className="center_div">
           <h1>{num}</h1>

           <div className="btn_div">
           <button onClick={incHandle}>Increment</button>
           <button onClick={decHandle}>Decrement</button>
           </div>
          </div>
        </div>
    </>
   )

 }

export default Counter