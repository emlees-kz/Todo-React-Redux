import { useState } from "react"
import s from "./AddTodoForm.module.css"
import uniqid from 'uniqid';
import { useDispatch, useSelector } from "react-redux";
import { CommentCreate } from "../../Redux/CommentReducer";
import TodoItem from "../TodoItem/TodoItem";


const AddTodoForm = () => {

    let [value, setVslue] = useState("")
    const handleInput = (e) => {
        setVslue(e.target.value)
    }

    const dispatch = useDispatch();

    const handleSubmit = () => {
        let id = uniqid()
        dispatch(CommentCreate(value, id))
    }

    const comments = useSelector(state => {
        let { CommentReducer } = state
        return CommentReducer.comments
    })


    return (
        <div className="todo_form">
            <p className={s.main_text}>Todo list</p>
            <div className={s.main_form}>
                <input type="text" value={value} onChange={handleInput} />
                <button onClick={handleSubmit}>Add</button>
            </div>
            <div className="todo_list">
                {!comments.length && comments.map(e => {
                    return <TodoItem id={e.id} data={e} />
                })}
            </div>
        </div>
    )
}
export default AddTodoForm