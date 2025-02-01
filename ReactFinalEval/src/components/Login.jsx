import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { AuthContext } from '../context/AuthCOntext'
import axios from "axios"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const { login } = useContext(AuthContext)


    //login details dalna hai
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await axios.post(`https://speckled-succinct-yellowhorn.glitch.me/login`,
                { "username": "admin", "password": "password123" }
            );
            // console.log(response)
            if(response.data.success) {
                const {token} = response.data
                login(token)
            }

        }catch(err){
            setError(err.response.data.message)
        }
    }
    if(error) return <p>"Invalid credentials", {error}</p>

    return (
        <div>
            <h2>Login</h2>
            <form onClick={handleSubmit}>
                <input type="text"
                    value={username}
                    placeholder='Username'
                    onClick={(e) => setUsername(e.target.value)} />
                <input type="password"
                        value={password}
                        placeholder='Password'
                        onClick={(e) => setPassword(e.target.value)}/>
                <input type="submit" value="Login" />
                <Link to="/login">Login</Link>
            </form>
        </div>
    )
}

export default Login
