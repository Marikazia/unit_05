import './App.css';
import React from 'react';
import { useState } from 'react';

function randomInt(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function App() {

	// const[st1, setSt1] = useState();
	// let block1=React.createRef();
  // function task1() {
	// 	setSt1(block1.current.value);
  // }

	// const[st2, setSt2] = useState(0);
  // function task2() {
	// 	let currentState = st2;
	// 	currentState++;
	// 	setSt2(currentState);
  // }

	// const[st3, setSt3] = useState();
  // function task3(event) {
		
	// 	let st3 = event.target.value;

	// 	console.log(event.target.value);
		
	// 	setSt3(st3);

  // }

	// const[st4, setSt4] = useState(0);
  // function task4() {
	// 	let currentState = st4;
	// 	currentState++;
	// 	setSt4(currentState);
  // }

	// const[st5, setSt5] = useState();
	// let out=React.createRef();
  // function task5(event) {
	// 	if(event.target.checked) {
	// 		out.current.textContent = event.target.value;

	// 	} else {
	// 		out.current.textContent = '0';
	// 	}
	// 	// setSt5(out.current.value);

	// 	// let out5 = out.current.value;

  //   // if (out.current.checked) {
  //   //   setSt5(out5);
  //   // }
  //   // else {
  //   //   out5 = '0';
  //   //   setSt5(out5);
  //   // }

	// 	// // --------------
	// 	// let v5 = st5;
	// 	// if(event.target.checked) {
	// 	// 	v5 = event.target.value;
	// 	// } else {
	// 	// 	v5 = '0';
	// 	// }
	// 	// setSt5(v5);
	// 	// -------------
  // }

	// const[st6, setSt6] = useState();
	// let out6=React.createRef();
  // function task6(event) {
	// 	out6 = event.target.value;
	// 	console.log(event.target.value);

	// 	setSt6(out6);
  // }

	// const[st7, setSt7] = useState();
	// let out=React.createRef();
  // function task7() {
	// 	out.current.style.backgroundColor = `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})` ;
  // }

	// const[st8, setSt8] = useState();
	// let out=React.createRef();
  // function task8(event) {
	// 	// if(event.target.value == NaN) {
	// 	// 	out.textContent = '0';
	// 	// } else {
	// 	// 	out.textContent = '1';
	// 	// }
	// 	if (!isNaN(event.key)) {
	// 		out.current.textContent += '1';
	// 	} else {
	// 		out.current.textContent += '0';
	// 	}
	// 	setSt8(out.current.textContent);
  // }

	// const[st9, setSt9] = useState();
	// let out=React.createRef();
  // function task9(event) {
	// 	out.current.textContent = event.target.value;
	// 	setSt9();
  // }

  function task10() {

  }

  return (
    <>
      <h1>События</h1>
      {/* <section>
        <h2>Task 1</h2>
				<input type="text" ref={block1}/>
        <button onClick = {task1} className="task-1">Push</button>
        <div>{st1}</div>
      </section> */}

      {/* <section>
        <h2>Task 2</h2>
        <div onMouseEnter={task2} className="task-2"></div>
        <div>{st2}</div>
      </section> */}

      {/* <section>
        <h2>Task 3</h2>
        <input onInput={task3} type="text" className="task-3" />
        <div>{st3}</div>
      </section> */}

      {/* <section>
        <h2>Task 4</h2>
        <button onClick={task4} className="task-4">Count</button>
        <div>{st4}</div>
      </section> */}
			
      {/* <section>
        <h2>Task 5</h2>
        <input onChange={task5} type="checkbox" currentValue="55"/>
        <div ref={out}>{st5}</div>
      </section> */}

      {/* <section>
        <h2>Task 6</h2>
        <select onChange={task6} className="task-6">
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div ref={out6}>{st6}</div>
      </section> */}

      {/* <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={out}></div>
        <button onClick={task7} className="task-7">Color</button>
        <div>{st7}</div>
      </section> */}

      {/* <section>
        <h2>Task 8</h2>
        <input onKeyPress={task8} type="text" className="task-8"></input>
        <div ref={out}>{st8}</div>
      </section> */}

      {/* <section>
        <h2>Task 9</h2>
        <input onInput={task9} type="range" className="task-9"></input>
        <div ref={out}>{st9}</div>
      </section> */}

      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={i10}></input>
        <button onClick={task10} className="task-10">Push</button>
        <div ref={out}>Тут выводим - форма вывода любая!</div>
      </section>
    </>
  );
}

export default App;
