import UserMenu from "../userMenu/UserMenu";
import Navigation from "../navigation/Navigation";
import AuthNav from "../authNav/AuthNav";
import { Header, BoxHeader, TitleBox } from "./AppBarStyled";



export default function AppBar() {
    return(
        <Header>
            <BoxHeader>
            <TitleBox>Phonebook</TitleBox>
               <Navigation />
               <AuthNav/>
               <UserMenu/>
            </BoxHeader>
        </Header>
    )
}