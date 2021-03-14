import { Component } from '@angular/core';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css'],
})
export class ToDoListComponent {
        toDos: string[] = [];

        toDo!: string;

        addToDoList() {       
            this.toDos.push(this.toDo)
    }
        delToDoList(toDoIndex: number) {
            //console.log(taskDetail);
            this.toDos = this.toDos.filter((t, index) => index !==toDoIndex);
        }
}


