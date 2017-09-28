
; $(function ($, window, document, undefined) {
    
    Slider = function (container, options) {


        "use strict"; //stirct mode not support by IE9-

        if (!container) return;

        var options = options || {},
            currentIndex = 0,
            cls = options.activeControllerCls,
            delay = options.delay,
            isAuto = options.auto,
            controller = options.controller,
            event = options.event,
            interval,
            slidesWrapper = container.children().first(),
            slides = slidesWrapper.children(),
            length = slides.length,
            childWidth = container.width(),
            totalWidth = childWidth * slides.length;

        function init() {
            var controlItem = controller.children();

            mode();

            event == 'hover' ? controlItem.mouseover(function () {
                stop();
                var index = $(this).index();

                play(index, options.mode);
            }).mouseout(function () {
                isAuto && autoPlay();
            }) : controlItem.click(function () {
                stop();
                var index = $(this).index();

                play(index, options.mode);
                isAuto && autoPlay();
            });

            isAuto && autoPlay();
        }

        //animate mode
        function mode() {
            var wrapper = container.children().first();

            options.mode == 'slide' ? wrapper.width(totalWidth) : wrapper.children().css({
                'position': 'absolute',
                'left': 0,
                'top': 0
            })
                .first().siblings().hide();
        }

        //auto play
        function autoPlay() {
            interval = setInterval(function () {
                triggerPlay(currentIndex);
            }, options.time);
        }

        //trigger play
        function triggerPlay(cIndex) {
            var index;

            (cIndex == length - 1) ? index = 0 : index = cIndex + 1;
            play(index, options.mode);
        }

        //play
        function play(index, mode) {
            slidesWrapper.stop(true, true);
            slides.stop(true, true);

            mode == 'slide' ? (function () {
                if (index > currentIndex) {
                    slidesWrapper.animate({
                        left: '-=' + Math.abs(index - currentIndex) * childWidth + 'px'
                    }, delay);
                } else if (index < currentIndex) {
                    slidesWrapper.animate({
                        left: '+=' + Math.abs(index - currentIndex) * childWidth + 'px'
                    }, delay);
                } else {
                    return;
                }
            })() : (function () {
                if (slidesWrapper.children(':visible').index() == index) return;
                slidesWrapper.children().fadeOut(delay).eq(index).fadeIn(delay);
            })();

            try {
                controller.children('.' + cls).removeClass(cls);
                controller.children().eq(index).addClass(cls);
            } catch (e) { }

            currentIndex = index;

            options.exchangeEnd && typeof options.exchangeEnd == 'function' && options.exchangeEnd.call(this, currentIndex);
        }

        //stop
        function stop() {
            clearInterval(interval);
        }

        //prev frame
        function prev() {
            stop();

            currentIndex == 0 ? triggerPlay(length - 2) : triggerPlay(currentIndex - 2);

            isAuto && autoPlay();
        }

        //next frame
        function next() {
            stop();

            currentIndex == length - 1 ? triggerPlay(-1) : triggerPlay(currentIndex);

            isAuto && autoPlay();
        }

        //init
        init();

        //expose the Slider API
        return {
            prev: function () {
                prev();
            },
            next: function () {
                next();
            }
        }
    };

}(jQuery, window, document));
    $(function() {
        var bannerSlider = new Slider($('#banner_tabs'), {
            time: 5000,
            delay: 400,
            event: 'hover',
            auto: true,
            mode: 'fade',
            controller: $('#bannerCtrl'),
            activeControllerCls: 'active'
        });
        $('#banner_tabs .flex-prev').click(function() {
            bannerSlider.prev()
        });
        $('#banner_tabs .flex-next').click(function() {
            bannerSlider.next()
        });


//交互


        //测试
/*      var data=[
        {
            personImg: "images/1.jpg",
            personPosition: "指导老师",
            personName: "刘进"
        },
        {
            personImg: "images/1.jpg",
            personPosition: "工作室负责人",
            personName: "曾庆仲"
        },
        {
            personImg: "images/1.jpg",
            personPosition: "前端负责人",
            personName: "孙凤琴"   
        },
        {
            personImg: "images/1.jpg",
            personPosition: "后台负责人",
            personName: "刘奇"
        },
        {
            personImg: "images/1.jpg",
            personPosition: "主要成员",
            personName: "曾庆仲"
        },
        {
            personImg: "images/1.jpg",
            personPosition: "主要成员",
            personName: "曾庆仲"
        },
        {
            personImg: "images/1.jpg",
            personPosition: "主要成员",
            personName: "曾庆仲"
        },
        {
            personImg: "images/1.jpg",
            personPosition: "主要成员",
            personName: "曾庆仲"            
        },
        {
            proImg: "images/process-img5.png",
            proName: "经管学院",
            proInfo: "xxxxx",
        },
        {
            proImg: "images/process-img5.png",
            proName: "经管学院",
            proInfo: "xxxxx",
        },
        {
            proImg: "images/process-img5.png",
            proName: "经管学院",
            proInfo: "xxxxx",
        },
        {
            proImg: "images/process-img5.png",
            proName: "经管学院",
            proInfo: "xxxxx",
        }
    ]*/
/*
        $.ajax({
        type: "GET",
        url: "",
        data: {
            Manager: "GeekManager"
        },
        success:function(data) {
            if(data.status === '1') {
                for (var i = 0; i < 8; i++) {
                    var str11 = '';
                    str11 = '<li><a href=""><img width="233px" src="'
                            +data[i].personImg+'" title="<h3>'
                            +data[i].personPosition+
                            '<br>'
                            +data[i].personName+
                            '</h3>" /></a></li>';
                    $('.ceshi').append(str11);
                    }               
                } 
                else {
                    alert("error!");
            }
        }
    })*/
})


