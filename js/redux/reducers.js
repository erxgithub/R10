import { NavigationReducer } from '@expo/ex-navigation';
import { combineReducers } from 'redux';
import SessionReducer from '../redux/modules/sessions';
import SpeakerReducer from '../redux/modules/speaker';
import FavesReducer from '../redux/modules/faves';
import ConductReducer from '../redux/modules/conduct';

export default combineReducers({
  navigation: NavigationReducer,
  sessions: SessionReducer,
  faves: FavesReducer,
  speaker: SpeakerReducer,
  conduct: ConductReducer
});
