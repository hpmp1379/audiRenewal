(function($){
    $.fn.myDirection = function(){
        var $wrap = $(this),
            $art = $wrap.find('article');
            $art.css({overflow: 'hidden'});
            $art.find('.texts').css({top:'100%', left: '100%'});
        $art.each(function(){
            $(this).on('mouseenter mouseleave', mousehover);
            function mousehover(evt){
                var side = getMouseDirection(evt),
                    animateTo = {},
                    mouseIn = {top:0, left:0},
                    mouseOut = (function(){
                        switch(side){
                            case 0 : return {top:'-100%', left:0};
                                break;
                            case 1 : return {top:0, left:'100%'};
                                break;
                            case 2 : return {top:'100%', left:0}
                                break;
                            case 3 : return {top:0, left:'-100%'}
                                break;
                        }
                    })();
                if(evt.type == 'mouseenter'){
                    animateTo = mouseIn;
                    $(this).find('.texts').css(mouseOut);
                }else{
                    animateTo = mouseOut;
                }
                $(this).find('.texts').stop().animate(animateTo, 300);
            }
            function getMouseDirection(evt){
                var $this = $(evt.currentTarget),
                    offset = $this.offset(),
                    w = $this.outerWidth(),
                    h = $this.outerHeight(),
                    x = (evt.pageX-offset.left-w/2)*((w>h) ? h/w : 1),
                    y = (evt.pageY-offset.top-h/2)*((w<h) ? w/h : 1),
                    direction = Math.round((((Math.atan2(y,x)*(180/Math.PI))+180)/90)+3)%4;
                return direction; 
            }
        });
        return this;
    }
})($)