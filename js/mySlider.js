//mySlider.js
// (function($){
//     $.fn.플러그인이름 = function(){
//         플러그인으로 작동될 함수
//         return this;
//     }
// })($)
(function($){
    $.fn.mySlider = function(){
        var $sliderWrap = $(this),
            $imgGroup = $sliderWrap.find('.imgGroup'),
            $prev = $sliderWrap.find('.btPrev'),
            $next = $sliderWrap.find('.btNext');

        $imgGroup.css({marginLeft : '-100%'});
        $imgGroup.children(':last').prependTo($imgGroup);
        $prev.on('click', function(){
            $imgGroup.stop().animate({marginLeft:0}, function(){
                $imgGroup.css({marginLeft : '-100%'});
                $imgGroup.children(':last').prependTo($imgGroup);
            });
        });
        $next.on('click', function(){
            $imgGroup.stop().animate({marginLeft:'-200%'}, function(){
                $imgGroup.css({marginLeft : '-100%'});
                $imgGroup.children(':first').appendTo($imgGroup);
            });
        });
        return this;
    }
})($)