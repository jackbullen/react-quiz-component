import React, { useState } from 'react';
import './Quiz.css';

type AnswerStatus = 'correct' | 'incorrect' | '';

type QuestionType = {
  questionText: string;
  answerOptions: { answerText: string; isCorrect: boolean }[];
};

// Sample data
const questions: QuestionType[] = [
  {
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
    ],
  },
  {
    questionText: 'Who is CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false },
    ],
  },
  {
    questionText: 'The iPhone was created by which company?',
    answerOptions: [
      { answerText: 'Apple', isCorrect: true },
      { answerText: 'Intel', isCorrect: false },
      { answerText: 'Amazon', isCorrect: false },
      { answerText: 'Microsoft', isCorrect: false },
    ],
  },
  {
    questionText: 'How many Harry Potter books are there?',
    answerOptions: [
      { answerText: '1', isCorrect: false },
      { answerText: '4', isCorrect: false },
      { answerText: '6', isCorrect: false },
      { answerText: '7', isCorrect: true },
    ],
  },

  {
    questionText: 'How many days are in a year?',
    answerOptions: [
      { answerText: '365', isCorrect: true },
      { answerText: '364', isCorrect: false },
      { answerText: '366', isCorrect: false },
      { answerText: '367', isCorrect: false },
    ],
  },
  {
    questionText: 'How many days are in a leap year?',
    answerOptions: [
      { answerText: '365', isCorrect: false },
      { answerText: '364', isCorrect: false },
      { answerText: '366', isCorrect: true },
      { answerText: '367', isCorrect: false },
    ],
  },
  {
    questionText: 'How many days are in a week?',
    answerOptions: [
      { answerText: '5', isCorrect: false },
      { answerText: '6', isCorrect: false },
      { answerText: '7', isCorrect: true },
      { answerText: '8', isCorrect: false },
    ],
  },
  {
    questionText: 'How many days are in a month?',
    answerOptions: [
      { answerText: '28', isCorrect: false },
      { answerText: '29', isCorrect: false },
      { answerText: '30', isCorrect: false },
      { answerText: '31', isCorrect: true },
    ],
  },
  {
    questionText: 'How many weeks are in a year?',
    answerOptions: [
      { answerText: '52', isCorrect: true },
      { answerText: '53', isCorrect: false },
      { answerText: '54', isCorrect: false },
      { answerText: '55', isCorrect: false },
    ],
  },
];

// Quiz component
const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [answerStatus, setAnswerStatus] = useState<AnswerStatus>('')
  const handleAnswerButtonClick = (isCorrect: boolean) => {
    const status = isCorrect ? 'correct' : 'incorrect';
    setAnswerStatus(status);
    setTimeout(() => {
        setAnswerStatus('');
        if (isCorrect) {
            setScore(score + 1);
          }
      
          const nextQuestion = currentQuestion + 1;
          if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
          } else {
            setShowScore(true);
          }
          
            
    }, 1000)
  };

  return (
    <div className='quiz'>
      {showScore ? (
        <div className='score'>You scored {score} out of {questions.length}</div>
      ) : (
        <div>
          <div className='question-text'>{questions[currentQuestion].questionText}</div>
          <div>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <button
                className={`answer-button ${answerStatus !== '' ? (answerOption.isCorrect ? 'correct' : 'incorrect') : ''}`}
                    onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
                    key={index}
                >
                    {answerOption.answerText}
                </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;