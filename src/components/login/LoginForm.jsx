import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from 'nanoid';
import { login } from 'redux/operations';
import { Form, Input, Button, Label, Div, Title } from "./LoginFormStyled";


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

        <Div>
             <Title>Please log in </Title>
            <Form onSubmit={handleSubmit}>
                <Label>Email
                    <Input
                      type="email"
                      name="email"
                      title="For example user@mail.com"
                      required
                      onChange={handleInputChange}
                      value={email}    
                      id={emailInputId}   
                      placeholder="user@mail.com"        
                    /> 
                </Label>
          
                <Label>Password
                    <Input
                      type="password"
                      name="password"
                      required
                      onChange={handleInputChange}
                      value={password}  
                      id={passwordInputId}  
                            
                    />  
                </Label>
              <Button type="submit">Login</Button>
            </Form>
        </Div>

    )
}