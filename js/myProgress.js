(function ($) {
    $.fn.myProgress = function () {
        var $progress = $(this),
            $art = $progress.find('article'),
            num = 0,
            per = 0,
            leftDeg = 180,
            rightDeg = 0,
            dTime = 2000,
            nowDeg = 0;
        $art.each(function(i){
            num = $art.eq(i).find('span').text();
            $art.eq(i).find('span').text(0)
            $({percent:0}).animate({percent:num},{
                duration:dTime,
                progress:function(){
                    per = parseInt(this.percent);
                    console.log(per)
                    nowDeg = per*360/100;
                    rightDeg = Math.min(nowDeg, 180);
                    leftDeg = Math.max(nowDeg, 180);
                    $art.eq(i).find('span').text(per);
                    $art.eq(i).find('.right li').css({
                        transform: 'rotate('+rightDeg+'deg)'
                    });
                    $art.eq(i).find('.left li').css({
                        transform: 'rotate('+leftDeg+'deg)'
                    });
                }
            });
        });
        return this;
    }
})($);