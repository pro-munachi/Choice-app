import React, { useState } from "react";
import "./answer.css";
import { NavLink } from "react-router-dom";

const Answer = () => {
  const [answer] = useState(JSON.parse(localStorage.getItem("val")));

  return (
    <div className="container">
      <div>
        <h2>Question</h2>
        {localStorage.getItem("k").length === 0 ? (
          <h3> No Question asked</h3>
        ) : (
          <h3>{localStorage.getItem("k")}</h3>
        )}
      </div>
      <div>
        <h2>Answers</h2>
        {answer.length === 0 ? (
          <div>Your answers are not given</div>
        ) : (
          <div>
            {answer.map((item) => {
              return (
                <ul key={item.no}>
                  <li>{item.text}</li>
                </ul>
              );
            })}
          </div>
        )}
      </div>
      <div>
        <NavLink to="/">
          <button>Ask Again</button>
        </NavLink>
        <p>It was submitted {localStorage.getItem("submit")} times</p>
      </div>
    </div>
  );
};

export default Answer;
