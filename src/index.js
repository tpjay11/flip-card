import React,{useState, useEffect}from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Clock () {
  const [time, setTime] = useState(60)
  const [count, setCount] = useState(false)
  function handleClick() {
    setCount(true)
  }
  useEffect(() => {
    console.log('useEffect');
    console.log(time)
    if (count) {
      let $timer = setInterval(() => {
        console.log(time)
        setTime(time => {
          if (time === 55) {
            clearInterval($timer);
            return time
          } else {
            return time - 1
          }
        })
      },1000)
    }
    return () => {
      console.log(123)
    }
  }, [count])
  return (
    <>
      <div>{time}</div>
      <button onClick={handleClick}>click</button>
    </>
  )
} 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
