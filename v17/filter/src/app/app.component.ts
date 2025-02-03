import { Component } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UserList } from './data/users-lists';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'filter';
  userSelect: IUser = UserList[0];
}
