import {observable, action} from "mobx";

export class Pagination {
  @observable allItems: number = 0;
  @observable limit: number = 20;
  @observable offset: number = 0;
  @observable data = [];
  @observable activePage = 0;
  @observable allPages = 0;

  @action
  setData = (data: any) => {
    this.data = data;
  }

  @action
  setActivePage = (activePage: any) => {
    this.activePage = activePage;
    this.offset = this.limit * activePage;
  }

  @action
  setAllItems = (items: number) => {
    this.allItems = items;
  }

  @action
  calculatePages = () => {
    this.allPages = Math.ceil(this.allItems / this.limit);
  }
}