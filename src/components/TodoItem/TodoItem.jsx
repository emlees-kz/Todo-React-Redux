import { useEffect, useState } from 'react';
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



    return (
        <div className={s.mainForm}>
           <input type="text" value={commentText} onChange={handleInput}/>
        </div>
    )
}
export default TodoItem