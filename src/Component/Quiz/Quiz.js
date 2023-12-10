'use client'
import React, { useState, useEffect } from 'react';
import { FaClock } from "react-icons/fa";
import "./Quizstyle.css"
import { useRouter } from 'next/navigation';
import useResult from '@/Context/ResultContext';


const Quiz = () => {
  const router = useRouter()
  const { updateCorrectPercentage } = useResult();


  const questionsData = [
    {
      "question": "What do insurance agents and cats have in common?",
      "options": [
        { "Option": "A", "Value": "They both enjoy napping." },
        { "Option": "B", "Value": "They're experts at risk assessment." },
        { "Option": "C", "Value": "They love playing with yarn." },
        { "Option": "D", "Value": "All of the above." }
      ],
      "answer": "B"
    },
    {
      "question": "What insurance policy covers damages caused by a unicorn stampede?",
      "options": [
        { "Option": "A", "Value": "Homeowners Insurance" },
        { "Option": "B", "Value": "Auto Insurance" },
        { "Option": "C", "Value": "Mythical Creature Insurance" },
        { "Option": "D", "Value": "All of the above." }
      ],
      "answer": "C"
    },
    {
      "question": "In insurance lingo, what does 'COBRA' stand for?",
      "options": [
        { "Option": "A", "Value": "A venomous snake" },
        { "Option": "B", "Value": "Consolidated Omnibus Budget Reconciliation Act" },
        { "Option": "C", "Value": "A superhero organization" },
        { "Option": "D", "Value": "None of the above." }
      ],
      "answer": "B"
    },
    {
      "question": "Which insurance type typically covers pirate attacks?",
      "options": [
        { "Option": "A", "Value": "Life Insurance" },
        { "Option": "B", "Value": "Travel Insurance" },
        { "Option": "C", "Value": "Pirate Insurance" },
        { "Option": "D", "Value": "Swashbuckler Coverage" }
      ],
      "answer": "B"
    },
    {
      "question": "What's the most common reason for auto insurance claims?",
      "options": [
        { "Option": "A", "Value": "Alien abductions" },
        { "Option": "B", "Value": "Hailstorms" },
        { "Option": "C", "Value": "Fender benders" },
        { "Option": "D", "Value": "Time-traveling mishaps" }
      ],
      "answer": "C"
    },
    {
      "question": "What's the best way to keep your insurance premium low?",
      "options": [
        { "Option": "A", "Value": "File as many claims as possible" },
        { "Option": "B", "Value": "Drive blindfolded" },
        { "Option": "C", "Value": "Bundle multiple policies" },
        { "Option": "D", "Value": "Perform magic tricks" }
      ],
      "answer": "C"
    },
    {
      "question": "Which insurance policy would be perfect for a vampire?",
      "options": [
        { "Option": "A", "Value": "Sunscreen Insurance" },
        { "Option": "B", "Value": "Life Insurance" },
        { "Option": "C", "Value": "Fang Protection Plan" },
        { "Option": "D", "Value": "All of the above." }
      ],
      "answer": "A"
    },
    {
      "question": "What do you call a group of insurance agents?",
      "options": [
        { "Option": "A", "Value": "A risk squad" },
        { "Option": "B", "Value": "A policy posse" },
        { "Option": "C", "Value": "A coverage crew" },
        { "Option": "D", "Value": "A premium party" }
      ],
      "answer": "D"
    },
    {
      "question": "What's the first thing you should do after buying a new insurance policy?",
      "options": [
        { "Option": "A", "Value": "Frame it and put it on the wall" },
        { "Option": "B", "Value": "Read it carefully" },
        { "Option": "C", "Value": "Use it as a coaster for your coffee" },
        { "Option": "D", "Value": "Recycle it immediately" }
      ],
      "answer": "B"
    },
    {
      "question": "In the insurance world, what does 'D&O' insurance stand for?",
      "options": [
        { "Option": "A", "Value": "Ducklings and Otters insurance" },
        { "Option": "B", "Value": "Directors and Officers insurance" },
        { "Option": "C", "Value": "Donuts and Oreos insurance" },
        { "Option": "D", "Value": "Drones and Octopuses insurance" }
      ],
      "answer": "B"
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questionsData.length).fill(null));
  const [timer, setTimer] = useState(30);
  const [showTimeout, setShowTimeout] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [imageSrc, setImageSrc] = useState('./assets/Question.webp');
  const [answerSelected, setAnswerSelected] = useState(false);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (!answerSelected && timer > 0) {
        setTimer(timer - 1);
      } else if (timer === 0 && !answerSelected) {
        handleTimeout();
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [timer, answerSelected]);

  const handleTimeout = () => {
    setAnswerSelected(true)
    setShowTimeout(true);
    setIsAnswerCorrect(false);
    setCorrectAnswer(questionsData[currentQuestionIndex].answer);
    setImageSrc('./assets/Lose.webp');
    setTimeout(() => {
      setShowTimeout(false);
    }, 2000);
  };

  const handleOptionSelect = (selectedOption) => {
    if (!answerSelected) {
      const correctAnswer = questionsData[currentQuestionIndex].answer;
      const isCorrect = selectedOption === correctAnswer;

      setIsAnswerCorrect(isCorrect);
      setCorrectAnswer(correctAnswer);

      const updatedUserAnswers = [...userAnswers];
      updatedUserAnswers[currentQuestionIndex] = selectedOption;
      setUserAnswers(updatedUserAnswers);

      setImageSrc(isCorrect ? './assets/Correct.webp' : './assets/Lose.webp');
      setAnswerSelected(true);
    }
  };

  const handleNextButtonClick = () => {
    setIsAnswerCorrect(null);
    setAnswerSelected(false);
    setShowResult(false);
    setImageSrc('./assets/Question.webp');
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimer(30);
      setShowTimeout(false);
    } else {
      const correctCount = userAnswers.filter(
        (userAnswer, index) => userAnswer === questionsData[index].answer
      ).length;
      const correctPercentage2 = (correctCount / questionsData.length) * 100;
      updateCorrectPercentage(correctPercentage2);
      router.push('/result');
    }
  };

  return (
    <>
      <div className='MainHead'>
        <div className="InnerSection">
          <div className="QuizSection">
            <div className="QuestionSection">
              <h4>Question {currentQuestionIndex + 1}</h4>
              <h1>{questionsData[currentQuestionIndex].question}</h1>
              <h3><FaClock /> {timer}s</h3>
            </div>
            <div className="OptionSection">
              <ul>
                {questionsData[currentQuestionIndex].options.map((option) => (
                  <li
                    key={option.Option}
                    onClick={() => handleOptionSelect(option.Option)}
                    style={{
                      cursor: answerSelected ? 'not-allowed' : 'pointer',
                      backgroundColor:
                        isAnswerCorrect !== null
                          ? option.Option === userAnswers[currentQuestionIndex]
                            ? isAnswerCorrect
                              ? '#208c71'
                              : '#e35f5f'
                            : option.Option === correctAnswer
                              ? '#208c71'
                              : 'inherit'
                          : '',
                      borderColor:
                        isAnswerCorrect !== null
                          ? option.Option === userAnswers[currentQuestionIndex]
                            ? isAnswerCorrect
                              ? '#208c71'
                              : '#e35f5f'
                            : option.Option === correctAnswer
                              ? '#208c71'
                              : 'inherit'
                          : '',
                    }}
                  >
                    {option.Value}
                  </li>
                ))}
              </ul>
            </div>
            {(!showTimeout && isAnswerCorrect !== null) && (
              <button className="NextButton" onClick={handleNextButtonClick}>
                Next
              </button>
            )}
          </div>
          <div className="Model">
            <img src={imageSrc} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;


