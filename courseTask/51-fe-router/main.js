$(function () {
    window.onhashchange = function(){
        // hash事件就是指#
        var $block = $('.main'),
            strHash = window.location.hash,
            color = strHash.substring(3,strHash.length);

        $block.css({'background-color':color})
    }
});

/**
 * 编程三法：
 *  语法，编程语言 VS 自然语言
 *  算法，数据结构和算法，数学公式，执行步骤，人工智能（搜索）
 *  章法，23设计模式，上卷，中卷，下卷（章，节，段落），软件架构
 */