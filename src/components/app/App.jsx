import { useSelector } from "react-redux";
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import NotFoundPage  from 'pages/notFound/NotFoundPage';
import Loader from '../loader/Loader';
import AppBar from "../appBar/AppBar";
import HomePage from "../homePage/HomePage";
import Layout from "components/layout/Layout";
import { DivBox } from "./AppStyled";
import { getIsLoading } from "redux/selectors";

const Register = lazy(() => import('../../pages/register/RegisterPage'));
const Login = lazy(() => import('../../pages/login/LoginPage'));
const Contacts = lazy(() => import('../../pages/contacts/ContactsPage'));

export function App () {
  const loader = useSelector(getIsLoading)

    return (
      <DivBox>
        <AppBar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index="/" element={<HomePage/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/contacts" element={<Contacts/>} />
            <Route path="*" element={<NotFoundPage />} />  
          </Route>      
        </Routes>    
        <HomePage/>       
        {loader && <Loader/>}
      </DivBox>
    );
  };

