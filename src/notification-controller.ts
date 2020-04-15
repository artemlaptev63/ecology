import React from 'react';
import {observable, action} from 'mobx';

export class NotificationController {
  @observable notifications: string[] = [];

  @action
  show = (message: string) => {
    this.notifications.push(message);
    const timeout = setTimeout(() => {
      if(this.notifications.length) {
        this.hide();
      } else {
        clearTimeout(timeout);
      }
      
    }, 5000)
  }

  @action
  hide = () => {
    this.notifications.shift();
  }

  @action
  deleteMessage = (index: number) => {
    this.notifications.splice(index, 1);
  }

}