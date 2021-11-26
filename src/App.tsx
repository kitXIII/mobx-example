import { useState } from 'react';
import { observable } from 'mobx';
import TodoInput from './Todo/TodoInput';
import TodoList from './Todo/TodoList';
import styles from './App.module.css';
import { observer } from 'mobx-react-lite';

const App = () => {
    const [appUI] = useState(() =>
        observable({
            todosVisible: true,
            toggleTodosVisibility() {
                this.todosVisible = !this.todosVisible;
            },
        }),
    );

    return (
        <div className='app'>
            <TodoInput />
            <div className={styles['todo-list-wrapper']}>
                <h2 onClick={() => appUI.toggleTodosVisibility()}>
                    <span>{appUI.todosVisible ? '-' : '+'}</span>
                    Todos
                </h2>
                {appUI.todosVisible ? <TodoList /> : null}
            </div>
        </div>
    );
};

export default observer(App);
