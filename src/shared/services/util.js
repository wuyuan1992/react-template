import { HttpService } from "./http";

/**************
 * 
 * 常用工具
 * 
 * ***********/

 let http = new HttpService();

 // 正则验证
const regDictionary = {
    'number4':/^\d{4}$/,
    'number5':/^\d{5}$/,
    'number6':/^\d{6}$/,
    'phone':/^1\d{10}$/,
    'money':/^([1-9][0-9]*)+(.[0-9]{1,2})?$/,   // 非零的整数 或 最多多两位小数
    'identity':/^\d{17}([0-9]|x|X)$/,          // 身份证信息
}

export const validate = function(value, regIndex, name){
    const pure = value===undefined? '' : String(value).trim();
    // 未输入提示
    if(pure === ''){
        // toast 提示
        console.log(`${name}不能为空`);
        return false;
    }
    let valid = regDictionary[regIndex].test(pure);
    if(!valid){
        console.log(`请输入正确的${name}`);
        return false;
    }
    return true;
}

// 弹框时，禁止页面滚动
export function forbidScroll(e) {
    // console.log(e);
    e.preventDefault && e.preventDefault();
    // e.returnValue = false;
    // e.stopPropagation && e.stopPropagation();
    return false;
}


// 计算定充/定投日期
export function calcPlanInfo(intervalTimeUnit, sendDay){
    const week = ['一','二','三','四','五'];
    switch(intervalTimeUnit){
        case 2:
            return `每月${sendDay}日`;
        case 1:
            return `每周${week[sendDay - 1]}`
        case 0:
            return `每天`
        default: 
            return ``
    }
  }


// 获取未来五个交易日
export function getTradeDate(){
    return new Promise(async (resolve, reject)=>{
        try{
            // 是否超过 15：00
            let currDate = (new Date()).getHours()<15?
            // 当前日期
                (new Date()).toLocaleDateString()
                :
            // 第二天
                (new Date(Date.now()+24*3600*1000)).toLocaleDateString();

            console.log(`当前交易日：${currDate}`);

            let result = await http.get(`/trade/next-5-tradedate?currDate=${currDate}`);
            let data = result.map(date => {
                return `${date.split('-')[1]}月${date.split('-')[2]}日`
            });
        
            resolve(data)
        }catch(err){
            reject(err);
        }
    })
}