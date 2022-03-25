import React from 'react';
import { FaQuestion } from 'react-icons/fa';
import { MdQuestionAnswer } from 'react-icons/md'
import './QuestionAnswer.css'

const QuestionAnswer = () => {
    return (
        <div className='question'>
            <div className='answer'>
                <h2>Question & Answer <MdQuestionAnswer className='QA-icon' /></h2>
                <p className='Q'>Q1. How React Works <FaQuestion className='question-mark' /></p>
                <p><u>Answer:</u> We know that, Dom (The Document Object Model) is slow for html and xml when we use API
                    (Application programming interface), which defines the logical stracture of documents that is accessed
                    and manupulate. So react is comming for this solution cause, react implements virtual DOM. So make it faster.
                    Over all react helps to split using component thats why work easily and faster.
                </p>

                <p className='Q'>Q2. Props Vs State <FaQuestion className='question-mark' /></p>
                <p><u>Answer</u> Props and state are both javascript object, both hold information and also influences
                    output of the render but <strong>Props</strong> basically read data only and can not modified passing data.
                    So we can say that they are imumutable. <strong>State</strong> is managed within the component, thats means changes can be
                    asynchronous, so it can be modified useing <em>this.state. </em>
                </p>

                <p className='Q'>Q3. How useState works <FaQuestion className='question-mark' /></p>
                <p><u>Answer:</u> useState is a kind of hook function, so it allows to has state variable in functional components.
                    As a example, when we pass the initial state to any function and it returns a variable withinthe current state value.
                    Then finally another function will update that value.
                </p>
            </div>
        </div>
    );
};

export default QuestionAnswer;