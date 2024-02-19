class TodoView {
    todos: KnockoutObservableArray<string>;
    newTodo: KnockoutObservable<string>;

    constructor() {
        this.todos = ko.observableArray([]);
        this.newTodo = ko.observable('');
    }

    addTodo() {
        if (this.newTodo()) {
            this.todos.push(this.newTodo());
            this.newTodo('');
        }
    }

    removeTodo(todo: string) {
        this.todos.remove(todo);
    }
}

ko.applyBindings(new TodoView());