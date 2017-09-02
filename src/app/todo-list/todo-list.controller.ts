import * as angular from 'angular';

class TodoListController {


    constructor($scope) {

    }

    todoText = '';

    todos = [
        {text:'learn AngularJS', done:true},
        {text:'build an AngularJS app', done:false}];

    addTodo() {
        this.todos.push({text:this.todoText, done:false});
        this.todoText = '';
    };

    remaining () {
        let count = 0;
        angular.forEach(this.todos, function(todo) {
            count += todo.done ? 0 : 1;
        });
        return count;
    };

    archive () {
        let oldTodos = this.todos;
        this.todos = [];
        angular.forEach(oldTodos, function(todo) {
            if (!todo.done) this.todos.push(todo);
        });
    };
}

TodoListController.$inject = ['$scope'];
export {TodoListController}