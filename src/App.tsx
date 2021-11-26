import TodoInput from './Todo/TodoInput';
import TodoList from './Todo/TodoList';
import styles from './App.module.css';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { runInAction } from 'mobx';

const App = () => {
    const appUI = useLocalObservable(() => ({
        todosVisible: true,
        loading: false,
        async toggleTodosVisibility() {
            this.loading = true;

            await new Promise((resolve) => setTimeout(() => resolve(0), 1000));

            runInAction(() => {
                this.todosVisible = !this.todosVisible;
                this.loading = false;
            });
        },
    }));

    console.log(appUI.loading, appUI.todosVisible);
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
