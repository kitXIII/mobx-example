import { VFC, useState, ChangeEvent } from 'react';
import TodoStore from '../../stores/TodoStore';
import styles from './TodoInput.module.css';

const TodoIndex: VFC<{ todos: TodoStore }> = ({ todos }) => {
    const [newTodo, setNewTodo] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    };

    const handleSubmit = () => {
        todos.add(newTodo);
        setNewTodo('');
    }

    return (
        <div className={styles['todo-input-group']}>
            <input value={newTodo} onChange={handleChange} />
            <button onClick={handleSubmit}>Add todo</button>
        </div>
    );
};

export default TodoIndex;
