import { UserList } from '../../data/users-lists';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  displayedColumns: string[] = ['name', 'date', 'status'];

  @Input({ required: true }) userList: IUser[] = [];

  @Output('userSelected') userSelectedEmit = new EventEmitter<IUser>();

  onUserSelected(user: IUser) {
    this.userSelectedEmit.emit(user);
  }
}
