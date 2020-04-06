$(function () {
    $('input').click(function(){
        var $code = $('<div><pre class="javascript"></pre></div>');
        var $txt = $('textarea');

        if($txt.val() !== ''){
            // .find()定位到某个元素
            $code.find('pre').html($txt.val());
            // hljs.highlightBlock()是特定的高亮方法
            hljs.highlightBlock($code.find('pre')[0]);
            $('body').append($code);
        }
    })
});