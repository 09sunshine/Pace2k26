import React, { useState, useEffect } from "react";

const COUNTDOWN_TARGET = new Date("2026-02-26T23:59:59");

const getTimeLeft = () => {
  const totalTimeLeft = COUNTDOWN_TARGET - new Date();
  return {
    days: Math.max(0, Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24))),
    hours: Math.max(0, Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24)),
    minutes: Math.max(0, Math.floor((totalTimeLeft / (1000 * 60)) % 60)),
    seconds: Math.max(0, Math.floor((totalTimeLeft / 1000) % 60)),
  };
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="font-[Genos] bg-black text-white w-full overflow-x-hidden py-20 flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-2">Pace 2K26</h2>
      <h3 className="text-2xl sm:text-5xl font-bold mb-8 text-center">
        26 February 2026
      </h3>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-10
        border-2 border-blue-200/60 bg-black/40 backdrop-blur-md
        rounded-xl px-6 py-8 shadow-lg max-w-[95%]">

        <TimeBox label="Days" value={timeLeft.days} />
        <TimeBox label="Hours" value={timeLeft.hours} />
        <TimeBox label="Minutes" value={timeLeft.minutes} />
        <TimeBox label="Seconds" value={timeLeft.seconds} highlight />
      </div>
    </section>
  );
};

const TimeBox = ({ label, value, highlight }) => (
  <div className={`flex flex-col items-center ${highlight ? "text-yellow-400" : "text-white"}`}>
    <div className="text-4xl sm:text-6xl font-bold">
      {String(value).padStart(2, "0")}
    </div>
    <div className="text-sm sm:text-lg mt-1">{label}</div>
  </div>
);

export default Countdown;
