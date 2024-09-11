// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import snackbar from './snackbar';
import questiondata from './questiondata';
import schooldata from './schooldata';
// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  menu,
  snackbar,
  questiondata,
  schooldata,
});

export default reducers;
