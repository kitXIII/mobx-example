import { VFC, FormEvent } from 'react';
import TodoStore from '../../stores/TodoStore';
import styles from './TodoInput.module.css';

const TodoIndex: VFC<{ todos: TodoStore }> = ({ todos }) => {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const formEl = e.target as HTMLFormElement;
        const formData = new FormData(formEl);
        const value = String(formData.get('todo-input') || '');

        todos.add(value);
        formEl.reset();
    };

    console.log('render');

    return (
        <form onSubmit={handleSubmit} className={styles['todo-input-group']}>
            <input name='todo-input' placeholder='Add todo...' />
            <button type='submit'>Add todo</button>
        </form>
    );
};

export default TodoIndex;
