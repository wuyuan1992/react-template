/**************
 * 
 * http 请求
 * 
 * ***********/
import axios from 'axios';
import { SessionService } from './session';

let session = new SessionService();

export class HttpService {
    baseUrl = "/app/wv";
    proxyConfig = {proxy: { host: 'http://localhost:3000', port: 3000 }};
    
    get(url, data, context){
        const _that = this;
        let appEnter = session.get('appEnter');

        // app 进入的第一页不显示 loading
        if(context && !appEnter){
            context.setState({ showLoading:true });
        }
        if(appEnter){
            session.set('appEnter', false);
        }
        
        return new Promise(async (resolve, reject)=>{
            axios.get(this.baseUrl + url, { params: data})
                .then( res => {
                    const resData = _that.handleResponse(res.data);
                    console.log(resData);

                    if(context){
                        context.setState({ showLoading:false },()=>{
                            if(resData){
                                resolve(resData);
                            }else{
                                reject(res.data);
                            }
                        })
                    }else{
                        if(resData){
                            resolve(resData);
                        }else{
                            reject(res.data);
                        }
                    }
                })
                .catch( err => {
                    if(context){
                        context.setState({ showLoading:false }),()=>{
                            _that.handleErr(err);
                        };
                    }else{
                        _that.handleErr(err);
                    }
                })
                .finally( ()=>{
                    if(context){
                        context.setState({ showLoading:false });
                    }
                });
        })
    }    
                                    
    post(url, data, context){
        const _that = this;
        let appEnter = session.get('appEnter');

        // app 进入的第一页不显示 loading
        if(context && !appEnter){
            context.setState({ showLoading:true });
        }
        if(appEnter){
            session.set('appEnter', false);
        }

        return new Promise(async (resolve, reject)=>{
            axios.post(this.baseUrl + url, data)
                .then( res => {
                    const resData = _that.handleResponse(res.data);
                    console.log(resData);

                    // app 进入的第一页不显示 loading
                    if(context){
                        context.setState({ showLoading:false },()=>{
                            if(resData){
                                resolve(resData);
                            }else{
                                reject(res.data);
                            }
                        })
                    }else{
                        if(resData){
                            resolve(resData);
                        }else{
                            reject(res.data);
                        }
                    }
                })
                .catch( err => {
                    if(context){
                        context.setState({ showLoading:false }),()=>{
                            _that.handleErr(err);
                        };
                    }else{
                        _that.handleErr(err);
                    }
                })
                .finally( ()=>{
                    if(context){
                        context.setState({ showLoading:false });
                    }
                });
        })
    }
    
    
    
    // http service 内部方法
    
    // 处理响应
    handleResponse(res){
        console.log(res);
        if(res.code === undefined){
            // return res;
            // 未知错误
            return false;
        }
        if(res.code === 400 || res.code === 500){
            // 弹窗提醒错误
            return false;
        }
        if(res.code === 203){
            // 弹窗提醒错误
            return false;
        }
        // 密码错误
        if(res.code === 30004 || res.code === 30005){
            // 弹窗提醒错误
            return false;
        }
        return res.data;
    }
    
    // 处理错误
    handleErr(err){
        // 弹窗提醒错误
        console.log('err');
        return err;
    }
}
