import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UserList } from './data/users-lists';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'filter';
  userSelect: IUser = {} as IUser;
  showUserDetails: boolean = false;

  usersList: IUser[] = [];
  onUserSelect(user: IUser) {
    this.showUserDetails = true;
    this.userSelect = user;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.usersList = UserList;
    }, 500);
  }
}
