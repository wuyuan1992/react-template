import { combineReducers  } from 'redux';
import loadingReducer from '../reducers/loadingReducer';

const rootReducer = combineReducers({
    loading: loadingReducer
})

export default rootReducer;