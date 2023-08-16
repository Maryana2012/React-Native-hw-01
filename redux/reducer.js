import { combineReducers } from 'redux';
import { authReducer } from './auth/slice';
import { postsReducer } from './posts/slice';

const rootReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
});

export default rootReducer;