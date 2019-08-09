import { combineReducers } from 'redux';

import appReducer from 'containers/App/reducer';
import characterReducer from 'containers/CharacterSelect/reducer';

export default () =>
  combineReducers({
    app: appReducer,
    characters: characterReducer,
  });
