import {
    SHOW_LOADING,
    HIDE_LOADING
} from '../actions/loadingAction';

const initialState = {
    show: false,
    loadingTxt: '',
    duration: 30000
}

export default function(state=initialState, action){
    switch(action.type){
        // 获取全部
        case SHOW_LOADING:
            return {
                show: true,
                loadingTxt: action.payload || '',
                duration: 30000
            };
        case HIDE_LOADING:
            return {
                show: false,
                loadingTxt: '',
                duration: 30000
            };
        default:
            return state;
    }
}

