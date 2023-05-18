import React from 'react';
import { useState } from 'react';
import './style.css';

function App() {
    const [start, setStart] = useState([0]);
    const [sum, setSum] = useState();
    function add(e) {
        if (start[0] === 0 && +e.target.innerHTML === 0) {
            setStart([0]);
        } else if (start[0] === 0) {
            start[0] = e.target.innerHTML;
            setStart([...start]);
        } else {
            start.push(e.target.innerHTML);
            setStart([...start]);
        }
    }
    function operator(e) {
        if (start.length === 1 && start[0] === 0) {
            setStart([...start]);
        } else if (start.length === 1 && start[0] !== 0) {
            start.push(e.target.innerHTML);
            setStart([...start]);
        } else if (start.length > 1 && isNaN(start[start.length - 1])) {
            start[start.length - 1] = e.target.innerHTML;
            setStart([...start]);
        } else if (start.length > 1 && !isNaN(start[start.length - 1])) {
            start.push(e.target.innerHTML);
            setStart([...start]);
        }
    }
    return (
        <>
            <div className='main'>
                <h2>{start}</h2>
                <h1>{sum}</h1>
            </div>
            <div className='script'>
                <div>
                    <button onClick={(e) => {
                        operator(e);
                    }}>+</button>
                </div>
                <div>
                    <button onClick={(e) => {
                        operator(e);
                    }}>-</button>
                </div>
                <div>
                    <button onClick={(e) => {
                        operator(e);
                    }}>*</button>
                </div>
                <div>
                    <button onClick={(e) => {
                        operator(e);
                    }}>/</button>
                </div>

                <div>
                    <button onClick={(e) => {
                        add(e);
                    }}>7</button>
                </div>
                <div>
                    <button onClick={(e) => {
                        add(e);
                    }}>8</button>
                </div>
                <div>
                    <button onClick={(e) => {
                        add(e);
                    }}>9</button>
                </div>
                <div className='area'>
                    <button onClick={() => {
                        let x = start.join('');
                        x = eval(x);
                        console.log(x);
                        setSum(x);
                    }}>=</button>
                </div>

                <div>
                    <button onClick={(e) => {
                        add(e);
                    }}>4</button>
                </div>
                <div>
                    <button onClick={(e) => {
                        add(e);
                    }}>5</button>
                </div>
                <div>
                    <button onClick={(e) => {
                        add(e);
                    }}>6</button>
                </div>

                <div>
                    <button onClick={(e) => {
                        add(e);
                    }}>1</button>
                </div>
                <div>
                    <button onClick={(e) => {
                        add(e);
                    }}>2</button>
                </div>
                <div>
                    <button onClick={(e) => {
                        add(e);
                    }}>3</button>
                </div>

                <div>
                    <button onClick={(e) => {
                        add(e);
                    }}>0</button>
                </div>
                <div>
                    <button onClick={() => {
                        start.pop();
                        if (start.length === 0) {
                            start.push(0);
                        }
                        setStart([...start]);
                        setSum('');
                    }}>C</button>
                </div>
                <div>
                    <button onClick={() => {
                        setStart([0]);
                        setSum('');
                    }}>AC</button>
                </div>
            </div>
        </>
    );
}

export default App;