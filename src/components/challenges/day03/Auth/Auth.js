//imrs
import React, { useState } from 'react';
import Login from './Login/Login';
import Signup from './Signup/Signup';

//sfc
const Auth = () => {

    const [showLogin, setShowLogin] = useState(true);

    function handleToggle(){
        setShowLogin(!showLogin) //short version - see long below!
        // if(showLogin === true){
        //     setShowLogin(false)
        // } else {
        //     setShowLogin(true);
        // }
    }

    return ( 
    <div>
        {showLogin == true ? <Login/> : <Signup/>}

        <button onClick = {handleToggle}>Click To Toggle</button>
    </div> 
    );

};
 
export default Auth;