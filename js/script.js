$(function () {
    // $('.back_to_top').click(function(){
    //     $('html').animate({ scrollTop: 0 }, 'slow'); return true; 
    // });
    let home_hero_section = $('#section-hero').waypoint(function (direction) {
        // anime.timeline({
        //     easing: 'easeOutExpo',
        //     duration: 2000
        // }).add({
        //     targets: '#home_hero',
        //     opacity: [0, 1]
        // });
        anime.timeline({
            easing: 'easeOutExpo',
            duration: 2000
        }).add({
            targets: '.hero-title',
            translateY: ['50%', '0'],
            opacity: [0, 1]
        });
        anime.timeline({
            easing: 'easeOutExpo',
            duration: 2000
        }).add({
            targets: '.cosmonaut_1',
            translateX: ['50%', '0'],
            translateY: ['-50%', '-50%'],
            opacity: [0, 1]
        });
    }, {
        offset: 0
    });
    var anime_ele = $('.anime-ele');
    var viewpint = [];
    // console.log(anime_ele);
    anime_ele.each(function (index, element) {
        viewpint[index] = new Waypoint.Inview({
            element: $(element),
            enter: function (direction) {
                if (index > 3 && index < 9) {
                    setTimeout(function () {
                        $(element).addClass('visible animated');
                        $(element).addClass('viewpint_' + index);
                    }, (index - 3) * 300)
                } else {
                    $(element).addClass('visible animated');
                    $(element).addClass('viewpint_' + index);
                }


            },
            entered: function (direction) {

            },
            exit: function (direction) {

            },
            exited: function (direction) {
                // $(element).removeClass('visible animated');
                // $(element).removeClass('viewpint_' + index);
            }
        });
    }); {

    }
    // var viewpint_ele_0 = new Waypoint.Inview({
    //     element: $('.alaskan-text-col'),
    //     enter: function(direction){
    //         $('.alaskan-text-col').addClass('visible animated');
    //         $('.alaskan-text-col').addClass('viewpint_ele_0');

    //     },
    //     entered: function(direction){

    //     },
    //     exit: function(direction) {

    //     },
    //     exited: function(direction) {
    //         $('.alaskan-text-col').removeClass('visible animated');
    //         $('.alaskan-text-col').removeClass('viewpint_ele_0');
    //     }
    // });
    // $('.luy-collaps ').click(function(){
    //     if($(this).hasClass('closed')){
    //         $(this).removeClass('closed').text("Đọc ít hơn...");
    //         $(this).parent().find('.luy-content').addClass('opened');
    //     }
    //     else
    //     {
    //         $(this).addClass('closed').text("Đọc thêm...");
    //         $(this).parent().find('.luy-content').removeClass('opened');
    //     }
    // });

    $('.show-table').click(function () {
        if ($(this).parent().find('.table-container').hasClass('open')) {
            $(this).parent().find('.table-container').slideUp();
            $(this).parent().find('.table-container').removeClass('open')
            $(this).text('Hiển thị bảng');
        }
        else {
            $(this).parent().find('.table-container').slideDown();
            $(this).parent().find('.table-container').addClass('open')
            $(this).text('Ẩn bảng');
        }

    });

});