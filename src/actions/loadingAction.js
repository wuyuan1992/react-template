export const SHOW_LOADING = 'SHOW_LOADING';
export const HIDE_LOADING = 'HIDE_LOADING';

export function showLoading(txt){
    console.log('show loading');
    return {
        type: SHOW_LOADING,
        payload: txt
    }
}

export function hideLoading(){
    console.log('hide loading');
    return {
        type: HIDE_LOADING
    }
}