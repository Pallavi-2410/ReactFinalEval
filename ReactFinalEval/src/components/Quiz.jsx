import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'

const Quiz = () => {

    const [questions, setQuestions] = useState([]);
    const [submit, setSubmit] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    
    useEffect(() => {
        const fetchQuestions = async() => {
            try{
                const response = await axios.get(`https://speckled-succinct-yellowhorn.glitch.me/questions`)
                setQuestions(response.data);
                setLoading(false)
            }catch(err) {
                setError(err.response.data.message)
            }
        }
        fetchQuestions()
    },[])

    useEffect(()=> {
        const submitQuestions = async() => {
            try{
                const response = await axios.post(`https://speckled-succinct-yellowhorn.glitch.me/submit`)
                setSubmit(response.data)
                }catch(err) {
                setError(err.response.data.message)
            }
        }
        submitQuestions()
    },[])

    if (error) return <p>"Error", {error}</p>
    if (loading) return <p>Loading...</p>
    return (
        <div>
            <h1>Take the Quiz</h1>
            {questions.map((question) => (
                <div key={question.id} className='question'>
                    <h2>Q.no: {id} {question}</h2>
                    <div className='options'>
                        <input type="radio" id={question.id} name={question}/>
                        <label for = {options}>{options}</label>
                    </div>
                
                    <button onClick={handlebutton}></button>

                    {/* show answer on click it should convert to hide answer and give the correct answer */}
                </div>
            ))}

        </div>
    )
}

export default Quiz
