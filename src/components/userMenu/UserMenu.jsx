import { useDispatch, useSelector } from "react-redux";
import { DivBox, Button, Mail } from "./UserMenuStyled";
import { getUserName } from '../../redux/selectors';


export default function UserMenu() {
    // const dispatch = useDispatch();
    const name = useSelector(getUserName);

    return(
        <DivBox>
            <p>Hello, {name}</p>
            <Mail>mango@mail.com</Mail>
            <Button type="button" >Logout</Button>
        </DivBox>
    )
};