import React, { useState } from "react";
import "./form.css";
import { NavLink } from "react-router-dom";

const Form = () => {
  const [inputFields, setInputFields] = useState([
    { text: "", no: 1 },
    { text: "", no: 2 },
    { text: "", no: 3 },
  ]);
  const [question, setQuestion] = useState("");
  const [click, setClick] = useState(0);

  const handleChange = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);

    const p = inputFields;

    let h = JSON.stringify(p);

    localStorage.setItem("val", h);
  };

  const handleClick = (e) => {
    e.preventDefault();
    let lastElement = inputFields[inputFields.length - 1];
    const ele = { text: "", no: lastElement.no + 1 };
    setInputFields([...inputFields, ele]);

    const cli = setClick(click + 1);
  };

  const clickHandler = (e) => {
    let m = click;

    const k = m + 1;

    localStorage.setItem("submit", k);
    console.log(k);
  };

  return (
    <div className="form">
      <h2>Evangel Choice</h2>
      <div className="question">
        <input
          type="text"
          placeholder="Q: Enter your question here"
          name="question"
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);

            localStorage.setItem("k", question);
            console.log(localStorage.getItem("k"));
          }}
        />
      </div>
      <div className="answer">
        <h2>Option</h2>
        {inputFields.map((text, index) => {
          return (
            <form key={index}>
              <input
                type="text"
                name="text"
                placeholder={`${text.no}`}
                value={text.text}
                onChange={(event) => handleChange(index, event)}
              />
            </form>
          );
        })}
      </div>
      <div className="button">
        <button className="option" onClick={handleClick}>
          Option
        </button>
        <NavLink to="/answer" className="answer1" onClick={clickHandler}>
          Answer
        </NavLink>
      </div>
    </div>
  );
};

export default Form;
