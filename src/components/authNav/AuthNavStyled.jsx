import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
`;

export const ListItem = styled.li`
    padding: 0;
    margin-right: 16px;

    &:last-child {
        margin-right: 0;
    }
`;


 export const LinkStyled = styled(NavLink)`
    display: block;
    padding: 0px 0;
  
    color: var(--title-font);
    letter-spacing: 0.02em;
    text-decoration: none;

    transition-property: color;
    transition-duration: 250ms;
    transition-timing-function: var(--сubic);
    `;

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