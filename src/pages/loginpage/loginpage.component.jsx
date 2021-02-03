import React, { useContext } from 'react'

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import '../loginpage/loginpage.styles.scss';
import {LoginContext} from '../../context/LoginContext'

const LoginPage = () => {
    const { loginUser, getLogin, responseMessage, SetResponseMessage, responseEstado, SetResponseEstado } = useContext(LoginContext);
   
    return(


        <div>
                <h1>LOGIN PAGE</h1>
                <div className='login-page'>
                    <SignIn/>
                    <SignUp />
                </div>
            </div>
    )
            
}
    
export default LoginPage;