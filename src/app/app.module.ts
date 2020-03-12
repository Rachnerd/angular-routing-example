import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { TodosModule } from './todos/todos.module';
import { UserModule } from './user/user.module';
import { SCOPE } from './core/scope.token';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavigationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    TodosModule,
    UserModule
  ],
  providers: [
    {
      provide: SCOPE,
      useValue: 'root'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
