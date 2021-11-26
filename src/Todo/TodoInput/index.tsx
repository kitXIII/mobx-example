import { VFC, useState, ChangeEvent, FormEvent } from 'react';
import TodoStore from '../../stores/TodoStore';
import styles from './TodoInput.module.css';

const TodoIndex: VFC<{ todos: TodoStore }> = ({ todos }) => {
    const [newTodo, setNewTodo] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        todos.add(newTodo);
        setNewTodo('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles['todo-input-group']}>
            <input value={newTodo} onChange={handleChange} />
            <button type='submit'>Add todo</button>
        </form>
    );
};

export default TodoIndex;
