import { TaskList } from './../../model/task-list';
import { Component, DoCheck } from '@angular/core';
import { TodoButtonDeleteAllComponent } from '../todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddItensComponent } from '../todo-input-add-itens/todo-input-add-itens.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    TodoInputAddItensComponent,
    TodoButtonDeleteAllComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || "[]"); // verifica se está populado o localStorage ou se está vazio

  ngDoCheck(): void {
    this.setLocalStorage();
  }

  public setEmitTaskList(event: String) {
    this.taskList.push({ task: event, checked: false });
  }

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1); //ele da um splica na posição (event) com 1 valor
  }

  public deleteAllItemTaskList() {
    const confirm = window.confirm('Você deseja realmente deletar tudo?');

    if (confirm) {
      this.taskList = [];
    }
  }

  public validationInput(event: String, index: number) {
    if (!event.length) {
      const confirm = window.confirm('Task está vazia, deseja deletar?');

      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort(
        (first, last) => Number(first.checked) - Number(last.checked)
      );
      // ele vai fazer uma relação matematica e vai colocar todos os elementos com checked para baixo
      localStorage.setItem('list', JSON.stringify(this.taskList));
    }
  }
}
