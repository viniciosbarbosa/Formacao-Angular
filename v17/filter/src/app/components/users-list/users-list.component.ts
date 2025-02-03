import { UserList } from './../../data/users-lists';
import { Component } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  userList: IUser[] = UserList;
  displayedColumns: string[] = ['name', 'date', 'status'];

  onUserSelected(user: IUser) {
    console.log(user);
  }
}
