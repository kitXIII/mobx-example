import { VFC, FormEvent } from 'react';
import { useStore } from '../../stores';
import styles from './TodoInput.module.css';

const TodoIndex: VFC = () => {
    const { todos } = useStore();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const formEl = e.target as HTMLFormElement;
        const formData = new FormData(formEl);
        const value = String(formData.get('todo-input') || '');

        todos.add(value);
        formEl.reset();
    };

    return (
        <form onSubmit={handleSubmit} className={styles['todo-input-group']}>
            <input name='todo-input' placeholder='Add todo...' />
            <button type='submit'>Add todo</button>
        </form>
    );
};

export default TodoIndex;
