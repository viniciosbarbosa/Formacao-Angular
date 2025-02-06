import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UserList } from './data/users-lists';
import { IFilterOptions } from './interfaces/filter-options-interface';
import { isWithinInterval } from 'date-fns';
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
    this.usersListFiltered = this.filterUsersList(
      filterOptions,
      this.usersList
    );
  }

  filterUsersList(filterOptions: IFilterOptions, usersList: IUser[]): IUser[] {
    let filteredList: IUser[] = [];

    filteredList = this.filterUsersListByName(filterOptions.name, usersList);

    filteredList = this.filterUsersByStatus(filterOptions.status, filteredList);

    filteredList = this.filterUsersByDate(
      filterOptions.startDate,
      filterOptions.endDate,
      filteredList
    );

    return filteredList;
  }

  filterUsersListByName(name: string | undefined, usersList: IUser[]): IUser[] {
    const NAME_NOT_TYPPED = name === undefined;

    if (NAME_NOT_TYPPED) {
      return usersList;
    }

    const filteredList = usersList.filter((user) =>
      user.nome.toLowerCase().includes(name.toLowerCase())
    );

    return filteredList;
  }

  filterUsersByStatus(
    status: boolean | undefined,
    usersList: IUser[]
  ): IUser[] {
    const STATUS_NOT_TYPPED = status === undefined;
    if (STATUS_NOT_TYPPED) {
      return usersList;
    }

    const filteredList = usersList.filter((user) => user.ativo == status);

    return filteredList;
  }

  filterUsersByDate(
    startDate: Date | undefined,
    endDate: Date | undefined,
    usersList: IUser[]
  ): IUser[] {
    const DATES_NOT_SELECTED = startDate === undefined || endDate === undefined;

    if (DATES_NOT_SELECTED) {
      return usersList;
    }

    const checkDateInterval = (user: IUser) =>
      isWithinInterval(new Date(user.dataCadastro), {
        start: startDate,
        end: endDate,
      });

    const listFiltered = usersList.filter(checkDateInterval);

    return listFiltered;
  }
}
