import styled from "@emotion/styled";

export const DivBox = styled.div`
display: flex;
align-items: center;
`

export const Button = styled.button`
    
    display: inline-block;
    padding: 5px 16px;
    min-width: 101px;
   
  
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

export const Mail = styled.p`
margin: 0px;
margin-right: 8px;
font-size: 16px;
font-weight: 700;
`