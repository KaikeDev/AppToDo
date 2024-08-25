import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-input-add-itens',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-input-add-itens.component.html',
  styleUrl: './todo-input-add-itens.component.scss',
})
export class TodoInputAddItensComponent {
  @Output() public emitItemTaskList = new EventEmitter(); // sempre que esse evento for assionada ele vai lançar para os outros componentes

  public addItemTaskList: string = '';

  public submitItemTaskList() {

    this.addItemTaskList = this.addItemTaskList.trim() //remove os espaços da frente e de trás
    if (this.addItemTaskList) {
      this.emitItemTaskList.emit(this.addItemTaskList); //emite o valor para fora
      this.addItemTaskList = '';
    }
  }
}
