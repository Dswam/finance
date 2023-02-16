import React, { useState } from 'react'
import { question } from '../api'
import "../cssComponent/faq.css"
const Faq = () => {
  const [questions, setQuestions] = useState(
    question.map((q) => ({ ...q, isOpen: false }))
  );

  const toggleQuestion = (index) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q, i) =>
        i === index ? { ...q, isOpen: !q.isOpen } : q
      )
    );
  };

  return (
    <div className='container faqr'>
      <div className='row '>
        {questions.map((q, i) => (
          <div className='col-lg-6 faqcol8' key={i}>
            <div className='faqcol'>
              <p onClick={() => toggleQuestion(i)}>{q.isOpen ? '-' : '+'}</p>
              <h5>{q.question}</h5>
            </div>
            {q.isOpen && <p>{q.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;