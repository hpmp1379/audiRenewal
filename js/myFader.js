//myFader.js
(function($){
    $.fn.myFader = function(){
        var $wrapper = $(this),
            $bgGroup = $wrapper.find('.bgGroup'),
            $hgroup = $wrapper.find('hgroup'),
            $pgroup = $wrapper.find('.pgroup'),
            $prev = $wrapper.find('.btPrev'),
            $next = $wrapper.find('.btNext');
        
        $bgGroup.children(':first').appendTo($bgGroup);
        $hgroup.css({top: '-100%'});
        $hgroup.children(':last').prependTo($hgroup);
        $pgroup.css({top: '-100%'});
        $pgroup.children(':last').prependTo($pgroup);

        $prev.on('click', function(){
            $bgGroup.children(':last').stop().fadeOut(1000, function(){
                $(this).prependTo($bgGroup).show(0);
            });
            $hgroup.stop().animate({top: '0%'}, 1000, function(){
                $(this).css({top: '-100%'}).children(':last').prependTo($(this));
            });
            $pgroup.stop().animate({top: '-200%'}, 1000, function(){
                $(this).css({top: '-100%'}).children(':first').appendTo($(this));
            });
        });

        $next.on('click', function(){
            $bgGroup.children(':first').stop().hide(0, function(){
                $(this).appendTo($bgGroup).fadeIn(1000);
            });
            $hgroup.stop().animate({top: '-200%'}, 1000, function(){
                $(this).css({top: '-100%'}).children(':first').appendTo($(this));
            });
            $pgroup.stop().animate({top: '-0%'}, 1000, function(){
                $(this).css({top: '-100%'}).children(':last').prependTo($(this));
            });
        });

        return this;
    }
})($)