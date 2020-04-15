import React from 'react';
import {TestStore} from './test-store';
import {PopupController} from './popup-controller';
import {NotificationController} from './notification-controller';

type StoresContextValue = {
	testStore: TestStore;
	popupController: PopupController;
	notificationController: NotificationController;
};

export const storesContextDefaultValue: StoresContextValue = {
	testStore: new TestStore(),
	popupController: new PopupController(),
	notificationController: new NotificationController()
};

export const StoresContext = React.createContext<StoresContextValue>(storesContextDefaultValue);
