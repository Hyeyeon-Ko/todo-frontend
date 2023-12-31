export default function ListTodoComponent(){

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