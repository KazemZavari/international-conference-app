import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { VariantsLeft, VariantsRight } from "../../Motions/HomePageMotion";

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

  const DateContainerCSS = `"group-hover:animate-pulse rounded-s-full rounded-b-full sm:rounded-full 
  border-red-400
  dark:border-gray-300 ml-12 xl:ml-12 lg:ml-7 md:ml-3 sm:ml-1 xs:ml-2 xs:-mt-1 -mt-10 xl:-mt-5 lg:-mt-3
   md:-mt-2 border-dashed border-2 p-5 xl:p-4 lg:p-3 md:p-2 sm:p-1"`;

  const numberCSS = `"font-bold text-[2.2rem] xl:text-[1.5rem] lg:text-[1.2rem] md:text-[1rem] 
  sm:text-[.9rem] "`;
  const stringCSS = `"font-bold text-[24px] xl:text-[20px] lg:text-[17px] md:text-[14px]
   sm:text-[13px]"`;
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
    <div
      className=" absolute top-48 xl:top-44 lg:top-36 md:top-28 sm:top-24 xs:top-16 2xl:left-28 3xl:ml-60 
    xl:left-28 xl:ml-10 sm:left-5 xs:left-0 lg:ml-5 md:ml-3 sm:ml-1 text-white flex "
    >
      <motion.span
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        variants={VariantsLeft}
        className="font-bold text-[20px] xl:text-[17px] md:text-[14px] sm:text-[11px] justify-start
         xs:hidden sm:-mt-5 md:-ml-5 "
      >
        Conference starts in:
      </motion.span>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        variants={VariantsLeft}
        className={DateContainerCSS}
      >
        <span className={numberCSS}>{state.days}</span>{" "}
        <span className={stringCSS}>Days</span>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        variants={VariantsLeft}
        className={DateContainerCSS}
      >
        <span className={numberCSS}>{state.hours}</span>{" "}
        <span className={stringCSS}>Hours</span>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.6 }}
        variants={VariantsRight}
        className={DateContainerCSS}
      >
        <span className={numberCSS}>{state.minutes}</span>{" "}
        <span className={stringCSS}>Minutes</span>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.6 }}
        variants={VariantsRight}
        className={DateContainerCSS}
      >
        <span className={numberCSS}>{state.seconds}</span>{" "}
        <span className={stringCSS}>Seconds</span>
      </motion.div>
    </div>
  );
};

export default ConferenceDay;
