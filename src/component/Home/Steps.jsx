import React from "react";

const Steps = () => {
  return (
    <div className="my-10">
      <ul className="steps text-neutral">
        <li className="step step-info">
          <p>2020,Jan</p>
          <p>Journy start</p>
        </li>
        <li className="step step-info">
          <p>2021,Jan</p>
          <p>Satisfied 50K users</p>
        </li>
        <li className="step step-info">
          <p>2021,Oct</p>
          <p>Deliverd over 1000 unit</p>
        </li>
        <li className="step step-info">
          <p>2022,Mar</p>
          <p>Satisfied 100K users</p>
        </li>
        <li className="step step-error" data-content="?">
          {" "}
          <p>2023,Jan</p>
          <p>Goal for 200K satisfied user</p>
        </li>
      </ul>
    </div>
  );
};

export default Steps;
