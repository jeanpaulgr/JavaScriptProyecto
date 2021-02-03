import React, {useState, useContext, useEffect} from 'react';
import { LoginContext } from '../../context/LoginContext';

import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';

const SignIn = () => {
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const { getLogin, loginUser, SetLoginUser, responseMessage} =  useContext(LoginContext);

    useEffect(() => {
        const currentUser =  localStorage.getItem('loginUser')
        console.log('localUser: ', currentUser)
        console.log('loginUser Logincontext: ', loginUser)
        console.log('status: ', responseMessage)

        if(currentUser){
            SetLoginUser(currentUser);
        }
    }, [loginUser])

    const handleSubmit = event => {
        event.preventDefault();
        getLogin(email, password);
    };

    const handleChange = event => {
        const { value, name } = event.target;
        if(name === 'password'){
            SetPassword(value);
        }
        if(name === 'email'){
            SetEmail(value);
        }
        console.log(name, value)
    };

    const onClick_SignOut = () => {
        localStorage.removeItem('loginUser');
        SetLoginUser('');

    }

     
        return (
                       
            <div className='sign-in'>
                <h2>Iniciar Sesión</h2>
                {loginUser === '' ? (
                    <div>
                <span>Inicia sesión con tu e-mail y password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput 
                        name='email'
                        type='email'
                        handleChange={handleChange}
                        value={email}
                        label='Email'
                        required
                    />
                    <FormInput 
                        name='password'
                        type='password'
                        handleChange={handleChange}
                        value={password}
                        label='Password'
                        required
                    />
                    <div className='buttons'>
                        <button type='submit'> Iniciar Sesión </button>
                    </div>

                </form>
                </div>
                ) : (
                <div>
                    <h3>Bienvenido {loginUser}</h3>
                    <button className="btn buttons" onClick={onClick_SignOut}>Cerrar Sesión</button>
                </div>                        
                )}
            </div>
        )
    
}

export default SignIn;