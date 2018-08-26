import { combineReducers } from 'redux';

import address from './address';
import listAddress from './listAddress';

export default combineReducers({
  address,
  listAddress,
});
