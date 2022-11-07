import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from 'nanoid';
import { login } from 'redux/operations';
// import { getIsLoged } from '../../redux/selectors';
// import { Navigate } from "react-router-dom";



export default function LoginForm() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const isLoged = useSelector(getIsLoged);

    const emailInputId = nanoid();
    const passwordInputId = nanoid();

    
    const handleInputChange = (e) => {
        const {name, value} = e.target;  
        
        switch(name) {
          case "email":
            return setEmail(value); 
          case "password":
            return setPassword(value); 
          default:
          return;
        }
      };

 

    const handleSubmit = (e) => {
        e.preventDefault();        
        dispatch(login({email, password}));
        setEmail('');
        setPassword('');
    };


    // if (isLoged) {
    //   return <Navigate to="/contacts"/>
    // }


    return(

        <div>
             <h1>Please log in first</h1>
            <form onSubmit={handleSubmit}>
                <label>Email
                    <input
                      type="email"
                      name="email"
                      title="For example user@mail.com"
                      required
                      onChange={handleInputChange}
                      value={email}    
                      id={emailInputId}          
                    /> 
                </label>
          
                <label>Password
                    <input
                      type="password"
                      name="password"
                      required
                      onChange={handleInputChange}
                      value={password}  
                      id={passwordInputId}            
                    />  
                </label>
              <button type="submit">Login</button>
            </form>
        </div>

    )
}