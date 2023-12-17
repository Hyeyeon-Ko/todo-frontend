import './TodoApp.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LogoutComponent from "./LogoutComponent";
import HeaderComponent from "./HeaderComponent";
import ListTodoComponent from "./ListTodoComponent";
import ErrorComponent from "./ErrorComponent";
import WelcomeComponent from "./WelcomeComponent";
import LoginComponent from "./LoginComponent";

export default function TodoApp(){
    return(
        <div className="TodoApp">
            <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                    <Route path='/' element={<LoginComponent/>}/>
                    <Route path='/login' element={<LoginComponent/>}/>
                    <Route path='/welcome/:username' element={<WelcomeComponent/>}/>
                    <Route path='/todo' element={<ListTodoComponent/>}/>
                    <Route path='/logout' element={<LogoutComponent/>}/>
                    <Route path='/*' element={<ErrorComponent/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}