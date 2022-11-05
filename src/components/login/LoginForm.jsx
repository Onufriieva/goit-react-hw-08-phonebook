import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from 'nanoid';
import { login } from 'redux/operations';


export default function LoginForm() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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



    return(

        <div>
            <h1>Login page</h1>
            <form onSubmit={handleSubmit}>
                <label>Email
                    <input
                      type="email"
                      name="email"
                      // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                      // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
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
                      // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                      // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
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