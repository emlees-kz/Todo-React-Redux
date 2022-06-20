import { useState } from "react"
import s from "./AddTodoForm.module.css"
import uniqid from 'uniqid';
import { useDispatch, useSelector } from "react-redux";
import { CommentCreate } from "../../Redux/actions";
import TodoItem from "../TodoItem/TodoItem";


const AddTodoForm = () => {

    let [value, setValue] = useState("")
    const handleInput = (e) => {
        setValue(e.target.value)
    }

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        let id = uniqid()
        let completed = true
        if (value != "") {
            dispatch(CommentCreate(value, id, completed))
        }
        e.target.value = value
        setValue('')

    }

    const comments = useSelector(state => {
        let { CommentReducer } = state
        return CommentReducer.comments
    })
    const lengthTask = useSelector(state => {
        let { CommentReducer } = state;
        return CommentReducer.comments.length
    })

    return (
        <div className="todo_form">
            <div className={s.main_block_text}>
                <p className={s.main_text}>Tasks for today</p>
            </div>
            <div className={s.header_form}>
                <input className={s.value_task} type="text" value={value} onChange={handleInput} />
                <button className={s.button_add} onClick={handleSubmit}>Add</button>
            </div>

            <div className="todo_list">
                {!!comments.length && comments.map(e => {
                    return <TodoItem key={e.id} data={e} completed={e.completed} />
                })}
            </div>
            <p className={s.lengthTask_text}>Total: {lengthTask}</p>

        </div>
    )
}
export default AddTodoForm