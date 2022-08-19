import { useState } from 'react'

const Login = () => {
//    const [username, setUsername] =  useState('')
//    const [password, setPassword] =  useState('')

   // упростим
   const [data, setData] = useState({username: '', password: ''})

    function handleFormSubmit(event) {
        event.preventDefault()
        
        // const userData = {
        //         username: username,
        //         password: password 
        //     }

            // сокр наптисание св- вв в объектах js
            // const userData = {
            //     username,
            //     password 
            // }
        
        // console.log(userData)
        console.log(data);

        // alert(JSON.stringify(userData))

        alert(JSON.stringify(data))
    }

    function handleInputChange(text, name) {
        setData({...data, [name]: text})
    }
    

    return (
        <>
            {/* <h1>Login Form</h1>
         <form onSubmit={handleFormSubmit} >
        <label>Username:
            <input type="text" value={username} 
            onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>Password:
            <input type="password" value={password} 
            onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
            </form> */}

            <h1>Login Form</h1>
         <form onSubmit={handleFormSubmit} >
        <label>Username:
            <input type="text" value={data.username} 
            onChange={(e) => handleInputChange(e.target.value, 'username')} />
        </label>
        <label>Password:
            <input type="password" value={data.password} 
            onChange={(e) => handleInputChange(e.target.value, 'password')} />
        </label>
        <button type="submit">Login</button>
            </form>
        </>
        
    )
        
}

export default Login