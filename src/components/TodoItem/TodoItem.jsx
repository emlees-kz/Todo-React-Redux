import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CommentDelete } from '../../Redux/CommentReducer';
import s from './TodoItem.module.css'

const TodoItem = ({ data }) => {
    const { text, id } = data;
    const [commentText, setCommentText] = useState("")

    useEffect(() => {
        if (text) {
            setCommentText(text);
        }
    }, [text]);

    const handleInput = (e) => {
        setCommentText(e.target.value);
    }
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(CommentDelete(id))
    }


    return (
        <div className={s.main_form}>
            <input className={s.input} type="text" value={commentText} onChange={handleInput} />
            <div className={s.special_buttons}>
                <div className={s.complete_button}>&#9989;</div>
                <div onClick={handleDelete} className={s.delete_button}>&#10060;</div>
            </div>
        </div>
    )
}
export default TodoItem