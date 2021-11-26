import TodoInput from './Todo/TodoInput';
import TodoList from './Todo/TodoList';
import styles from './App.module.css';
import { observer, useLocalObservable } from 'mobx-react-lite';

const App = () => {
    const appUI = useLocalObservable(() => ({
        todosVisible: true,
        loading: false,
        receiveData(value: boolean) {
            this.todosVisible = value;
            this.loading = false;
        },
        toggleTodosVisibility() {
            this.loading = true;

            // @ts-ignore
            new Promise((resolve) => setTimeout(() => resolve(!this.todosVisible), 1000)).then(this.receiveData);
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
