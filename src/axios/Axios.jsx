import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Axios() {
  const [question, setQuestion] = useState([]);
  const [error, setError] = useState('');
  const [isloading, setIsloading] = useState(false);

  const getData = async () => {
    setIsloading(true);
    try {
      const res = await axios.get(
        'https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple'
      );
      setIsloading(false);
      setQuestion(res.data.results);
      console.log(res.data.results);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mt-5 text-center">
      <h4>{error}</h4>
      {isloading ? (
        <>
          <span className="spinner-border spinner-border-sm" role="status" />
          <span className="fs-4 fw-bold">Loading questions</span>
        </>
      ) : (
        <>
          <ul className="text-start">
            {question.map((quest, index) => (
              <li key={index}>
                {quest.question}
                <div>
                  Options: {quest.correct_answer},
                  {quest.incorrect_answers.map((incor, index) => (
                    <span className="mx-2" key={index}>
                      {incor},
                    </span>
                  ))}
                </div>
                <div> Answers: {quest.correct_answer}</div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
