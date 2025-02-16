import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UserList } from './data/users-lists';
import { IFilterOptions } from './interfaces/filter-options-interface';
import { filterUsersList } from './utils/filter-users-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'filter';
  usersList: IUser[] = [];
  usersListFiltered: IUser[] = [];
  userSelect: IUser = {} as IUser;
  showUserDetails: boolean = false;

  onUserSelect(user: IUser) {
    this.showUserDetails = true;
    this.userSelect = user;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.usersList = UserList;
      this.usersListFiltered = this.usersList;
    }, 10);
  }

  onFilter(filterOptions: IFilterOptions) {
    this.usersListFiltered = filterUsersList(filterOptions, this.usersList);
  }
}
