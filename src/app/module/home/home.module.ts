import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddItensComponent } from './components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, HeaderComponent, TodoButtonDeleteAllComponent, TodoInputAddItensComponent, TodoListComponent],
  exports: [ HeaderComponent, TodoButtonDeleteAllComponent, TodoInputAddItensComponent, TodoListComponent],
})
export class HomeModule {}
