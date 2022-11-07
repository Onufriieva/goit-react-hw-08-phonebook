import { useSelector } from "react-redux";
import UserMenu from "../userMenu/UserMenu";
import Navigation from "../navigation/Navigation";
import AuthNav from "../authNav/AuthNav";
import { Header, BoxHeader, TitleBox } from "./AppBarStyled";
import { getIsLoged } from "redux/selectors";



export default function AppBar() {
    const isLogin = useSelector(getIsLoged)
    console.log(isLogin)
    
    return(
        <Header>
            <BoxHeader>
            <TitleBox>Phonebook</TitleBox>
               <Navigation />
               {isLogin ?   <UserMenu/> :   <AuthNav/>}            
            </BoxHeader>
        </Header>
    )
}