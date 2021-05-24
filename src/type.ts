export interface IListItem {
  id: number;
  title: string;
}

export interface IList {
  id: number;
  title: string;
  children: IListItem[];
}
