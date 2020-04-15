import {observable, action} from 'mobx';

export class TestStore {
  @observable date: Date | null = null;
  @observable selectId: string = '';
  @observable arrayIds: string[] = [];
  @observable inputValue: string = '';
  @observable maskedValue: string = '';

  @action
  setDate = (date: Date | null) => {
    this.date = date;
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

  clearStore = () => {
    this.setDate(null);
    this.setSelectId('')
    this.setArrayIds([])
    this.setInputValue('');
    this.setMaskedValue('');
  }
}