//top
var btn = $("#top");
$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass("show");
    } else {
        btn.removeClass("show");
    }
});
btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
});
// burger
$(document).ready(function() {
  const myOffcanvas = $('.offcanvas-top');
  myOffcanvas.on('show.bs.offcanvas', function() {
      $('.catalog-btn').addClass('open');
      $('.burger').addClass('open');
  });
  myOffcanvas.on('hidden.bs.offcanvas', function() {
      $('.catalog-btn').removeClass('open');
      $('.burger').removeClass('open');
  });
});
$(document).ready(function() {
  const myOffcanvasTop = $('.offcanvas-top');
  const myOffset = 70;
  $(window).scroll(function() {
    if ($(this).scrollTop() > myOffset) {
      myOffcanvasTop.addClass('offcanvas-top_sidebar');
    } else {
      myOffcanvasTop.removeClass('offcanvas-top_sidebar');
    }
  });
});
//  sliders
$(document).ready(function(){
  $('.main-slider').owlCarousel({
    center: true,
    loop:true,
    dots: true,
    responsiveClass:true,
    nav: true,
    margin:36,
    navText: [
      '<img src="image/slider/arrowLeft.png" alt="">',
      '<img src="image/slider/arrowRight.png" alt="">',
    ],
    autoplay: true,
    autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1.1,
            margin:10,
        },
        576:{
            items:1,
        }
    }
  });
  $('.actual-goods_slider').owlCarousel({
    center: true,
      loop:true,
      dots: false,
      nav: false,
      autoplay: false,
      center: false,
      margin:20,
      items: 5,
      autoplayTimeout: 3000,
      responsive:{
          0:{
              items:2.2,
              margin: 10
          },
          576:{
              items:2.6
          },
          768:{
              items:3
          },
          992:{
              items:4
          },
          1200:{
              items:5,
          }
      }
  });
  $('.popular-categories_slider').owlCarousel({
    dots: false,
    nav: true,
    autoplay: false,
    center: false,
    responsiveClass:true,
    loop: false,
    margin:20,
    navText: [
        '<svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.6066 26.6066C24.5088 28.7044 21.8361 30.133 18.9264 30.7118C16.0166 31.2906 13.0006 30.9935 10.2597 29.8582C7.51886 28.7229 5.17618 26.8003 3.52796 24.3336C1.87973 21.8668 1 18.9667 1 16C1 13.0333 1.87973 10.1332 3.52796 7.66645C5.17618 5.19971 7.51886 3.27712 10.2597 2.14181C13.0006 1.00649 16.0166 0.709443 18.9264 1.28822C21.8361 1.867 24.5088 3.29561 26.6066 5.3934" stroke-width="2" stroke-linecap="round"/><path d="M17.5 8.5L11.5 16M11.5 16L17.5 23.5M11.5 16H29.5"  stroke-width="2" stroke-linecap="round"/></svg>',
        '<svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.3934 26.6066C6.49119 28.7044 9.16393 30.133 12.0736 30.7118C14.9834 31.2906 17.9994 30.9935 20.7403 29.8582C23.4811 28.7229 25.8238 26.8003 27.472 24.3336C29.1203 21.8668 30 18.9667 30 16C30 13.0333 29.1203 10.1332 27.472 7.66645C25.8238 5.19971 23.4811 3.27712 20.7403 2.14181C17.9994 1.00649 14.9834 0.709443 12.0736 1.28822C9.16393 1.867 6.49119 3.29561 4.3934 5.3934" stroke-width="2" stroke-linecap="round"/><path d="M13.5 8.5L19.5 16M19.5 16L13.5 23.5M19.5 16H1.5" stroke-width="2" stroke-linecap="round"/></svg>',
    ],
    responsive:{
        0:{
          items:2.4,
          margin: 10,
          nav: false,
          loop: true
        },
        576:{
          items:4
        },
        768:{
          items:5
        },
        992:{
          items:6
        },
        1200:{
          items:7,
        }
    }
  });
  $('.novelties-slider').owlCarousel({
    dots: false,
    autoplay: false,
    center: false,
    loop: false,
    nav: true,
    responsiveClass:true,
    margin:20,
    navText: [
        '<svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.6066 26.6066C24.5088 28.7044 21.8361 30.133 18.9264 30.7118C16.0166 31.2906 13.0006 30.9935 10.2597 29.8582C7.51886 28.7229 5.17618 26.8003 3.52796 24.3336C1.87973 21.8668 1 18.9667 1 16C1 13.0333 1.87973 10.1332 3.52796 7.66645C5.17618 5.19971 7.51886 3.27712 10.2597 2.14181C13.0006 1.00649 16.0166 0.709443 18.9264 1.28822C21.8361 1.867 24.5088 3.29561 26.6066 5.3934" stroke-width="2" stroke-linecap="round"/><path d="M17.5 8.5L11.5 16M11.5 16L17.5 23.5M11.5 16H29.5"  stroke-width="2" stroke-linecap="round"/></svg>',
        '<svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.3934 26.6066C6.49119 28.7044 9.16393 30.133 12.0736 30.7118C14.9834 31.2906 17.9994 30.9935 20.7403 29.8582C23.4811 28.7229 25.8238 26.8003 27.472 24.3336C29.1203 21.8668 30 18.9667 30 16C30 13.0333 29.1203 10.1332 27.472 7.66645C25.8238 5.19971 23.4811 3.27712 20.7403 2.14181C17.9994 1.00649 14.9834 0.709443 12.0736 1.28822C9.16393 1.867 6.49119 3.29561 4.3934 5.3934" stroke-width="2" stroke-linecap="round"/><path d="M13.5 8.5L19.5 16M19.5 16L13.5 23.5M19.5 16H1.5" stroke-width="2" stroke-linecap="round"/></svg>',
    ],
    responsive:{
      0:{
          items:2.2,
          loop: true,
      },
      576:{
          items:3
      },
      768:{
          items:3
      },
      1200:{
          items:4,
      }
    }
  });
  $('.goods-discount_slider').owlCarousel({
    dots: false,
    autoplay: false,
    center: false,
    loop: false,
    nav: true,
    responsiveClass:true,
    margin:20,
    navText: [
        '<svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.6066 26.6066C24.5088 28.7044 21.8361 30.133 18.9264 30.7118C16.0166 31.2906 13.0006 30.9935 10.2597 29.8582C7.51886 28.7229 5.17618 26.8003 3.52796 24.3336C1.87973 21.8668 1 18.9667 1 16C1 13.0333 1.87973 10.1332 3.52796 7.66645C5.17618 5.19971 7.51886 3.27712 10.2597 2.14181C13.0006 1.00649 16.0166 0.709443 18.9264 1.28822C21.8361 1.867 24.5088 3.29561 26.6066 5.3934" stroke-width="2" stroke-linecap="round"/><path d="M17.5 8.5L11.5 16M11.5 16L17.5 23.5M11.5 16H29.5"  stroke-width="2" stroke-linecap="round"/></svg>',
        '<svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.3934 26.6066C6.49119 28.7044 9.16393 30.133 12.0736 30.7118C14.9834 31.2906 17.9994 30.9935 20.7403 29.8582C23.4811 28.7229 25.8238 26.8003 27.472 24.3336C29.1203 21.8668 30 18.9667 30 16C30 13.0333 29.1203 10.1332 27.472 7.66645C25.8238 5.19971 23.4811 3.27712 20.7403 2.14181C17.9994 1.00649 14.9834 0.709443 12.0736 1.28822C9.16393 1.867 6.49119 3.29561 4.3934 5.3934" stroke-width="2" stroke-linecap="round"/><path d="M13.5 8.5L19.5 16M19.5 16L13.5 23.5M19.5 16H1.5" stroke-width="2" stroke-linecap="round"/></svg>',
    ],
    responsive:{
      0:{
          items:2.2,
          loop: true,
      },
      576:{
          items:3
      },
      768:{
          items:3
      },
      1200:{
          items:4,
      }
    }
  });
  $('.laptop-slider').owlCarousel({
    dots: false,
    autoplay: false,
    center: false,
    loop: false,
    nav: true,
    responsiveClass:true,
    margin:20,
    navText: [
        '<svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.6066 26.6066C24.5088 28.7044 21.8361 30.133 18.9264 30.7118C16.0166 31.2906 13.0006 30.9935 10.2597 29.8582C7.51886 28.7229 5.17618 26.8003 3.52796 24.3336C1.87973 21.8668 1 18.9667 1 16C1 13.0333 1.87973 10.1332 3.52796 7.66645C5.17618 5.19971 7.51886 3.27712 10.2597 2.14181C13.0006 1.00649 16.0166 0.709443 18.9264 1.28822C21.8361 1.867 24.5088 3.29561 26.6066 5.3934" stroke-width="2" stroke-linecap="round"/><path d="M17.5 8.5L11.5 16M11.5 16L17.5 23.5M11.5 16H29.5"  stroke-width="2" stroke-linecap="round"/></svg>',
        '<svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.3934 26.6066C6.49119 28.7044 9.16393 30.133 12.0736 30.7118C14.9834 31.2906 17.9994 30.9935 20.7403 29.8582C23.4811 28.7229 25.8238 26.8003 27.472 24.3336C29.1203 21.8668 30 18.9667 30 16C30 13.0333 29.1203 10.1332 27.472 7.66645C25.8238 5.19971 23.4811 3.27712 20.7403 2.14181C17.9994 1.00649 14.9834 0.709443 12.0736 1.28822C9.16393 1.867 6.49119 3.29561 4.3934 5.3934" stroke-width="2" stroke-linecap="round"/><path d="M13.5 8.5L19.5 16M19.5 16L13.5 23.5M19.5 16H1.5" stroke-width="2" stroke-linecap="round"/></svg>',
    ],
    responsive:{
      0:{
          items:2.2,
          loop: true,
      },
      576:{
          items:3
      },
      768:{
          items:2
      },
      1200:{
          items:3,
      }
    }
  });
})
// custom tab sidebar
$(document).ready(function() {
  $('.sidebar-tab-content .sidebar-tab:not(:first)').hide();
  $('.tab-links a').hover(function(e) {
    e.preventDefault();
    var currentTab = $('#' + $(this).data('tab'));
    $('.tab-links li').removeClass('active');
    $(this).parent().addClass('active');
    $('.sidebar-tab-content .sidebar-tab').hide();
    $(currentTab).show();
  });
});
// catalog more btn
$(document).ready(function() {
  $('.main-category-item').each(function() {
    let childCount = $(this).find('.children-category-item').length;
    if (childCount > 8) {
      $(this).find('.children-category-item').slice(8).hide();
      $(this).find('.children-categories').append('<div class="children-category-item_more"><a href="#!">Еще<span class="children-category-item_count">12</span><span class="icon-chevroneDown"></span></a></div>');
    }
  });
  $('.children-categories').on('click', '.children-category-item_more', function(e) {
    e.preventDefault();
    $(this).siblings('.children-category-item').show(); 
    $(this).remove();
  });
});
// column count catalog
function setColumnCount() {
  $('.main-categories').each(function () {
    const numCategoryItems = $(this).find('.main-category-item').length;
    if (numCategoryItems === 1) {
      $(this).css('column-count', '1');
    } else if (numCategoryItems === 2) {
      $(this).css('column-count', '2');
    } else {
      $(this).css('column-count', '3');
    }
  });
}
$(document).ready(function () {
  setColumnCount();
  $(window).on('resize', function () {
    if ($(window).width() < 992) {
      $('.main-categories').css('column-count', '1');
    }else if ($(window).width() < 1200) {
      $('.main-categories').css('column-count', '2');
    }else {
      setColumnCount();
    }
  });
});
// mailing
$('.mailing-form').each(function() {
  var $form = $(this);
  var $email = $form.find('.mailing-email');
  var $checkbox = $form.find('.mailing-form_check input[type="checkbox"]');
  var $submitButton = $form.find('button[type="submit"]');
  $email.add($checkbox).on('change', function() {
    if ($email.val() && $checkbox.is(':checked')) {
      $submitButton.prop('disabled', false);
      $submitButton.addClass('active')
    } else {
      $submitButton.prop('disabled', true);
      $submitButton.removeClass('active')
    }
  }); 
});
// phone
$('.phone-form').each(function() {
  var $form = $(this);
  var $name = $form.find('.phone-name');
  var $phone = $form.find('.phone-phone');
  var $submitButton = $form.find('button[type="submit"]');
  $name.add($phone).on('change', function() {
    if ($name.val() && $phone.val()) {
      $submitButton.prop('disabled', false);
      $submitButton.addClass('active')
    } else {
      $submitButton.prop('disabled', true);
      $submitButton.removeClass('active')
    }
  }); 
});
// stab
$(document).ready(function() {
  var expanded = false;
  $('.stab-btn').click(function() {
    var $this = $(this);
    var $text = $this.prev('.stab-text');
    if (expanded) {
      $text.removeClass('open');
      $this.find('.stab-icon').removeClass('arrow-up').addClass('arrow-down');
      $this.html('<button class="stab-btn">Развернуть<img class="icon" src="image/icons/arrRight.png" alt="arrow down"></button>');
    } else {
      $text.addClass('open');
      $this.find('.stab-icon').removeClass('arrow-down').addClass('arrow-up');
      $this.html('<button class="stab-btn">Свернуть<img class="icon" src="image/icons/arrLeft.png" alt="arrow down"></button>');
    }
    expanded = !expanded;
  });
});
// faq
$(document).ready(function() {
  $('.faq-accordion-header').click(function () {
    var $item = $(this).parent();

    if ($item.hasClass('active')) {
      $item.removeClass('active');
      $item.find('.faq-accordion-content').slideUp();
    } else {
      $('.faq-accordion-item').removeClass('active');
      $('.faq-accordion-item .faq-accordion-content').slideUp();
      $item.addClass('active');
      $item.find('.faq-accordion-content').slideDown();
    }
  });
});
// phone
document.addEventListener("DOMContentLoaded", function () {
  var eventCalllback = function (e) {
      var el = e.target,
      clearVal = el.dataset.phoneClear,
      pattern = el.dataset.phonePattern,
      matrix_def = "+998 __ ___ __ __",
      matrix = pattern ? pattern : matrix_def,
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = e.target.value.replace(/\D/g, "");
      if (clearVal !== 'false' && e.type === 'blur') {
          if (val.length < matrix.match(/([\_\d])/g).length) {
              e.target.value = '';
              return;
          }
      }
      if (def.length >= val.length) val = def;
      e.target.value = matrix.replace(/./g, function (a) {
          return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
      });
  }
  var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
  for (let elem of phone_inputs) {
      for (let ev of ['input', 'blur', 'focus']) {
          elem.addEventListener(ev, eventCalllback);
      }
  }
});
// footer menu
$(document).ready(function() {
  $('.category').on('click', function() {
    var $selectedCategory = $(this);
    $('.category').hide();
    $selectedCategory.show();
    $selectedCategory.find('.subcategories').show();
    $('#backButton').show();
  });
  
  $('#backButton').on('click', function() {
    $('.subcategories').hide();
    $('.category').show();
    $(this).hide();
  });
});
$('.footer-menu_item').click(function() { $(this).addClass('active').siblings().removeClass('active'); });
$('[data-bs-toggle="offcanvas"]').on('click', function() {
  var target = $(this).data('bs-target');
  $(target).on('hidden.bs.offcanvas', function() {
    $('[data-bs-target="'+target+'"]').removeClass('active');
  });
});
// category-price
$(document).ready(function(){
  $(".category-price").each(function(){
    const categoryPrice = $(this);
    const rangeInput = categoryPrice.find(".range-input input"),
    priceInput = categoryPrice.find(".price-input input"),
    range = categoryPrice.find(".category-price_progress");
    const resetBtn = categoryPrice.find(".category-price_reset--btn"),
    rangeMin = categoryPrice.find(".range-min"),
    rangeMax = categoryPrice.find(".range-max");
    let priceGap = 1000;
    priceInput.on("input", (e) => {
      let minPrice = parseInt(priceInput.eq(0).val()),
      maxPrice = parseInt(priceInput.eq(1).val());

      if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput.eq(1).attr("max")) {
        if (e.target.className === "input-min") {
          rangeInput.eq(0).val(minPrice);
          range.css("left", (minPrice / rangeInput.eq(0).attr("max")) * 100 + "%");
        } else {
          rangeInput.eq(1).val(maxPrice);
          range.css("right", 100 - (maxPrice / rangeInput.eq(1).attr("max")) * 100 + "%");
        }
      }
      categoryPrice.find(".input-min-value").text(minPrice);
      categoryPrice.find(".input-max-value").text(maxPrice);
    });
    resetBtn.on("click", (e) => {
      e.preventDefault();
      rangeInput.eq(0).val(rangeMin.attr("value"));
      rangeInput.eq(1).val(rangeMax.attr("value"));
      range.css("left", "0%");
      range.css("right", "0%");
      categoryPrice.find(".input-min-value").text(formatNumber(rangeMin.attr("value")));
      categoryPrice.find(".input-max-value").text(formatNumber(rangeMax.attr("value")));
      resetBtn.hide();
      $('.category-resetall_btn').removeClass("active");
      categoryPrice.find(".priceInptmin").attr('value', rangeMin.attr("value"));
      categoryPrice.find(".priceInptmax").attr('value', rangeMax.attr("value"));
      updateGoods();
    });
    $('.category-resetall_btn').click(function(){
      rangeInput.eq(0).val(rangeMin.attr("value"));
      rangeInput.eq(1).val(rangeMax.attr("value"));
      range.css("left", "0%");
      range.css("right", "0%");
      categoryPrice.find(".input-min-value").text(formatNumber(rangeMin.attr("value")));
      categoryPrice.find(".input-max-value").text(formatNumber(rangeMax.attr("value")));
      categoryPrice.find(".priceInptmin").attr('value', rangeMin.attr("value"));
      categoryPrice.find(".priceInptmax").attr('value', rangeMax.attr("value"));
      resetBtn.hide();
    })
    rangeInput.on("input", (e) => {
      let minVal = parseInt(rangeInput.eq(0).val()),
      maxVal = parseInt(rangeInput.eq(1).val());
      if (maxVal - minVal < priceGap) {
        if (e.target.className === "range-min") {
          rangeInput.eq(0).val(maxVal - priceGap);
          minVal = parseInt(rangeInput.eq(0).val());
        } else {
          rangeInput.eq(1).val(minVal + priceGap);
          maxVal = parseInt(rangeInput.eq(1).val());
        }
      }
      if (minVal == priceInput.eq(0).attr("min") && maxVal == priceInput.eq(1).attr("max")) {
        resetBtn.hide();
        $('.category-resetall_btn').removeClass("active")
        $('.category-apply_btn').removeClass("active")
      } else {
        resetBtn.show();
        $('.category-resetall_btn').addClass("active")
        $('.category-apply_btn').addClass("active")
      }
      
      priceInput.eq(0).val(minVal);
      priceInput.eq(1).val(maxVal);
      range.css("left", (minVal / rangeInput.eq(0).attr("max")) * 100 + "%");
      range.css("right", 100 - (maxVal / rangeInput.eq(1).attr("max")) * 100 + "%");
      categoryPrice.find(".input-min-value").text(formatNumber(minVal));
      categoryPrice.find(".priceInptmin").attr('value', minVal);
      categoryPrice.find(".input-max-value").text(formatNumber(maxVal));
      categoryPrice.find(".priceInptmax").attr('value', maxVal);
    });
  });

  function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
})

// category filter list
$(document).ready(function() {
  $('.category-filter_nav').each(function() {
    var $filterNav = $(this);
    var filterItems = $filterNav.find('.category-filter_list li');
    var itemsToShow = 10;
    filterItems.slice(itemsToShow).hide();
    $filterNav.find('.category-filter_showall--btn').on('click', function(event) {  
      event.preventDefault();
      itemsToShow = 20;
      filterItems.show();
      $(this).hide();
    });
    $filterNav.find('input[type="checkbox"]').on('change', function() {
      if ($filterNav.find('input[type="checkbox"]:checked').length > 0) {
        $filterNav.find('.category-filter_reset--btn').show();
        $('.category-resetall_btn').addClass("active")
        $('.category-apply_btn').addClass("active");
      } else {
        $filterNav.find('.category-filter_reset--btn').hide();
        $('.category-resetall_btn').removeClass("active")
        $('.category-apply_btn').removeClass("active");
      }
    });
    $filterNav.find('.category-filter_reset--btn').on('click', function(event) {
      event.preventDefault();
      $('.category-apply_btn').removeClass("active");
      $('.category-resetall_btn').removeClass("active")
      $filterNav.find('input[type="checkbox"]').prop('checked', false);
      $(this).hide();
      updateGoods();
    });
    if (filterItems.length > itemsToShow) {
      $filterNav.find('.category-filter_showall--btn').show();
    }
    $('.category-resetall_btn').click(function(){
      $filterNav.find('input[type="checkbox"]').prop('checked', false);
      $filterNav.find('.category-filter_reset--btn').hide();
      $(this).removeClass("active");
      $('.category-apply_btn').removeClass("active");
      $('.custom-offcanvas_selectsettings').text('')
      updateGoods();
    })
  });
});
// custom select
$(".custom-select").each(function() {
  var classes = $(this).attr("class"),
      id      = $(this).attr("id"),
      name    = $(this).attr("name");
  var template =  '<div class="' + classes + '">';
  template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
  template += '<div class="custom-options">';
  $(this).find("option").each(function() {
      template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
  });
  template += '</div></div>';

  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".custom-option:first-of-type").hover(function() {
  $(this).parents(".custom-options").addClass("option-hover");
}, function() {
  $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function() {
  $('html').one('click',function() {
      $(".custom-select").removeClass("opened");
  });
  $(this).parents(".custom-select").toggleClass("opened");
  event.stopPropagation();
});
$(".custom-option").on("click", function() {
  $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
  $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".custom-select").removeClass("opened");
  
  var trigger = $(this).parents(".custom-select").find(".custom-select-trigger");
  trigger.text($(this).text());
  trigger.removeClass().addClass("custom-select-trigger");
  trigger.addClass($(this).attr("class"));
});
// UPDATE GOODS FILTER !
function updateGoods() {
  var selectedPerformances = getSelectedPerformances();
  $.ajax({
    url: 'update-goods.php', 
    method: 'POST',
    data: {performances: selectedPerformances}, 
    success: function(response) {
      $('.category-goods .goods_item').html(response);
    },
    error: function() {
      console.log('Ошибка вывода товаров');
    }
  });
}
function getSelectedPerformances() {
  var selectedPerformances = [];

  $('.category-filter_nav input[type="checkbox"]:checked').each(function() {
    selectedPerformances.push($(this).val());
  });

  var minPrice = $('.priceInptmin').attr('value');
  var maxPrice = $('.priceInptmax').attr('value');

  selectedPerformances.push('min_price:' + minPrice);
  selectedPerformances.push('max_price:' + maxPrice);
  console.log(selectedPerformances);
  return selectedPerformances;
}
$('.category-filter_nav input[type="checkbox"]').on('change', function() {
  updateGoods();
});
$('.category-price input[type="range"]').on('change', function() {
  updateGoods();
});

function deleteCategoryFilterOn768() {
  var screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    var elementToRemove = document.getElementById("category-filter");
    if (elementToRemove) {
      elementToRemove.parentNode.removeChild(elementToRemove);
    }
  }
}
window.onload = deleteCategoryFilterOn768;
window.onresize = deleteCategoryFilterOn768;
// custom offcanvas
$(document).ready(function() {
  $(".open-custom-offcanvas-btn").on("click", function() {
    var target = $(this).data("target");
    $("#" + target).addClass("open");
  });

  $(".close-custom-offcanvas-btn").on("click", function() {
    $(this).closest(".custom-offcanvas").removeClass("open");
  });
});

$(document).ready(function() {
  $('.category-filter_nav').each(function() {
    var filterNav = $(this);
    var checkboxes = filterNav.find('input[type="checkbox"]');
    var target = filterNav.find('.custom-offcanvas_selectsettings:first');
    var clearBtn = filterNav.find('.category-filter_reset--btn')

    checkboxes.on('change', function() {
      var selectedItems = checkboxes.filter(':checked').map(function() {
        return $(this).next('label').text();
      }).get();

      var targetText = selectedItems.length > 0 ? selectedItems.join(', ') : '';

      target.text(targetText);
    });
    $(clearBtn).on('click', function(){
      target.text('');
    })
  });
});
const categoryList = document.querySelector('.category-nav_list');
let isDragging = false;
let startScrollX = 0;
let startX = 0;

categoryList.addEventListener('touchstart', (event) => {
  if (event.target.tagName.toLowerCase() === 'a') return;

  isDragging = true;
  startScrollX = categoryList.scrollLeft;
  startX = event.touches[0].pageX;
});

categoryList.addEventListener('touchmove', (event) => {
  if (!isDragging) return;

  const x = event.touches[0].pageX;
  const distance = x - startX;
  categoryList.scrollLeft = startScrollX - distance;
});

categoryList.addEventListener('touchend', () => {
  isDragging = false;
});



// const randomId = () => {
// 	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
// };
// const item = document.querySelectorAll('.goods_item')

// item.forEach(el => {
//   el.closest('.goods_item').setAttribute('data-id', randomId());
// });