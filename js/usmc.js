
var isMobile = 0, isAppleMobile = 0;
var wh = 0, ww = 0, vw = 0, st = 0;

var intro_title_top, intro_title_animated = 0;

var ryan_sec_top, ryan_text_animated = 0;
var lightning_pos = [['0vw', '10vw'], ['14vw', '-20vw'], ['-6vw', '37vw']];

var yash_sec_top, yash_text_animated;
var yash_mission_sec_top;

var erik_sec_top, erik_text_animated;
var erik_product_sec_top, roto_video_played = 0;

var sec_p = 200;                            // section background parallax position range
var ryan_s_top, ryan_s_h, ryan_s_bot;
var yash_t_top, yash_t_h, yash_t_bot;
var erik_em_top, erik_em_h, erik_em_bot;

var ryan_video_base_top, ryan_video_h, ryan_video_base_bottom;
var yash_video_base_top, yash_video_h, yash_video_base_bottom;


$(window).scroll(function (event) {
    st = $(this).scrollTop();
//    console.log('scroll=' + st);

    // Animate Intro Text
    if (!isMobile && !intro_title_animated && st + wh >= intro_title_top) {
        intro_title_animated = 1;
        Typed.new("#intro-title-typed", {
            stringsElement: document.getElementById('intro-title'),
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html', // or text
            // defaults to null for infinite loop
            loopCount: null,
            callback: function(){initializeAnimationArgs();},
            resetCallback: function() {}
        });

        $('#intro-details').delay(3500).animate({'opacity':1}, 1000);
    }

    // Animate Ryan text description
    if (!isMobile && !ryan_text_animated && st + wh * 0.5 >= ryan_sec_top) {
        ryan_text_animated = 1;

        Typed.new("#ryan-name-typed", {
            stringsElement: document.getElementById('ryan-name'),
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html', // or text
            // defaults to null for infinite loop
            loopCount: null,
            callback: function(){},
            resetCallback: function() {}
        });
        Typed.new("#ryan-title-typed", {
            stringsElement: document.getElementById('ryan-title'),
            typeSpeed: 20,
            backDelay: 500,
            loop: false,
            contentType: 'html', // or text
            // defaults to null for infinite loop
            loopCount: null,
            callback: function(){},
            resetCallback: function() {}
        });

        $('#ryan-detail').delay(3500).animate({'opacity':1}, 1000);
    }

    // Animate Yash text description
    if (!isMobile && !yash_text_animated && st + wh * 0.5 >= yash_sec_top) {
        yash_text_animated = 1;

        Typed.new("#yash-name-typed", {
            stringsElement: document.getElementById('yash-name'),
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html', // or text
            // defaults to null for infinite loop
            loopCount: null,
            callback: function(){},
            resetCallback: function() {}
        });
        Typed.new("#yash-title-typed", {
            stringsElement: document.getElementById('yash-title'),
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html', // or text
            // defaults to null for infinite loop
            loopCount: null,
            callback: function(){},
            resetCallback: function() {}
        });

        $('#yash-detail').delay(1000).animate({'opacity':1}, 1000);
    }

    // Animate Erik text description
    if (!isMobile && !erik_text_animated && st + wh * 0.5 >= erik_sec_top) {
        erik_text_animated = 1;

        Typed.new("#erik-name-typed", {
            stringsElement: document.getElementById('erik-name'),
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html', // or text
            // defaults to null for infinite loop
            loopCount: null,
            callback: function(){},
            resetCallback: function() {}
        });
        Typed.new("#erik-title-typed", {
            stringsElement: document.getElementById('erik-title'),
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html', // or text
            // defaults to null for infinite loop
            loopCount: null,
            callback: function(){},
            resetCallback: function() {}
        });

        $('#erik-detail').delay(1000).animate({'opacity':1}, 1000);
    }


    if (!isMobile) {
        if (st + wh > ryan_s_top && st < ryan_s_bot) {
            pos_y = sec_p / (wh + ryan_s_h) * (ryan_s_bot - st);
            pos_y -= sec_p / 2;
            $('#ryan-bio-parallax').css('background-position-y', pos_y);
        }
        if (st + wh > yash_t_top && st < yash_t_bot) {
            pos_y = sec_p / (wh + yash_t_h) * (yash_t_bot - st);
            pos_y -= sec_p / 2;
            $('#yash-bio-parallax').css('background-position-y', pos_y);
        }
        if (st + wh > erik_em_top && st < erik_em_bot) {
            pos_y = sec_p / (wh + erik_em_h) * (erik_em_bot - st);
            pos_y -= sec_p / 2;
            $('#erik-bio-parallax').css('background-position-y', pos_y);
        }
    }

    // Ryan, Yash, Erik Bio Parallax
    if (!isMobile && st + wh * 0.7 >= ryan_sec_top) {
        t = parseFloat(-75 + (st + wh * 0.7 - ryan_sec_top) / 14);
        $('#ryan-photo-div').css('background-position-y', t);
    }
    if (!isMobile && st + wh * 0.7 >= yash_sec_top) {
        t = parseFloat(-75 + (st + wh * 0.7 - yash_sec_top) / 14);
        $('#yash-photo-div').css('background-position-y', t);
    }
    if (!isMobile && st + wh * 0.7 >= erik_sec_top) {
        t = parseFloat(-75 + (st + wh * 0.7 - erik_sec_top) / 14);
        $('#erik-photo-div').css('background-position-y', t);
    }

    // Make Yash's mission map parallax
    if (!isMobile && st + wh > yash_mission_sec_top) {
        t = parseFloat(20 + (st + wh - yash_mission_sec_top) / 10);
        $('#yash-mission-map').css('top', t);
    }

    if (!isAppleMobile) {
        // Animate Robot video
        if (!roto_video_played && st + wh * 0.5 >= erik_product_sec_top) {
            roto_video_played = 1;
            document.getElementById("robot-video").play();
            setTimeout(function() {
                $('#erik-product-sec .section-buttons, #erik-product-sec #background label').fadeIn();
                $('#erik-robot-prev').animate({'opacity':1}, 1000);
            }, 9000);
        }
    }

    // For auto play/stop videos
    if ((st + wh*0.5 >= ryan_video_base_top && st <= ryan_video_base_top + ryan_video_h*0.5) &&         // Video is in viewport
        $('#ryan-video').data('autoplay') == 1 && $('#ryan-video').data('is-playing') == 0) {
        videojs("ryan-video").play();
        $('#ryan-video-play-btn').css('display', 'none');
        $('#ryan-video').data('is-playing', '1');
    }
    else if ((st + wh*0.5 < ryan_video_base_top || st > ryan_video_base_top + ryan_video_h*0.5) &&      // Video is out of viewoport
        $('#ryan-video').data('autoplay') == 1 && $('#ryan-video').data('is-playing') == 1) {
        videojs("ryan-video").pause();
        $('#ryan-video-play-btn').css('display', 'block');
        $('#ryan-video').data('autoplay', '0');
        $('#ryan-video').data('is-playing', '0');
    }

    // For auto play/stop videos
    if ((st + wh*0.5 >= yash_video_base_top && st <= yash_video_base_top + yash_video_h*0.5) &&         // Video is in viewport
        $('#yash-video').data('autoplay') == 1 && $('#yash-video').data('is-playing') == 0) {
        videojs("yash-video").play();
        $('#yash-video-play-btn').css('display', 'none');
        $('#yash-video').data('is-playing', '1');
    }
    else if ((st + wh*0.5 < yash_video_base_top || st > yash_video_base_top + yash_video_h*0.5) &&      // Video is out of viewoport
        $('#yash-video').data('autoplay') == 1 && $('#yash-video').data('is-playing') == 1) {
        videojs("yash-video").pause();
        $('#yash-video-play-btn').css('display', 'block');
        $('#yash-video').data('autoplay', '0');
        $('#yash-video').data('is-playing', '0');
    }
});


$(document).ready(function() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        isMobile = 1;
    }

    if( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
        isAppleMobile = 1;
    }

    $(window).bind("resize", initializeAnimationArgs);
    $(window).bind("orientationchange", initializeAnimationArgs);

    // When you click video area, ...
    $('.video-div').on('click',function (e) {
        e.preventDefault();

        $play_btn = $(this).find('button');
        is_playing = $(this).data('is-playing');
        if (is_playing == 1) {
            $play_btn.css('display', 'block');
            $(this).data('is-playing', '0');
            $(this).data('autoplay', '0');          // Remove auto play attribute when stops by clicking
        }
        else {
            $play_btn.css('display', 'none');
            $(this).data('is-playing', '1');
        }
    });

    // When you click Play button, ...
    $('.video-play-btn, .video-play-btn-small').on('click',function (e) {
        e.preventDefault();

        video_id = $(this).parent().attr('id');
        videojs(video_id).play();
        $(this).css('display', 'none');
        $(this).parent().data('is-playing', '1');

        return false;
    });

    // Scroll top arrow
    $('#scroll_top_arrow').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop':  0 //no need of parseInt here
        }, 1000, 'swing', function () {
        });
    });
});


$(window).load(function() {

});


function loadPage() {
    // Animate hexagon frame to left/right sides and fade in profile thumbs.
    $('#thumb-frame1').animate({'left':$('#profile-thumb-img1').offset().left}, 1500);
    $('#thumb-frame2').animate({'left':$('#profile-thumb-img2').offset().left}, 1500);
    $('#thumb-frame3').animate({'left':$('#profile-thumb-img3').offset().left}, 1500);
    $('.profile-thumb').delay(1500).animate({opacity:1}, 1000);
    $('#intro-sec-cover, .thumb-frame').delay(1500).fadeOut();

    $('#loading-label').delay(1500).animate({opacity:0}, 1000);

    $('.lazy-showing').delay(2000).animate({opacity:1}, 1000);        // Shows lazy elements after page loaded fully

    // Enable scrolling when page loaded fully
    setTimeout(function() { $('html, body').css('overflow-y', 'auto'); }, 2000);

    initializeAnimationArgs();

    // Animate illuminated formulas after loaded the intro page fully (fully loading: 3000ms).
    setTimeout(function() {
        animateIllumination();
        setInterval(animateIllumination, 10000);
    }, 3000);

    // Animate Lightning
    setInterval(function() {
        i = Math.floor(Math.random() * 3);      // Get the random index between 0 - 2
        $('#lightning-img').css('top', lightning_pos[i][0]);
        $('#lightning-img').css('left', lightning_pos[i][1]);
        $('#lightning-img').animate({width:'79.23vw'}, 100);
        $('#lightning-img').delay(600).animate({width:'5vw'}, 0);
    }, 3000);

    // Animate Intro Text
    if (!isMobile && !intro_title_animated && wh >= intro_title_top) {
        intro_title_animated = 1;
        Typed.new("#intro-title-typed", {
            stringsElement: document.getElementById('intro-title'),
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html', // or text
            // defaults to null for infinite loop
            loopCount: null,
            callback: function(){initializeAnimationArgs();},
            resetCallback: function() {}
        });

        $('#intro-details').delay(3500).animate({'opacity':1}, 1000);
    }


    if(isMobile) {
        // If it works on iOS mobile devices,
        // animate pulse images, play roto video at loading time.
        // Because scroll event and position:fixed CSS property don't work in iFrame on iOS mobile.

        roto_video_played = 1;
//        document.getElementById("robot-video").play();
        setTimeout(function() {
            $('#erik-product-sec .section-buttons, #erik-product-sec #background label').fadeIn();
            $('#erik-robot-prev').animate({'opacity':1}, 1000);
        }, 9000);
    }
}

function initializeAnimationArgs() {
    wh = $(window).height();
    ww = $(window).width();
    vw = (ww + 6) / 100; // 6px is scroll bar

    // Intro Animation
    intro_title_top = parseFloat($('#intro-title').offset().top);

    // Ryan Animation
    ryan_sec_top = parseFloat($('#ryan-bio-div').offset().top);

    // Yash Animation
    yash_sec_top = parseFloat($('#yash-bio-div').offset().top);
    yash_mission_sec_top = parseFloat($('#yash-mission-sec').offset().top);

    // Erik Animation
    erik_sec_top = parseFloat($('#erik-bio-div').offset().top);
    erik_product_sec_top = parseFloat($('#erik-product-sec').offset().top);

    ryan_s_top = $('#ryan-bio-parallax').offset().top;
    ryan_s_h = $('#ryan-bio-parallax').height();
    ryan_s_bot = ryan_s_top + ryan_s_h;

    yash_t_top = $('#yash-bio-parallax').offset().top;
    yash_t_h = $('#yash-bio-parallax').height();
    yash_t_bot = yash_t_top + yash_t_h;

    erik_em_top = $('#erik-bio-parallax').offset().top;
    erik_em_h = $('#erik-bio-parallax').height();
    erik_em_bot = erik_em_top + erik_em_h;

    // For video auto play/stop
    var $ryan_video = $('#ryan-video');
    ryan_video_base_top = $ryan_video.offset().top;
    ryan_video_h = $ryan_video.height();
    ryan_video_base_bottom = ryan_video_base_top + ryan_video_h;

    var $yash_video = $('#yash-video');
    yash_video_base_top = $yash_video.offset().top;
    yash_video_h = $yash_video.height();
    yash_video_base_bottom = yash_video_base_top + yash_video_h;
}


// Animate the illuminated formulas in Intro section
function animateIllumination() {
    $('#ill1-eq').animate({opacity:1}, 1000).delay(1000).animate({opacity:0}, 1000);
    setTimeout(function() {$('#ill2-eq').animate({opacity:1}, 1000).delay(1000).animate({opacity:0}, 1000);}, 3000);
    setTimeout(function() {$('#ill3-eq').animate({opacity:1}, 1000).delay(1000).animate({opacity:0}, 1000);}, 6000);
    setTimeout(function() {$('#ill4a-eq').animate({opacity:1}, 1000).delay(1000).animate({opacity:0}, 1000);}, 9000);
    setTimeout(function() {$('#ill4b-eq').animate({opacity:1}, 1000).delay(1000).animate({opacity:0}, 1000);}, 9000);
    setTimeout(function() {$('#ill5-eq').animate({opacity:1}, 1000).delay(1000).animate({opacity:0}, 1000);}, 12000);
}

// Preload assets for animations
function preload(arrayOfImages, parent_id) {
    $(arrayOfImages).each(function () {
        $('<img />').attr('src', '//cdn.wovendigitaldev.com/a-cure-for-wellness/images/ani/'+this).appendTo('#'+parent_id).addClass('ani-frame');
    });
}


function popupDlgCenterDual(url, title, w, h) {
// Fixes dual-screen position Most browsers Firefox
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;
    width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    if (w > ww) w = ww - 20;
    if (h > wh) h = wh - 20;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

// Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }
}


var logo_step = 0;
var frame_step = 0;
document.onreadystatechange = function(e) {
    // Move scroll top when page loading
    $('html, body').stop().animate({
        'scrollTop':  0 //no need of parseInt here
    }, 1, 'swing', function () {
    });

    if (document.readyState=="interactive") {
        var all_el = document.getElementsByTagName("*");
        $('#logo-cover').data('height', $('#logo-cover').height());
        $('#thumb-frame2-cover').data('width', $('#thumb-frame2-cover').width());

        logo_step = Number($('#logo-cover').data('height')) / all_el.length;
        frame_step = Number($('#thumb-frame2-cover').data('width')) / all_el.length;

        for (var i=0, max=all_el.length; i < max; i++) {
            check_element(all_el[i]);
        }
    }
}

function check_element(el) {
    var all_el = document.getElementsByTagName("*");

    if($(el).on()) {
        var logo_height = Number($('#logo-cover').data('height')) - logo_step;
        var frame_width = Number($('#thumb-frame2-cover').data('width')) - frame_step;

        $('#logo-cover').data('height', logo_height);
        $('#thumb-frame2-cover').data('width', frame_width);

        $("#logo-cover").animate({height:logo_height}, 1, function(){
            if($('#thumb-frame2-cover').width() <= 0 && $('#logo-cover').height() <= 0) {
                loadPage();
            }
        });

        $("#thumb-frame2-cover").animate({width:frame_width}, 1, function(){
            if($('#thumb-frame2-cover').width() <= 0 && $('#logo-cover').height() <= 0) {
                loadPage();
            }
        });
    }
    else {
        check_element(el);
    }
}


$(document).ready(function() {
/*
    var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel"; //FF doesn't recognize mousewheel as of FF3.x

    $('body').bind(mousewheelevt, function(e){

        if (is_scrolling == 1) {    // If sticky scroll is working, ignore scroll event.
            e.preventDefault();     // fix jump on Chrome
            e.stopPropagation();
            return;
        }

        var st = $(window).scrollTop();
        var evt = window.event || e; //equalize event object
        evt = evt.originalEvent ? evt.originalEvent : evt; //convert to originalEvent if possible
        var delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta; //check for detail first, because it is used by Opera and FF

        if (yash_bottle_ongoing === 1 && ((delta < 0 && yash_bottle_stage < 6) || (delta > 0 && yash_bottle_stage > 0))) {
            e.preventDefault(); // fix jump on Chrome
        }
        else {
            yash_bottle_ongoing = 0;
        }

        if (yash_bottle_ongoing === 0) {
            if (delta < 0 && st + 25 * vw > yash_sec_top && yash_bottle_stage == 0) {
                yash_bottle_ongoing = 1;
                is_scrolling = 1;
                $("html, body").stop().animate({'scrollTop': yash_sec_top - 4*vw}, 1000, "swing", function() {
                    setTimeout(function() {
                        is_scrolling = 0;
                    }, 100);
                });
            }
            else if (delta > 0 && st - 25 * vw < yash_sec_top && st > yash_sec_top) {
                yash_bottle_ongoing = 1;
                is_scrolling = 1;
                $("html, body").stop().animate({'scrollTop': yash_sec_top - 4*vw}, 1000, "swing", function() {
                    setTimeout(function() {
                        is_scrolling = 0;
                    }, 100);
                });
            }
        }
        else {      // If Yash bottle line is in drawing process
            if (delta < 0) {    // Scroll down
                yash_bottle_stage++;
                if (yash_bottle_stage > 6) yash_bottle_stage = 6;
                showYashBottleStage(yash_bottle_stage);
                is_scrolling = 1;
                setTimeout(function() {
                    is_scrolling = 0;
                }, 1000);
            }
            else {
                yash_bottle_stage--;
                if (yash_bottle_stage < 0) yash_bottle_stage = 0;
                showYashBottleStage(yash_bottle_stage);
                is_scrolling = 1;
                setTimeout(function() {
                    is_scrolling = 0;
                }, 1000);
            }
        }

        e.stopPropagation();
        return;

    }).keydown(function(e) {
        if (is_scrolling == 1) {    // If sticky scroll is working, ignore scroll event.
            e.preventDefault();     // fix jump on Chrome
            e.stopPropagation();
            return;
        }

        var st = $(window).scrollTop();
        var key = e.which;

        if (key == 36) {        // HOME key
            yash_bottle_ongoing = 0;
            yash_bottle_stage = 0;
            showYashBottleStage(yash_bottle_stage);
            return;
        }
        else if (key == 35) {   // END key
            yash_bottle_ongoing = 0;
            yash_bottle_stage = 6;
            showYashBottleStage(yash_bottle_stage);
            return;
        }

        if (yash_bottle_ongoing === 1 && ((key == 40 && yash_bottle_stage < 6) || (key == 38 && yash_bottle_stage > 0))) {
            // 40: Down Arrow key, 38: Up Arrow key
            e.preventDefault(); // fix jump on Chrome
        }
        else {
            yash_bottle_ongoing = 0;
        }

        if (yash_bottle_ongoing === 0) {
            if (key == 40 && st + 25 * vw > yash_sec_top && yash_bottle_stage == 0) {
                yash_bottle_ongoing = 1;
                is_scrolling = 1;
                $("html, body").stop().animate({'scrollTop': yash_sec_top - 4*vw}, 1000, "swing", function() {
                    setTimeout(function() {
                        is_scrolling = 0;
                    }, 100);
                });
            }
            else if (key == 38 && st - 25 * vw < yash_sec_top && st > yash_sec_top) {
                yash_bottle_ongoing = 1;
                is_scrolling = 1;
                $("html, body").stop().animate({'scrollTop': yash_sec_top - 4*vw}, 1000, "swing", function() {
                    setTimeout(function() {
                        is_scrolling = 0;
                    }, 100);
                });
            }
        }
        else {      // If Yash bottle line is in drawing process
            if (key == 40) {    // Scroll down
                yash_bottle_stage++;
                if (yash_bottle_stage > 6) yash_bottle_stage = 6;
                showYashBottleStage(yash_bottle_stage);
                is_scrolling = 1;
                setTimeout(function() {
                    is_scrolling = 0;
                }, 1000);
            }
            else {
                yash_bottle_stage--;
                if (yash_bottle_stage < 0) yash_bottle_stage = 0;
                showYashBottleStage(yash_bottle_stage);
                is_scrolling = 1;
                setTimeout(function() {
                    is_scrolling = 0;
                }, 1000);
            }
        }

        e.stopPropagation();
        return;

    });
*/

});

// Robot Section
$('.sensors60').click(function(){
    $('#erik-product-bg-rightblur').fadeOut(600);
    $('#erik-product-bg-leftblur').fadeIn(600);

    $('#product-sensor').fadeIn(600);
    $('#video-container-product-sensor').fadeIn(600);
});

$('.mapsensor').click(function(){
    $('#erik-product-bg-rightblur').fadeOut(600);
    $('#erik-product-bg-leftblur').fadeIn(600);

    $('#product-mapping').fadeIn(600);
    $('#video-container-product-mapping').fadeIn(600);
});

$('.humanrobot').click(function(){
    $('#erik-product-bg-leftblur').fadeOut(600);
    $('#erik-product-bg-rightblur').fadeIn(600);

    $('#product-human').fadeIn(600);
    $('#video-container-product-human').fadeIn(600);
});

function onCloseBtn() {
    $('#product-sensor').fadeOut(600);
    $('#product-human').fadeOut(600);
    $('#product-mapping').fadeOut(600);

    $('#erik-product-bg-rightblur').fadeOut(600);
    $('#erik-product-bg-leftblur').fadeOut(600);

    //Hide Videos
//    videojs("sensor-video").pause();
    $('#sensor-video-play-btn').css('display', 'block');
    $('#sensor-video').data('autoplay', '0');
    $('#sensor-video').data('is-playing', '0');

//    videojs("mapping-video").pause();
    $('#mapping-video-play-btn').css('display', 'block');
    $('#mapping-video').data('autoplay', '0');
    $('#mapping-video').data('is-playing', '0');

//    videojs("human-video").pause();
    $('#human-video-play-btn').css('display', 'block');
    $('#human-video').data('autoplay', '0');
    $('#human-video').data('is-playing', '0');

    $('#video-container-product-sensor').fadeOut(600);
    $('#video-container-product-mapping').fadeOut(600);
    $('#video-container-product-human').fadeOut(600);
}

// Yash's Bottle Section
$('.bottlepoint1').click(function(){
    $('#yash-bottle-left').fadeIn(600);
    $('#yash-bottle-right').fadeIn(600);

    $('#popup-bottle-1').fadeIn(600);
});

$('.bottlepoint2').click(function(){
    $('#yash-bottle-left').fadeIn(600);
    $('#yash-bottle-right').fadeOut(600);

    $('#popup-bottle-2').fadeIn(600);
});

$('.bottlepoint3').click(function(){
    $('#yash-bottle-left').fadeOut(600);
    $('#yash-bottle-right').fadeIn(600);

    $('#popup-bottle-3').fadeIn(600);
});

$('.bottlepoint4').click(function(){
    $('#yash-bottle-left').fadeIn(600);
    $('#yash-bottle-right').fadeOut(600);

    $('#popup-bottle-4').fadeIn(600);
});

$('.bottlepoint5').click(function(){
    $('#yash-bottle-left').fadeOut(600);
    $('#yash-bottle-right').fadeIn(600);

    $('#popup-bottle-5').fadeIn(600);
});

function onCloseBottleBtn() {
    $('#popup-bottle-1').fadeOut(600);
    $('#popup-bottle-2').fadeOut(600);
    $('#popup-bottle-3').fadeOut(600);
    $('#popup-bottle-4').fadeOut(600);
    $('#popup-bottle-5').fadeOut(600);

    $('#yash-bottle-left').fadeOut(600);
    $('#yash-bottle-right').fadeOut(600);
}
