import TodoInput from './Todo/TodoInput';
import TodoList from './Todo/TodoList';
import styles from './App.module.css';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { useStore } from './stores';

const App = () => {
    const { todos } = useStore();
    const appUI = useLocalObservable(() => ({
        todosVisible: true,
        toggleTodosVisibility() {
            this.todosVisible = !this.todosVisible;
        },
    }));

    return (
        <div className='app'>
            <TodoInput />
            <div className={styles['todo-list-wrapper']}>
                {/* @ts-ignore */}
                <h2 onClick={appUI.toggleTodosVisibility}>
                    <span>{appUI.todosVisible ? '-' : '+'}</span>
                    Todos (unfinished: {todos.unfinishedTodos.length})
                </h2>
                {appUI.todosVisible ? <TodoList /> : null}
            </div>
        </div>
    );
};

export default observer(App);
