import './TodoApp.css'
import {BrowserRouter, Link, Routes, Route, useNavigate, useParams} from "react-router-dom";
import { useState } from 'react'

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
                <FooterComponent/>
            </BrowserRouter>
        </div>
    )
}

function LoginComponent(){

    const [username, setUsername] = useState('hyeyeon')
    const [password, setPassword] = useState('');

    const [showSuccess, setShowSuccess] = useState(false)
    const [showError, setShowError] = useState(false)

    const navigate = useNavigate();

    function handleUsernameChange(e){
        setUsername(e.target.value)
    }

    function handlePasswordChange(e){
        console.log(e.target.value)
        setPassword(e.target.value)
    }

    function handleSubmit(){
        if(username==='hyeyeon' && password==='1234'){
            setShowSuccess(true)
            setShowError(false)
            navigate(`/welcome/${username}`)
        } else{
            setShowSuccess(false)
            setShowError(true)
        }
    }

    return(
        <div className="login">
            <h1>Login</h1>
            {showSuccess && <div className="successMessage">인증 성공</div>}
            {showError && <div className="errorMessage">인증 실패. 자격 증명(credential)을 확인하세요.</div>}
            <div className="loginForm">
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

function WelcomeComponent(){

    const {username} = useParams()

    return(
        <div className="Welcome">
            <h1>Welcome! {username}</h1>
            <div>
                <Link to="/todo">할 일 목록으로 이동</Link>
            </div>
        </div>
    )
}

function ErrorComponent(){
    return(
        <div className="Error">
            <h1>에러 발생</h1>
            <div>
                문제를 해결 중에 있습니다.
            </div>
        </div>
    )
}

function ListTodoComponent(){

    const today = new Date();
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay());

    const todos = [
        {id: 1, description: 'Spring 공부하기', done: false, targetDate:targetDate},
        {id: 2, description: 'React 공부하기', done: false, targetDate:targetDate},
        {id: 3, description: 'Docker 공부하기', done: false, targetDate:targetDate},
    ]

    return(
        <div className="container">
            <h1>할 일 목록</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>설명</td>
                            <td>완료여부</td>
                            <td>목표일</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toDateString()}</td>                                    
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function HeaderComponent(){
    return(
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://hyeyeon-ii.tistory.com/">YeonDo</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5"><Link className="nav-link" to="/welcome/yeondo">Home</Link></li>
                                <li className="nav-item fs-5"><Link className="nav-link" to="/todo">Todo</Link></li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>
                            <li className="nav-item fs-5"><Link className="nav-link" to="/logout">Logout</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

function FooterComponent(){
    return(
        <footer className="footer">
            <div className="container">
                Footer
            </div>
        </footer>
    )
}

function LogoutComponent(){
    return(
        <div className="Error">
            <h1>로그아웃 되었습니다.</h1>
            <div>
                Todo 앱을 이용해주셔서 감사합니다.
            </div>
        </div>
    )
}