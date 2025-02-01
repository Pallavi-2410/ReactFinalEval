import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'

const QuizItem = () => {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get(`https://speckled-succinct-yellowhorn.glitch.me/questions/${id}`)
                setQuestions(response.data);
                setLoading(false)
            } catch (err) {
                setError(err.response.data.message)
            }
        }
        fetchQuestions()
    }, [id])

    if (error) return <p>"Error", {error}</p>
    if (loading) return <p>Loading...</p>
    return (
        <div>     
            <h2>Q.no: {id} {questions.question}</h2>
            <div className='options'>
                <input type="radio" id={questions.question.id} name={questions.question} />
                <label for={options}>{questions.options}</label>
            </div>
            <p>{questions.answer}</p>
        </div>
    )
}

export default QuizItem
