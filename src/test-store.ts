import {observable, action} from 'mobx';

export class TestStore {
  @observable startDate: Date | null = null;
  @observable endDate: Date | null = null;
  @observable selectId: string = '';
  @observable arrayIds: string[] = [];
  @observable inputValue: string = '';
  @observable maskedValue: string = '';
  @observable isHeaderVisible: boolean = true;
  @observable files: string[] = [];
  @observable selectedTasks: string[] = [];

  @action
  setSelectedTasks = (tasks: string[]) => {
    this.selectedTasks = tasks;
  }

  @action
  setStartDate = (date: Date | null) => {
    this.startDate = date;
  }

  @action
  setEndDate = (date: Date | null) => {
    this.endDate = date;
  }

  @action
  hideHeader = () => {
    this.isHeaderVisible = false;
  }

  @action
  showHeader = () => {
    this.isHeaderVisible = true;
  }

  @action
  setSelectId = (selectId: string) => {
    this.selectId = selectId;
  }

  @action
  setArrayIds = (arrayIds: string[]) => {
    this.arrayIds = arrayIds;
  }

  @action
  setInputValue = (inputValue: string) => {
    this.inputValue = inputValue;
  }

  @action
  setMaskedValue = (maskedValue: string) => {
    this.maskedValue = maskedValue;
  }

  @action
  setFiles = (files: string[]) => {
    this.files = [...this.files, ...files];
  }

  @action
  deleteFile = (index: number) => {
    const updatedFiles = this.files.filter((item, i) => i !== index);
    this.files = updatedFiles;
  }

  clearStore = () => {
    this.setSelectId('')
    this.setArrayIds([])
    this.setInputValue('');
    this.setMaskedValue('');
  }
}