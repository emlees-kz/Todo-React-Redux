import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CommentComplete, CommentDelete } from '../../Redux/actions';
import s from './TodoItem.module.css'

const TodoItem = ({ data }) => {
    const { id, text, completed } = data;
    const [commentText, setCommentText] = useState("")
    useEffect(() => {
        if (text) {
            setCommentText(text);
        }
    }, [text]);
    const handleInput = (e) => setCommentText(e.target.value);


    const dispatch = useDispatch()
    const handleDelete = () => dispatch(CommentDelete(id))
    const handleComplete = () => {
        let { completed } = data;
        let completedFalse 
        (completed) ? completedFalse = false : completedFalse = true
        dispatch(CommentComplete(text, id, completedFalse))
    }


    const completedState = useSelector(state => {
        let {completed} = data;
        return completed
    })
    
    const classNameInput = () => (completedState === false) ? "not_Completed" : "completed"


    return (
        <div className={s.main_form}>
            <input className={classNameInput()} type="text" value={commentText} onChange={handleInput} readOnly/>
            <div className={s.special_buttons}>
                <div onClick={handleComplete}className={s.complete_button}>&#9989;</div>
                <div onClick={handleDelete} className={s.delete_button}>&#10060;</div>
            </div>
        </div>
    )
}
export default TodoItem