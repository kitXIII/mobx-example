import TodoInput from './Todo/TodoInput';
import TodoList from './Todo/TodoList';
import styles from './App.module.css';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { action } from 'mobx';

const App = () => {
    const appUI = useLocalObservable(() => ({
        todosVisible: true,
        loading: false,
        toggleTodosVisibility() {
            this.loading = true;

            new Promise((resolve) => setTimeout(() => resolve(!this.todosVisible), 1000)).then(
                action((value) => {
                    // @ts-ignore
                    this.todosVisible = value;
                    this.loading = false;
                }),
            );
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
