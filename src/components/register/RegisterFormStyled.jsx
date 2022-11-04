import styled from "@emotion/styled";


export const DivBox = styled.div`
padding-top: 64px;
text-align: center;
`

export const FormBox = styled.form`
padding: 16px;
width: 500px;
display: flex;
flex-direction: column;
`;

export const TitleBox = styled.h2`
margin: 0px;
margin-bottom: 8px;
margin-left: auto;
margin-right: auto;
`;

export const Button = styled.button`
display: block;   
min-width: 200px;
padding: 10px 55px 10px 56px;
margin-top: 16px;
margin-left: auto;
margin-right: auto; 
   
  
    border-radius: 4px;   
    border: 0;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);

   
   font-weight: 700;
   font-size: 16px;
   line-height: 1.88;
   letter-spacing: 0.06em;
   text-align: center;

   background-color: rgba(33, 150, 243, 1);
   color: rgba(255, 255, 255, 1);
   cursor: pointer;

   transition-property: background;
   transition-duration: 250ms;
   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);


   &:hover,
   &:focus {
       color: var(--button-link-color);
    }
}
`;


export const LabelBox = styled.label`
font-size: 24px;
`;

export const InputBox = styled.input`
min-width: 360px;
margin: 0;
margin-bottom: 8px;
padding: 12px 15px 12px 42px;
font-size: 20px;
border: 1px solid;
border-color: rgba(33, 33, 33, 0.2);
border-radius: 4px;
outline: transparent;

&:hover,
&:focus-within {
border-color: var(--button-link-color);
`;