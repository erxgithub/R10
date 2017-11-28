import { NavigationActions } from '@expo/ex-navigation';
import Store from '../redux/store';
import Router from '../navigation/router';

export const goToSession = (currentNavigatorUID, sessionData) => {
  Store.dispatch(
    NavigationActions.push(
      currentNavigatorUID,
      Router.getRoute('session', { sessionData })
    )
  );
};

export const goToSpeaker = speakerData => {
  Store.dispatch(
    NavigationActions.push('root', Router.getRoute('speaker', { speakerData }))
  );
};

export const goBack = () => {
  Store.dispatch(NavigationActions.pop('root'));
};

export const closeSession = () => {
  Store.dispatch(NavigationActions.pop('schedule'));
};
