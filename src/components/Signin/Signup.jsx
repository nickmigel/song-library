import react from 'react'
import axios from 'axios'

const SignUp = () => {

    const [user, setUser] = react.useState({
        username: '',
        password: ''
    })

    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Username:</label>
            <input name='username' type='text' onChange={handleChange} />
            <label htmlFor="password">Password:</label>
            <input type="password" name='password' onChange={handleChange} />

            <button type='submit'>Sign Up</button>
        </form>
    )
}

export default SignUp