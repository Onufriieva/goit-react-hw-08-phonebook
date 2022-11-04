import { List, ListItem, Button, LinkStyled } from "./AuthNavStyled";

    
export default function AuthNav() {
    return(
        <div>
            <List>
                <ListItem>
                    <LinkStyled to="/login">
                        <Button type='button'>Login</Button>
                    </LinkStyled>
                </ListItem>
                <ListItem>
                    <LinkStyled to="/register">
                        <Button type='button'>Register</Button>
                    </LinkStyled> 
                </ListItem>
            </List>
        </div>
    )
};