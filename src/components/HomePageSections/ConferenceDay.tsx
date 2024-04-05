import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { VariantsLeft, VariantsRight } from "../../assets/Motions/HomePageMotion";

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
    <div className=" absolute top-48 left-28 3xl:ml-20 text-white flex ">
      <motion.span
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        variants={VariantsLeft}
        className="font-bold text-[20px] justify-start "
      >
        Conference starts in:
      </motion.span>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        variants={VariantsLeft}
        className=" group-hover:animate-pulse ml-12 -mt-10  border-dashed border-2 p-5 rounded-e-full rounded-b-full
         border-red-400 dark:border-gray-300" 
      >
        <span className="font-bold text-[40px]">{state.days}</span>{" "}
        <span className="font-bold text-[24px]">Days</span>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        variants={VariantsLeft}
        className=" group-hover:animate-pulse ml-12 -mt-10  border-dashed border-2  p-5
         rounded-e-full rounded-t-full border-red-400 dark:border-gray-300"
      >
        <span className="font-bold text-[40px]">{state.hours}</span>{" "}
        <span className="font-bold text-[24px]">Hours</span>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.6 }}
        variants={VariantsRight}
        className="group-hover:animate-pulse ml-12 -mt-10  border-dashed border-2 border-red-400 dark:border-gray-300
         p-5 rounded-s-full rounded-b-full"
      >
        <span className="font-bold text-[40px]">{state.minutes}</span>{" "}
        <span className="font-bold text-[24px]">Minutes</span>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.6 }}
        variants={VariantsRight}
        className="group-hover:animate-pulse ml-12 -mt-10  border-dashed border-2 border-red-400 dark:border-gray-300 p-5 rounded-t-full rounded-s-full"
      >
        <span className="font-bold text-[40px]">{state.seconds}</span>{" "}
        <span className="font-bold text-[24px]">Seconds</span>
      </motion.div>
    </div>
  );
};

export default ConferenceDay;
