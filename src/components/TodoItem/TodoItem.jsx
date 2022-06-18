import s from './TodoItem.module.css'

const TodoItem = ({ data }) => {
    const { text, id } = data;
    return (
        <div className={s.mainForm}>
           <input type="text" value={commentText}/>
        </div>
    )
}
export default TodoItem