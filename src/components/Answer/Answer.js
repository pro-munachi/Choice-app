import React, { useEffect, useState } from 'react'
import './answer.css'
import { NavLink } from 'react-router-dom'

const Answer = () => {
  const [answer] = useState(JSON.parse(localStorage.getItem('val')))
  const [indexe, setIndexe] = useState()

  const reload = () => {
    const inde = Math.floor(Math.random() * answer.length)
    setIndexe(inde)
    // console.log(indexe)
  }

  useEffect(() => {
    reload()
  }, [reload])

  // const ind = Math.floor(Math.random() * answer.length)
  // console.log(ind)

  return (
    <div className='container'>
      <div>
        <h2>Question</h2>
        {localStorage.getItem('k').length === 0 ? (
          <h3> No Question asked</h3>
        ) : (
          <h3>{localStorage.getItem('k')} ?</h3>
        )}
      </div>
      <div>
        <h2>Answers</h2>
        {answer.length === 0 ? (
          <div>Your answers are not given</div>
        ) : (
          <div>
            {answer.map((item, index) => {
              return (
                <div key={index} className='ul'>
                  <div className='ind'>{index}</div>
                  <div className={index % 2 === 0 ? 'me' : 'you'}>
                    <p className={indexe === index ? 'color' : 'blue'}>
                      {item.text}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
      <div className='but'>
        <button onClick={reload}>Ask Again</button>

        <NavLink to='/'>
          <button>Ask another random question</button>
        </NavLink>
      </div>
    </div>
  )
}

export default Answer
