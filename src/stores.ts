import React from 'react';
import {TestStore} from './test-store';
import {PopupController} from './popup-controller';
import {NotificationController} from './notification-controller';
import {Pagination} from './pagination-store';

type StoresContextValue = {
	testStore: TestStore;
	popupController: PopupController;
	notificationController: NotificationController;
	pagination: Pagination;
};

export const storesContextDefaultValue: StoresContextValue = {
	testStore: new TestStore(),
	popupController: new PopupController(),
	notificationController: new NotificationController(),
	pagination: new Pagination()
};

export const StoresContext = React.createContext<StoresContextValue>(storesContextDefaultValue);
