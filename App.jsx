import React, { useState } from 'react';
import "./App.css"

function App() {
  const questions = [
    {
      question_text: 'How many seconds are there in an hour ?',
      answer_options: [
        { answer_text: '2500', isCheck: false },
        { answer_text: '6900', isCheck: false },
        { answer_text: '3600', isCheck: true },
        { answer_text: '3000', isCheck: false },
      ],
    },
    {
      question_text: 'How many MB are in one GB ?',
      answer_options: [
        { answer_text: '2500 MB', isCheck: false },
        { answer_text: '1200 MB', isCheck: false },
        { answer_text: '280MB', isCheck: false },
        { answer_text: '1000 MB', isCheck: true },
      ],
    },
    {
      question_text: '3000 and 5600 are what ?',
      answer_options: [
        { answer_text: '8600', isCheck: true },
        { answer_text: '12000', isCheck: false },
        { answer_text: '1500', isCheck: false },
        { answer_text: '6700', isCheck: false },
      ],
    },
    {
      question_text: ' Where are the Burj Khalifa ?',
      answer_options: [
        { answer_text: 'America', isCheck: false },
        { answer_text: 'Dubai', isCheck: true },
        { answer_text: 'Spain', isCheck: false },
        { answer_text: 'Ingland', isCheck: false },
      ]
    }
  ];

  const [current_question, setcurrent_question] = useState(0);
  const [show_score, setShowScore] = useState(false);
  const [score, set_score] = useState(0);

  const handleAnswer_option = (isCheck) => {

    const next_question = current_question + 1;

    isCheck && (
      set_score(score + 1)
    )

    next_question < questions.length ?
      setcurrent_question(next_question) : setShowScore(true)

  };

  return (


    <div>


      {show_score ? (
        <div className='score-div'>
          You got {score} out of {questions.length} scores
        </div>
      )
        :
        (
          <div>
            <div>
              <div className='questionNumber'>
                <span>Question : {current_question + 1}</span>/{questions.length}
              </div>
              <div className='questionallDiv'>
                <p className='questionAll'> {questions[current_question].question_text}</p>
              </div>
            </div>
            <div className='button_div'>
              {questions[current_question].answer_options.map((answerMap) => (
                <button id='buttons_all' type="button" className="btn btn-outline-dark" onClick={() => handleAnswer_option(answerMap.isCheck)}>{answerMap.answer_text}</button>
              ))}
            </div>
          </div>
        )}

    </div>
    
  );
}

export default App