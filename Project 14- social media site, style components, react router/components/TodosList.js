import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"
import { MainContainer, UserProfile, UserSectionBottomComm, TodoContainer } from "./Styles"
import Loading from "./Loading";
import { FaCheck, FaTimes } from "react-icons/fa"


function TodosList() {
    const params = useParams()
    const [todos, setTodos] = useState([])

    function fetchTodos() {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(data => filterTodos(data))
            .catch(err => console.log(err))
    }

    function filterTodos(data) {
        const filteredTodos = data.filter(todo => {
            return todo.userId == params.id
        })
        setTodos(filteredTodos)
    }

    const User = () => {
        const sess = JSON.parse(sessionStorage.getItem("users"))
        return sess.filter(user => {
            return user.id == params.id
        })
    }

    function renderTodos() {

        if (!todos || todos.length === 0) {
            return <Loading />
        }
        return todos.map(todo => {
            return <TodoContainer key={todo.id} >
                <h2>{todo.title}</h2>
                {todo.completed ? <FaCheck className="icon" style={{ color: "yellowgreen" }} /> : <FaTimes style={{ color: "red" }} className="icon" />}
            </TodoContainer >
        })
    }

    useEffect(() => {
        fetchTodos()
        renderTodos()
    }, [])

    return <MainContainer>
        <UserProfile>
            <h2><Link to={`/profiles/${params.id}`} >{User()[0].name} </Link>/ Todo List</h2>
            <UserSectionBottomComm style={{ height: "90%" }} >
                {
                    renderTodos()
                }
            </UserSectionBottomComm>
        </UserProfile>
    </MainContainer>;
}

export default TodosList;
