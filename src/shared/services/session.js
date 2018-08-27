
/**************
 * 
 * 本地缓存
 * 
 * ***********/

export class SessionService{
    // 存储
    set(name, state){
        sessionStorage.setItem(name, JSON.stringify(state));
    }

    // 提取
    get(name){
        let session = sessionStorage.getItem(name);
        if(!!session){
            return JSON.parse(session);
        }
        return undefined;
    }

    // 根据跳转情况提取
    getByHistory(name, context, callback){
        if(context.props.history.action === 'POP'){
            // 返回重读数据
            let state = this.get(name);

            if(!!state){
                context.setState(state)
            };
        }else{
            callback();
        }
    }

    // 返回页面后根据之前得到的 query; 重新加载页面
    getPrevQueryReload(name, context, callback){
        // 返回页面时； 先获取之前的state; 然后将之前的 query 返回当前页
        if(context.props.history.action === 'POP'){
            // 返回重读数据
            let state, query;
            let session = this.get(name);
            if(session){
                state = session.state;
                query = session.query;
            }

            if(!!state){
                context.setState(state, ()=>{
                    callback(query);
                })
            };
        }else{
            callback();
        }
    }

    

    // 保存当前页面状态
    saveState(name, context){
        let query;
        let session = this.get(name);
        if(session){
            query = session.query
        };

        this.set(name, {
            state: context.state,
            query: context.props.location.query || query || {}
        })
    }



    // 获取银行卡和当前支付方式
    getPaymentsAndCurrent(paymentMethodId){
      let payments = this.get('payments');
      let current = payments.find(payment => payment.paymentMethodId === paymentMethodId) || payments[0];

      return {
        payments,
        current
      }
    }
}