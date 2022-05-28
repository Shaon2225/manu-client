import React from "react";
import CountUp from 'react-countup';

const Summary = () => {
    const date = new Date();
    const newDate=  `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
  return (
    <div className="w-full mx-auto my-16 flex justify-center">
        <div className="stats stats-vertical lg:stats-horizontal shadow bg-neutral w-full mx-24 overflow-x-hidden">
      <div className="stat text-center">
        <div className="stat-title">Total happy customer</div>
        <div className="stat-value"><CountUp start={75} end={150} duration={1.75} delay={0}></CountUp>K</div>
        <div className="stat-desc">Jan 1st - {newDate}</div>
      </div>

      <div className="stat text-center">
        <div className="stat-title">Last two month new customer</div>
        <div className="stat-value"><CountUp start={40000} end={50000} duration={1.75} delay={0}></CountUp></div>
        <div className="stat-desc">↗︎ 50000 (22%)</div>
      </div>

      <div className="stat text-center">
        <div className="stat-title">Total product sold</div>
        <div className="stat-value"><CountUp start={5} end={15} duration={1.75} delay={0}></CountUp>K</div>
        <div className="stat-desc">↗︎ 90 (14%)</div>
      </div>
      <div className="stat text-center">
        <div className="stat-title">Total Anudal revinew</div>
        <div className="stat-value"><CountUp start={5} end={15} duration={1.75} delay={0}></CountUp>M</div>
        <div className="stat-desc">↗︎ 90 (14%)</div>
      </div>
    </div>
    </div>
  );
};

export default Summary;
