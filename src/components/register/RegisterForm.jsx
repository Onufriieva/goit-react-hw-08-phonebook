import { useState } from "react";
import { useDispatch } from "react-redux";
// import { Navigate } from "react-router-dom";
import { nanoid } from 'nanoid';
import { register } from 'redux/operations';
// import { getIsLoged } from '../../redux/selectors';
import { DivBox, TitleBox, FormBox, InputBox, Button } from "./RegisterFormStyled";


export default function RegisterForm() {
    const dispatch = useDispatch();
    // const isLoged = useSelector(getIsLoged);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const nameInputId = nanoid();
    const emailInputId = nanoid();
    const passwordInputId = nanoid();

    
    const handleInputChange = (e) => {
        const {name, value} = e.target;  
        
        switch(name) {
          case "name":
            return setName(value);
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
        dispatch(register({name, email, password}));
        setEmail('');
        setName('');
        setPassword('');
        };

        // if (isLoged) {
        //   return <Navigate to="/contacts"/>
        // }
    
    return(

        <DivBox>
            <TitleBox>Registration page</TitleBox>
            <FormBox onSubmit={handleSubmit}>
                <label>
                  <InputBox
                    type="text"
                    name="name"
                    // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={handleInputChange}
                    value={name}    
                    id={nameInputId}   
                    placeholder="Name"         
                /> 
                </label>
          
                <label>
                    <InputBox
                      type="email"
                      name="email"
                      required
                      onChange={handleInputChange}
                      value={email}    
                      id={emailInputId}  
                      placeholder="E-mail"        
                    /> 
                </label>
          
                <label>
                    <InputBox
                      type="password"
                      name="password"
                      required
                      onChange={handleInputChange}
                      value={password}  
                      id={passwordInputId} 
                      placeholder="Password"             
                    />  
                </label>
              <Button type="submit">Ok</Button>
            </FormBox>
        </DivBox>

    )
}