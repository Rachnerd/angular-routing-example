import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { RouterModule } from '@angular/router';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodosCreateComponent } from './todos-create/todos-create.component';

@NgModule({
  declarations: [TodosComponent, TodosListComponent, TodosCreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        component: TodosComponent,
        path: 'todos',
        children: [
          {
            component: TodosListComponent,
            path: 'list'
          },
          {
            component: TodosCreateComponent,
            path: 'create'
          }
        ]
      }
    ])
  ]
})
export class TodosModule {}
