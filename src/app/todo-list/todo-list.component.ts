import * as angular from 'angular';
import {TodoListController} from './todo-list.controller';
import './todo-list.component.css';

angular.module("app.todo-list", [

]);

angular.module('app.todo-list').controller('TodoListController', TodoListController);

angular.module('app.todo-list').component('todoList', {
    template: require('./todo-list.component.html'),
    controller: 'TodoListController',
    controllerAs: 'todoList'
});