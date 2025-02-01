import React from 'react'
import { useNavigate } from 'react-router-dom'
// import {Link} from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Welcome to the Quiz App!</h1>
            <p>Test your Knowledge and challenge yourself with our quiz. Please
                <button className='login-btn' onClick={()=> navigate("/login")}>Login</button> to get started.</p>

                <Link to="/login">Login</Link>
        </div>
    )
}

export default Home
