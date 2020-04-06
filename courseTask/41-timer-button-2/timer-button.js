// 构造函数
function TimerButton (){
    var $btn = $("<input class='timer-button' type='button' disabled>");
        var cfg = {
            container:'body',
            num:6,
            title:'同意',
            },
            timer;

    // 利用this改成公开函数
    this.show = function(conf){
        // 1.Dom draw
        $(cfg.container).append($btn);
        $.extend(cfg,conf);
        $btn.val(cfg.title + '(' + cfg.num + 's)');
        // 2.event bind
        clearInterval(timer);
        timer = setInterval(function () {
            cfg.num--;
            if(cfg.num===0){
                clearInterval(timer);
                $btn.val(cfg.title);
                $btn.removeAttr('disabled');
            }
            else{
                $btn.val(cfg.title + '(' + cfg.num + 's)');
            }
        },1000)
        $btn.click(cfg.onClick);
    }
    
};
// 不用 page load event
/*
封装成对象，有几种方案：
1.简单对象字面量 ，不完全面向对象，不能包括私有方法
var timerBtn = {
    {
        show: function()
    }
}

2.工厂函数 ,一个函数返回只是一个简单对象
var timerBtn = (function(){
    return {
        show:function(){}
    }
}())
3.构造函数，
function TimerBtn(){

}
var tb = new TimerBtn();
*/