import TodoInput from './Todo/TodoInput';
import TodoList from './Todo/TodoList';
import styles from './App.module.css';
import { observer, useLocalObservable } from 'mobx-react-lite';

const App = () => {
    const appUI = useLocalObservable(() => ({
        todosVisible: true,
        loading: false,
        *toggleTodosVisibility() {
            this.loading = true;

            yield new Promise((resolve) => setTimeout(() => resolve(0), 1000));

            this.todosVisible = !this.todosVisible;
            this.loading = false;
        },
    }));

    return (
        <div className='app'>
            <TodoInput />
            <div className={styles['todo-list-wrapper']}>
                {/* @ts-ignore */}
                <h2 onClick={appUI.toggleTodosVisibility}>
                    <span>{appUI.todosVisible ? '-' : '+'}</span>
                    Todos
                </h2>
                {appUI.todosVisible ? <TodoList /> : null}
            </div>
        </div>
    );
};

export default observer(App);
