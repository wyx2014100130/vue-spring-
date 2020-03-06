
//导出一个立即执行函数，因为想要记录一下初始时间
export const throttle = (function (){
    var firstTime=0;
    var timer=null;
    //有待完善
    return function(callback,time=300){
        var lastTime=new Date().getTime();
        clearTimeout(timer);
        if(lastTime-firstTime>time){
            callback();
            firstTime=lastTime;
        }else{
            timer=setTimeout(() => {
                callback()
            }, time);
        }
    }
})()