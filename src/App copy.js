import './App.css';
import React from 'react';
import { useState } from 'react';

function randomInt(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function App() {

	const[st1, setSt1] = useState();
	let block1=React.createRef();
	const[st2, setSt2] = useState(0);
	const[st3, setSt3] = useState();
	const[st4, setSt4] = useState(0);
	const[st5, setSt5] = useState();
	let out=React.createRef();
	const[st6, setSt6] = useState();
	let out6=React.createRef();
	const[st7, setSt7] = useState();
	const[st8, setSt8] = useState();
	const[st9, setSt9] = useState();
	const[st9, setSt9] = useState();
	const[st10, setSt10] = useState([]);
	let i10=React.createRef();

  function task1() {
		setSt1(block1.current.value);
  }

  function task2() {
		let currentState = st2;
		currentState++;
		setSt2(currentState);
  }

  function task3(event) {
		let st3 = event.target.value;
		console.log(event.target.value);
		setSt3(st3);
  }

  function task4() {
		let currentState = st4;
		currentState++;
		setSt4(currentState);
  }

  function task5(event) {
		if(event.target.checked) {
			out.current.textContent = event.target.value;
		} else {
			out.current.textContent = '0';
		}
  }

  function task6(event) {
		out6 = event.target.value;
		console.log(event.target.value);
		setSt6(out6);
  }

  function task7() {
		out.current.style.backgroundColor = `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})` ;
  }

  function task8(event) {
		if (!isNaN(event.key)) {
			out.current.textContent += '1';
		} else {
			out.current.textContent += '0';
		}
		setSt8(out.current.textContent);
  }

  function task9(event) {
		out.current.textContent = event.target.value;
		setSt9();
  }

  function task10() {
		let ar10 = i10.current.value;
		let newArr = [...st10, ar10];
		setSt10(newArr);
		i10.current.value='';
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
				<input type="text" ref={block1}/>
        <button onClick = {task1} className="task-1">Push</button>
        <div>{st1}</div>
      </section>

      <section>
        <h2>Task 2</h2>
        <div onMouseEnter={task2} className="task-2"></div>
        <div>{st2}</div>
      </section>

      <section>
        <h2>Task 3</h2>
        <input onInput={task3} type="text" className="task-3" />
        <div>{st3}</div>
      </section>

      <section>
        <h2>Task 4</h2>
        <button onClick={task4} className="task-4">Count</button>
        <div>{st4}</div>
      </section>
			
      <section>
        <h2>Task 5</h2>
        <input onChange={task5} type="checkbox" currentValue="55"/>
        <div ref={out}>{st5}</div>
      </section>

      <section>
        <h2>Task 6</h2>
        <select onChange={task6} className="task-6">
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div ref={out6}>{st6}</div>
      </section>

      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={out}></div>
        <button onClick={task7} className="task-7">Color</button>
        <div>{st7}</div>
      </section>

      <section>
        <h2>Task 8</h2>
        <input onKeyPress={task8} type="text" className="task-8"></input>
        <div ref={out}>{st8}</div>
      </section>

      <section>
        <h2>Task 9</h2>
        <input onInput={task9} type="range" className="task-9"></input>
        <div ref={out}>{st9}</div>
      </section>

      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={i10}></input>
        <button onClick={task10} className="task-10">Push</button>
        <div>{st10}</div>
      </section>
    </>
  );
}

export default App;
