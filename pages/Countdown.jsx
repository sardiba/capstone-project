import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

export default function Countdown() {
  const [countdownDays, setCountdownDays] = useState("00");
  // const [countdownDays, setCountdownDays] = useState('00');
  // const [countdownDays, setCountdownDays] = useState('00');
  // const [countdownDays, setCountdownDays] = useState('00');
  let interval = useRef();
  const startCountdown = () => {
    const countdownDate = new Date("December, 30 2021").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      if (distance < 0) {
        //stop the countdown
        clearInterval(interval.current);
      } else {
        //continue the countdown
        setCountdownDays(days);
      }
    }, 1000);
  };

  useEffect(() => {
    startCountdown();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <>
      <section className="countdownContainer">
        <h2>Countdown</h2>
        <section className="countdown">
          <div>
            <p>DAY - </p> <p>{countdownDays}</p>
          </div>
          <div>
            <h3>The Wedding of Adam and Eve</h3>
          </div>
        </section>
      </section>
    </>
  );
}
