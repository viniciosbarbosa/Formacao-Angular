import { IFilterOptions } from '../interfaces/filter-options-interface';
import { IUser } from '../interfaces/user/user.interface';
import { isWithinInterval } from 'date-fns';

const filterUsersListByName = (
  name: string | undefined,
  usersList: IUser[]
): IUser[] => {
  const NAME_NOT_TYPPED = name === undefined;

  if (NAME_NOT_TYPPED) {
    return usersList;
  }

  const filteredList = usersList.filter((user) =>
    user.nome.toLowerCase().includes(name.toLowerCase())
  );

  return filteredList;
};

const filterUsersByStatus = (
  status: boolean | undefined,
  usersList: IUser[]
): IUser[] => {
  const STATUS_NOT_TYPPED = status === undefined;
  if (STATUS_NOT_TYPPED) {
    return usersList;
  }

  const filteredList = usersList.filter((user) => user.ativo == status);

  return filteredList;
};

const filterUsersByDate = (
  startDate: Date | undefined,
  endDate: Date | undefined,
  usersList: IUser[]
): IUser[] => {
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
};

const filterUsersList = (
  filterOptions: IFilterOptions,
  usersList: IUser[]
): IUser[] => {
  let filteredList: IUser[] = [];

  filteredList = filterUsersListByName(filterOptions.name, usersList);

  filteredList = filterUsersByStatus(filterOptions.status, filteredList);

  filteredList = filterUsersByDate(
    filterOptions.startDate,
    filterOptions.endDate,
    filteredList
  );

  return filteredList;
};

export { filterUsersList };
