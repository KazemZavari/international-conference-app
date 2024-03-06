import React, { useState, useEffect } from "react";
type ConferenceDayProps = {
  day: number;
  month: number;
};
const ConferenceDay: React.FC<ConferenceDayProps> = ({ day, month }) => {
  const [state, setState] = useState({
    seconds: 0,
    hours: 0,
    minutes: 0,
    days: 0,
  });

  const currentTime = new Date();
  const currentYear = currentTime.getFullYear();

  useEffect(() => {
    setInterval(() => {
      const countdown = () => {
        const nowDate = new Date();
        let conferenceDay = new Date(currentYear, month - 1, day);
        if (nowDate > conferenceDay) {
          conferenceDay = new Date(currentYear + 1, month - 1, day);
        } else if (nowDate.getFullYear() === conferenceDay.getFullYear() + 1) {
          conferenceDay = new Date(currentYear, month - 1, day);
        }

        const currentTime = nowDate.getTime();
        const conferenceTime = conferenceDay.getTime();
        const timeRemaining = conferenceTime - currentTime;

        let seconds = Math.floor(timeRemaining / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        seconds %= 60;
        minutes %= 60;
        hours %= 24;

        setState((prevState) => ({
          ...prevState,
          seconds,
          minutes,
          hours,
          days,
        }));
      };
      countdown();
    }, 1000);
  }, [currentYear, day, month]);

  return (
    <div className=" absolute top-44 left-40 text-white flex ">
      <span className="font-bold text-[20px] justify-start ">
        Conference starts in:
      </span>
      <div className="ml-16 -mt-4">
        <span className="font-bold text-[40px]">{state.days}</span>{" "}
        <span className="font-bold text-[24px]">Days</span>
      </div>
      <div className="ml-16 -mt-4">
        <span className="font-bold text-[40px]">{state.hours}</span>{" "}
        <span className="font-bold text-[24px]">Hours</span>
      </div>
      <div className="ml-16 -mt-4">
        <span className="font-bold text-[40px]">{state.minutes}</span>{" "}
        <span className="font-bold text-[24px]">Minutes</span>
      </div>
      <div className="ml-16 -mt-4">
        <span className="font-bold text-[40px]">{state.seconds}</span>{" "}
        <span className="font-bold text-[24px]">Seconds</span>
      </div>
    </div>
  );
};

export default ConferenceDay;
