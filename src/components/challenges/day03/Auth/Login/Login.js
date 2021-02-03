import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function emailOnChange(event){
        //event.target.value
        console.log(event.target.value);
        setEmail(event.target.value)
    }

    function passwordOnChange(event){
        console.log(event.target.value)
        setPassword(event.target.value)
    }

    return ( 
        <div>
            <h3>Login</h3>
            <input 
                type ="text" 
                placeholder="login email" 
                value= {email}
                onChange ={(e)=> emailOnChange(e)}
            />
            <input 
                type ="text" 
                placeholder="login password"
                value= {password}
                onChange ={(e)=> passwordOnChange(e)}
            />
        </div>
     );
}
 
export default Login;