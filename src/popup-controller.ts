import React from 'react';
import {observable, action} from 'mobx';

export class PopupController {
  @observable isVisible: boolean = false;
  @observable content: React.ReactNode;

  @action
  hide = () => {
    this.content = '';
    this.isVisible = false;
  }

  @action
  show = () => {
    this.isVisible = true;
  }

  @action
  setContent = (content: React.ReactNode) => {
    this.content = content;
  }

}