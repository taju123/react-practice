import { useEffect, useRef, useState } from 'react';
import './App.css';
import Logo from './Images/Untitled-1-01.png';
function App() {
  const [timeInDays, setTimeInDays] = useState('00');
  const [timeInHours, setTimeInHours] = useState('00');
  const [timeInMinutes, setTimeInMinutes] = useState('00');
  const [timeInSeconds, setTimeInSeconds] = useState('00');

  let Interval = useRef(null);

  const StartClock = () => {
    const Cal = () => {
      const CountDownDate = new Date('Jan 31, 2022 00:00:00').getTime();
      const now = new Date().getTime();

      const TimeDistance = CountDownDate - now;
      
      const days = Math.floor((TimeDistance / (1000 * 60 * 60 * 24))) // 8,64,00,000
      const hours = Math.floor(TimeDistance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)) // 36,00,000
      const minutes = Math.floor(TimeDistance % (1000 * 60 * 60) / (1000 * 60)) // 60,000
      const seconds = Math.floor(TimeDistance % (1000 * 60) / (1000)) // 1000
      
      if (TimeDistance < 0) {
        clearInterval(Interval.current);
      } else {
        setTimeInDays(days);
        setTimeInHours(hours);
        setTimeInMinutes(minutes);
        setTimeInSeconds(seconds);
      }
    }
    Interval = setInterval(Cal, 1000);
  }

  useEffect(() => {
    StartClock();
    return() => {
      clearInterval(Interval.current);
    }
  })

  return (
    <section className="main_container">
      <div className='sub_container'>
        <img src={Logo} alt="Logo" />
        <h1 className='title'>Countdown Digital Clock</h1>
        <p>Learn How to Create Countdown Clock In Bangla</p>
        <div className="clock_main_container">
          <div className='inner_area'>
            <p>{timeInDays}</p>
            <p><small>Days</small></p>
          </div>
          <div className='inner_area'>
            <p>{timeInHours}</p>
            <p><small>Hours</small></p>
          </div>
          <div className='inner_area'>
            <p>{timeInMinutes}</p>
            <p><small>Minutes</small></p>
          </div>
          <div className='inner_area'>
            <p>{timeInSeconds}</p>
            <p><small>Seconds</small></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;