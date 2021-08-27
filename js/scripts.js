$(document).ready(function(){

	//phone masked
	$('input[type="tel"]').mask("+38 (999) 999-99-99",{placeholder:"+38 (___) ___-__-__"});
	$('input[type="tel"]').on('click', function() {
		$(this).setCursorPosition(4);
	})
	$.fn.setCursorPosition = function(pos) {
	  this.each(function(index, elem) {
	    if (elem.setSelectionRange) {
	      elem.setSelectionRange(pos, pos);
	    } else if (elem.createTextRange) {
	      var range = elem.createTextRange();
	      range.collapse(true);
	      range.moveEnd('character', pos);
	      range.moveStart('character', pos);
	      range.select();
	    }
	  });
	  return this;
	};

	//popup block
	$('.js-popup-wrap .js-btn-toggle').on('click', function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('body').removeClass('menu-show');
		} else {
			$('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
			$(this).addClass('active');
			if ($(this).parent().hasClass('main-menu-wrap')) {
				$('body').addClass('menu-show');
			}
		}
		return false;
	})
	$('.js-popup-wrap .js-btn-close').on('click', function() {
		$(this).parents('.js-popup-wrap').children('.js-btn-toggle').removeClass('active');
		$('body').removeClass('menu-show');
		return false;
	})
	$(document).click(function(event) {
	    if ($(event.target).closest(".js-popup-block").length) return;
	    $('.js-popup-wrap:not(.no-close) .js-btn-toggle').removeClass('active');
	    $('body').removeClass('menu-show');
	    event.stopPropagation();
	});
	$('.js-popup-wrap').each(function() {
		if ($(this).hasClass('js-popup-select')) {
			// alert(1)
			if ($(this).find('.js-popup-block').find('.active').length>0) {} else {
				$(this).find('.js-popup-block').find('li').eq(0).children('a').addClass('active');
			}
			var currentSelect = $(this).find('.js-popup-block').find('.active').html();
			$(this).find('.js-btn-toggle').html(currentSelect);
		}
	})
	$('.js-popup-wrap.js-popup-select .js-popup-block a').on('click', function() {
		if ($(this).hasClass('active')) {} else {
			$(this).parents('.js-popup-wrap').find('.js-popup-block').find('.active').removeClass('active');
			$(this).addClass('active');
		}
		$('.js-popup-wrap').each(function() {
			if ($(this).hasClass('js-popup-select')) {
				if ($(this).find('.js-popup-block').find('.active').length>0) {} else {
					$(this).find('.js-popup-block').find('li').eq(0).children('a').addClass('active');
				}
				var currentSelect = $(this).find('.js-popup-block').find('.active').html();
				$(this).find('.js-btn-toggle').html(currentSelect);
			}
		})
		$(this).parents('.js-popup-wrap').find('.js-btn-toggle').removeClass('active');
		return false;
	})

	//tabs
	$('.js-tabs-nav').each(function() {
		$('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
	})
	$('.js-tab-title').each(function() {
		if ($(this).hasClass('active')) {
			$(this).next('.js-tab-content').show(0);
		}
	})
	$('.js-tabs-nav li a').on('click', function() {
		if ($(this).hasClass('active')) {} else {
			$('.js-tab-block').removeClass('active');
			$(this).parents('.js-tabs-nav').find('.active').removeClass('active');
			$(this).addClass('active');
			$('.js-tabs-nav').each(function() {
				$('.js-tab-block[data-tab*="'+$(this).find('.active').attr('data-tab')+'"]').addClass('active');
			})
		}
		return false;
	})
	$('.js-tab-title').on('click' , function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active').next('.js-tab-content').slideUp(200);
		} else {
			$(this).addClass('active').next('.js-tab-content').slideDown(200);
		}
	})

    //btn tgl
    $('.js-btn-tgl').on('click', function () {
        $(this).toggleClass('active')
            .find('.btn-action-ico').toggleClass('active');
        return false;
    })

    //frm counter   
    $('.js-counter .js-button-counter-minus').on('click', function () {
        var cnt = $(this).parents('.js-counter').find('.js-input-counter').text();
        cnt = parseInt(cnt);
        if (cnt > 0) {
            $(this).parents('.js-counter').find('.js-input-counter').text(cnt - 1);
        }
        return false;
    })
    $('.js-counter .js-button-counter-plus').on('click', function () {
        var cnt = $(this).parents('.js-counter').find('.js-input-counter').text();
        $(this).parents('.js-counter').find('.js-input-counter').text(cnt - 1 + 2);
        return false;
    })


    //item-video
    $('.js-btn-video').on('click', function () {
        $(this).parents('.js-video').addClass('active');
        return false;
    })


    //file input 
    $('.js-field-file .js-file-button').on('click', function () {
        $(this).parent().find('input').click();
        return false;
    })
    $('input[type=file]').on('change', function () {
        var fileName = ('' + $(this).val()).replace(/^.*[\ \/]/, '');
        if (fileName.length > 150) {
            fileName = fileName.substring(0, 150) + '...';
        }
        if (fileName == "") {
            fileName = "Файл не обраний"
        }
        $('.js-field-file .js-file-caption').html(fileName);
    });
    
    


    //mobile menu
    $('.main-menu-wrap li ul').each(function () {
        $(this).parent().addClass('submenu');
    })
    $('.main-menu-wrap li a').on('click', function () {
        if ($(this).next('ul').length > 0) {
            if ($(window).innerWidth() < 1024) {
                if ($(this).parent().hasClass('open')) {
                    $(this).parent().removeClass('open').children('ul').slideUp(200);
                } else {
                    $('.main-menu-wrap li.open').removeClass('open').children('ul').slideUp(200);
                    $(this).parent().addClass('open').children('ul').slideDown(200);
                }
                return false;
            }
        }
    })
    $('.popup-menu-box .menu-block li ul').each(function () {
        $(this).parent().addClass('submenu');
    })
    $('.popup-menu-box .menu-block li a').on('click', function () {
        if ($(this).next('ul').length > 0) {
                if ($(this).parent().hasClass('open')) {
                    $(this).parent().removeClass('open').children('ul').slideUp(200);
                } else {
                    $('.popup-menu-box .menu-block li.open').removeClass('open').children('ul').slideUp(200);
                    $(this).parent().addClass('open').children('ul').slideDown(200);
                }
                return false;
        }
    })


    //main-slider-box
    $('.main-slider-box .slider').slick({
        dots: true,
        slidesToShow: 1,
        variableWidth: false,
        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
    });


    //clients-box
    $('.clients-box .slider').slick({
        dots: false,
        slidesToShow: 3,
        variableWidth: false,
        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                    variableWidth: false,
                    dots: true,
                    prevArrow: false,
                    nextArrow: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    infinite: false,
                    variableWidth: false,
                    dots: false,
                    prevArrow: false,
                    nextArrow: false
                }
            },
        ]
    });


    //card slider
    $('.photos-slider-box .slider-wrap .slider').slick({
        dots: false,
        slidesToShow: 1,
        infinite: false,
        prevArrow: false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            },
        ]
    });
    $('.photos-slider-box .slider-preview-wrap .slider').slick({
        dots: false,
        slidesToShow: 5,
        vertical: false,
        infinite: false,
        prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
        nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    //slidesToShow: 3,
                }
            },
        ]
    });
    $('.photos-slider-box .slider-preview-wrap .slider .item-photo').click(function () {
        let newSlide = $(this).attr('data-slide');
        $('.photos-slider-box .slider-wrap .slider').slick('slickGoTo', newSlide);
        return false;
    })
    
    
});
window.onload = function () {
    //field input
    let fieldInput = document.querySelectorAll('.js-input');
    if (fieldInput.length > 0) {
        for (i = 0; i < fieldInput.length; i++) {
            fieldInput[i].querySelector('label').onclick = function () {
                this.parentElement.classList.add('inp-active');
                this.parentElement.classList.remove('inp-valid');
                this.parentElement.querySelector('input').focus();
            }
            //input
            if (fieldInput[i].querySelector('input')) {
                fieldInput[i].querySelector('input').onfocus = function () {
                    this.parentElement.classList.add('inp-active');
                    this.parentElement.classList.remove('inp-valid');
                }
                fieldInput[i].querySelector('input').onblur = function () {
                    this.parentElement.classList.remove('inp-active');
                    if (this.value.length == "0") {
                        this.parentElement.classList.remove('inp-valid');
                    } else {
                        this.parentElement.classList.add('inp-valid');
                    }
                }
                //select
            } else if (fieldInput[i].querySelector('select')) {
                fieldInput[i].querySelector('select').onchange = function () {
                    this.parentElement.classList.add('inp-active');
                    this.parentElement.classList.remove('inp-valid');
                }
                fieldInput[i].querySelector('select').onblur = function () {
                    this.parentElement.classList.remove('inp-active');
                    if (this.options[this.selectedIndex].text === "") {
                        this.parentElement.classList.remove('inp-valid');
                    } else {
                        this.parentElement.classList.add('inp-valid');
                    }
                }
            }
        }
    }
}