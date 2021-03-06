import { action, makeObservable, observable } from "mobx";

export interface Todo {
    id: number;
    title: string;
    isDone: boolean;
}

class TodoStore {
    list: Todo[] = [];

    constructor() {
        makeObservable(this, {
            list: observable,
            add: action,
            toggle: action,
            remove: action
        });
    }

    add(title: string) {
        if (title.length < 3) {
            return;
        }

        this.list.push({
            id: Date.now(),
            title,
            isDone: false,
        });
    }

    toggle(todo: Todo) {
        const currentTodo = this.list.find((t) => t.id === todo.id);
        currentTodo && (currentTodo.isDone = !currentTodo.isDone);
    }

    remove(todo: Todo) {
        this.list = this.list.filter((t) => t.id !== todo.id);
    }

    get unfinishedTodos() {
        return this.list.filter((t: Todo) => !t.isDone);
    }
}

export default TodoStore;
