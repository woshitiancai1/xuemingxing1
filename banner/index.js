var $RotationChart = (function(){
    $slider = $('<div class="slider" id="slider"></div>');
    function slider(container){
        $(container).append($slider);
    }
    //第一张
    $slide = $('<div class="slide" id="slide0"></div>');
    function slide(container1){
        $(container1).append($slide);
    }
    $image0 = $('<img src="img/b5.png" alt="">');
    function image0(container2){
        $(container2).append($image0);
    }
    //第二张
    $slide1 = $('<div class="slide" id="slide1"></div>');
    function slide1(container1){    
        $(container1).append($slide1);
    }
    $image1 = $('<img src="img/b1.png" alt="">');
    function image1(container2){
        $(container2).append($image1);
    }
    //第三张
    $slide2 = $('<div class="slide" id="slide2"></div>');
    function slide2(container1){
        $(container1).append($slide2);
    }
    $image2 = $('<img src="img/b2.png" alt="">');
    function image2(container2){
        $(container2).append($image2);
    }
    //第四张
    $slide3 = $('<div class="slide" id="slide3"></div>');
    function slide3(container1){
        $(container1).append($slide3);
    }
    $image3 = $('<img src="img/b3.png" alt="">');
    function image3(container2){
        $(container2).append($image3);
    }
    //第五张
    $slide4 = $('<div class="slide" id="slide4"></div>');
    function slide4(container1){
        $(container1).append($slide4);
    }
    $image4 = $('<img src="img/b4.png" alt="">');
    function image4(container2){
        $(container2).append($image4);
    }
    //第六张
    $slide5 = $('<div class="slide" id="slide5"></div>');
    function slide5(container1){
        $(container1).append($slide5);
    }
    $image5 = $('<img src="img/b5.png" alt="">');
    function image5(container2){
        $(container2).append($image5);
    }
    //第七张
    $slide6 = $('<div class="slide" id="slide6"></div>');
    function slide6(container1){
        $(container1).append($slide6);
    }
    $image6 = $('<img src="img/b1.png" alt="">');
    function image6(container2){
        $(container2).append($image6);
    }
    //定时器实现轮播图效果
    function timer(container3){
        var time = setInterval(function(){
            var sliderLeft =parseInt($(container3).css("left")); 
            $(container3).css("left",sliderLeft-1200+"px");
            if(parseInt($(container3).css("left")) == -7200){
                $(container3).css("left",-1200+"px");
            }
        },3000)
    }
    //两个span标签
    function left(leftPage){
        $leftSpan = $('<span class="left" id="left"><</span>');
        $(leftPage).append($leftSpan);
        var leftButton = $('#left');
        //点击事件
        $(leftButton).click(function(){
            var a = $("#slider");
            var sliderLeft =parseInt($(a).css("left"));
            $(a).css("left",sliderLeft+1200+"px");
            if(parseInt($(a).css("left")) == 0){
            $(a).css("left",-6000+"px");
            }
        })
        $(leftPage).mouseover(function(){
            $(leftButton).css("opacity","100")
        })
        $(leftPage).mouseout(function(){
            $(leftButton).css("opacity","0")
        })
    }
    function right(rightPage){
        $rightSpan = $('<span class="right" id="right">></span>');
        $(rightPage).append($rightSpan);
        var rightButton = $('#right');
        //点击事件
        $(rightButton).click(function(){
            var a = $("#slider");
            var sliderLeft =parseInt($(a).css("left"));
            $(a).css("left",sliderLeft-1200+"px");
            if(parseInt($(a).css("left")) == -7200){
            $(a).css("left",-1200+"px");
            }
        })
        $(rightPage).mouseover(function(){
            $(rightButton).css("opacity","100")
        })
        $(rightPage).mouseout(function(){
            $(rightButton).css("opacity","0")
        })
    }
    //ul列表
    function ulNav(ulList){
        $ulFlat = $('<ul class="nav" id="navs"></ul>');
        $(ulList).append($ulFlat);
    }
    //li列表
    function liNav1(liList){
        $liFlat = $('<li id="li1">1</li>');
        $(liList).append($liFlat);
    }
    function liNav2(liList){
        $liFlat = $('<li id="li2">2</li>');
        $(liList).append($liFlat);
    }
    function liNav3(liList){
        $liFlat = $('<li id="li3">3</li>');
        $(liList).append($liFlat);
    }
    function liNav4(liList){
        $liFlat = $('<li id="li4">4</li>');
        $(liList).append($liFlat);
    }
    function liNav5(liList){
        $liFlat = $('<li id="li5">5</li>');
        $(liList).append($liFlat);
    }
    //nav-css
    function navcss(){
        var sliderWidth = $("#slider"),
            li1 = $("#li1"),
            li2 = $("#li2"),
            li3 = $("#li3"),
            li4 = $("#li4"),
            li5 = $("#li5");
        //点击事件
        //第一个按钮
        $(li1).click(function(){
            $(sliderWidth).css("left",-1200+"px");
            $(li1).css("background","red");
            $(li1).addClass("active");
            $(li2).css("background","#ccc");
            $(li2).removeClass("active");
            $(li3).css("background","#ccc");
            $(li3).removeClass("active");
            $(li4).css("background","#ccc");
            $(li4).removeClass("active");
            $(li5).css("background","#ccc");
            $(li5).removeClass("active");
        })
        //第二个按钮
        $(li2).click(function(){
            $(sliderWidth).css("left",-2400+"px");
            $(li2).css("background","red");
            $(li2).addClass("active");
            $(li1).css("background","#ccc");
            $(li1).removeClass("active");
            $(li3).css("background","#ccc");
            $(li3).removeClass("active");
            $(li4).css("background","#ccc");
            $(li4).removeClass("active");
            $(li5).css("background","#ccc");
            $(li5).removeClass("active");
        })
        //第三个按钮
        $(li3).click(function(){
            $(sliderWidth).css("left",-3600+"px");
            $(li3).css("background","red");
            $(li3).addClass("active");
            $(li2).css("background","#ccc");
            $(li2).removeClass("active");
            $(li1).css("background","#ccc");
            $(li1).removeClass("active");
            $(li4).css("background","#ccc");
            $(li4).removeClass("active");
            $(li5).css("background","#ccc");
            $(li5).removeClass("active");
        })
        //第四个按钮
        $(li4).click(function(){
            $(sliderWidth).css("left",-4800+"px");
            $(li4).css("background","red");
            $(li4).addClass("active");
            $(li2).css("background","#ccc");
            $(li2).removeClass("active");
            $(li3).css("background","#ccc");
            $(li3).removeClass("active");
            $(li1).css("background","#ccc");
            $(li1).removeClass("active");
            $(li5).css("background","#ccc");
            $(li5).removeClass("active");
        })
        //第五个按钮
        $(li5).click(function(){
            $(sliderWidth).css("left",-6000+"px");
            $(li5).css("background","red");
            $(li5).addClass("active");
            $(li2).css("background","#ccc");
            $(li2).removeClass("active");
            $(li3).css("background","#ccc");
            $(li3).removeClass("active");
            $(li4).removeClass("active");
            $(li4).css("background","#ccc");
            $(li1).removeClass("active");
            $(li1).css("background","#ccc");
        })
    }
    return{
        slider:slider,
        slide:slide,
        slide1:slide1,
        slide2:slide2,
        slide3:slide3,
        slide4:slide4,
        slide5:slide5,
        slide6:slide6,
        //image
        image0:image0,
        image1:image1,
        image2:image2,
        image3:image3,
        image4:image4,
        image5:image5,
        image6:image6,
        //定时器
        timer:timer,
        //span标签
        left:left,
        right:right,
        //ul列表
        ulNav:ulNav,
        //li
        liNav1:liNav1,
        liNav2:liNav2,
        liNav3:liNav3,
        liNav4:liNav4,
        liNav5:liNav5,
        //navcss
        navcss:navcss,
    };
}());