/* viewport width */
function viewport() {
    var e = window,
        a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return {
        width: e[a + 'Width'],
        height: e[a + 'Height']
    }
};
/* viewport width */

$(window).load(function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        $('body').addClass('ios');
    } else {
        $('body').addClass('web');
    }

    $('body').removeClass('loaded');

    if ($('.js-slider').length) {
        $('.js-slider').slick({
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            fade: true,
            autoplay: true,
            autoplaySpeed: 4000
        });
    }


    // info-list
    var infoList = $('.js-catalog-menu-name');

    if(infoList.length) {
        infoList.on('click', function(){
            event.preventDefault();
            var self = this;
            infoList.filter(function(index, el) {
                return el !== self;
            })
            .removeClass('active')
            .next('.catalog-submenu').slideUp();
            
            
            $(this).next('.catalog-submenu').slideToggle();
            
            $(this).toggleClass('active');
            
        });
    };

    $(".js-menu-button").click(function() {
        $('body').addClass('pushy-open-left');
    })
    $(".js-site-overlay, .js-menu-button2").click(function() {
        $('body').removeClass('pushy-open-left');
    })


    /*
           Validation form
    */
    function validateRegExp(regExp) {
        return function(value) {
            return regExp.test(value)
        }
    }

    function validateRequired(value) {
        return !!value;
    }

    function validateElement(data, target) {
        if (!data || !target) return false;

        var name = target.name;
        var value = target.value;
        var isValid = !data[name].some(function (el) {return el(value) === false;});
        var placeholder = placeholders[name]
        if (isValid) {
            $(target).addClass('valid');
            $(target).removeClass('invalid');
            $(target)[0].placeholder = placeholder.placeholder;
        } else {
            $(target).addClass('invalid');
            $(target).removeClass('valid');
            $(target)[0].placeholder = placeholder.error;
        }

        return isValid
    }

    function forceValidate(data, selector) {
        var key,
            value,
            isValid = true;

        for (key in data) {
            if (!validateElement(data, $('[name=' + key + ']' + selector)[0])) {
                isValid = false;
            }
        }

        return isValid;
    }

    var formData = {
        name: [
            validateRegExp(/^([а-я]|[А-Я]|[a-z]|[A-z]){2,40}$/),
        ],
        phone: [
            validateRegExp(/^\d{3,12}$/),
        ],
        email: [
            validateRegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        ]
    }

    var placeholders = {
        name: {
            placeholder: '',
            error: 'Name is mandatory field'
        },
        phone: {
            placeholder: '',
            error: 'Phone is mandatory field'
        },
        email: {
            placeholder:'',
            error: 'E-mail is mandatory field'
        }
    }

    var FORM_SELECTOR = '.form-validation'

    $(FORM_SELECTOR).blur(function(event) {
        validateElement(formData, event.target)
    })

    $('#send-support').click(function (event) {
        event.preventDefault();
        var isFormValid = forceValidate(formData, FORM_SELECTOR)
        if (isFormValid) {
            // TODO http request
            $(".form__message").addClass('show');
        }
    })

    /*
        END Validation form
    */

    // fancybox
    if ($('.js-fancybox').length) {
        if (window.innerWidth > 1199) {
            $('.js-fancybox').fancybox({
                margin: 10,
                padding: 0,
                openMethod: 'dropIn',
                openSpeed: 500,
                closeMethod: 'dropOut',
                closeSpeed: 500,
                wrapCSS: "popus-main",
                helpers: {
                    overlay: {
                        locked: true
                    }
                }
            });
        } else {
            $('.js-fancybox').fancybox({
                margin: 0,
                padding: 0,
                wrapCSS: "popup-main",
                scrolling: 'no',
                width: '100%',
                height: '100%',
                afterLoad: function() {
                    $(".fancybox-overlay").addClass("overlay-mob");
                },
                helpers: {
                    overlay: {
                        locked: true
                    }
                }
            });
        };
    }

    function disabledScroll() {
        y_offsetWhenScrollDisabled = $(window).scrollTop();
        $('body').addClass('scrollDisabled');
        $('html').css('top', -y_offsetWhenScrollDisabled);

    }

    function anabledScroll() {
        $('body').removeClass('scrollDisabled');
        $('html').css('top', 0);
        $('html, body').animate({
            scrollTop: y_offsetWhenScrollDisabled
        }, 1);
    }

    // mobile menu for catalog
    $('.js-catalog-menu-tuggler').click(function() {
        $(this).toggleClass('active');
        var el = $(this),
            textMore = el.attr('data-more'),
            textLess = el.attr('data-less'),
            textSpan = el.find('.js-more-text');
        el.parents('.js-catalog-menu').find('.js-catalog-menu-cont').slideToggle();
        textSpan.text(textSpan.text() == textMore ? textLess : textMore);
        return false;
    })

});



var handler = function() {

    var viewport_wid = viewport().width;

}

$(window).bind('load', handler);
$(window).bind('resize', handler);