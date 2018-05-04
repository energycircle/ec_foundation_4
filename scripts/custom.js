jQuery(document).ready(function($) {

  var replace_str = $('[class*="pane-service-request"] .views-field-field-button-text').text();
  var trimmed_str = $.trim(replace_str)
  $('[class*="pane-service-request"] form input.form-submit').val(trimmed_str);

  $('[class*="pane-service-request"] .view-service-request .views-field-field-button-text').remove();



  //--Click Back Top top

  $backTop = $(".top");

  $backTop.click(function(){
    $(window).scrollTop(0);
  });

  //--Smooth Scroll to Anchor links

  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });




  /*-----------------------------------------------------------------------*\


      Promotions
      -use as needed


  \*-----------------------------------------------------------------------*/


  if($('body').hasClass('node-type-promotion')){
      $title_str = $('.node-type-promotion .pane-node-field-display-title h2.title').text();

      $('.subnav-title-wrapper').append('<h1 id="page-title">'+$title_str+'</h1>');
      $('.node-type-promotion .pane-node-field-display-title').remove();
  }


  /*-----------------------------------------------------------------------*\


      Testimonial slider


  \*-----------------------------------------------------------------------*/

  if($('[class*="pane-testimonials-panel-pane-"] div').hasClass('flexslider')){
    $('[class*="pane-testimonials-panel-pane-"]').addClass('fs');
  }




  /*-----------------------------------------------------------------------*\


      Service Category


  \*-----------------------------------------------------------------------*/

  $('.pane-node-field-ref-page-service-category .block-content > .field > .field-items > .field-item').each( function( $index ) {
    $('.pane-node-field-ref-page-service-category .block-content > .field > .field-items > .field-item:eq('+$index+') .field-name-field-service-category-icon').insertBefore(
      $('.pane-node-field-ref-page-service-category .block-content > .field > .field-items > .field-item:eq('+$index+') > .node > .node-header')
    );
  });

  $('.pane-node-field-ref-serv-group-serv-cat .block-content > .field > .field-items > .field-item').each( function( $index ) {
    $('.pane-node-field-ref-serv-group-serv-cat .block-content > .field > .field-items > .field-item:eq('+$index+') .field-name-field-service-category-image').insertBefore(
      $('.pane-node-field-ref-serv-group-serv-cat .block-content > .field > .field-items > .field-item:eq('+$index+') > .node > .node-header')
    );
  });

  $('.pane-node-field-ref-serv-cat-services .block-content > .field > .field-items > .field-item').each( function( $index ) {
    $('.pane-node-field-ref-serv-cat-services .block-content > .field > .field-items > .field-item:eq('+$index+') .field-name-field-service-image').insertBefore(
      $('.pane-node-field-ref-serv-cat-services .block-content > .field > .field-items > .field-item:eq('+$index+') > .node > .node-header')
    );
  });


  if($('.html').hasClass('not-front')){
    $('.pane-node-field-ref-page-serv-cat .block-content > .field > .field-items > .field-item').each( function( $index ) {
      $('.pane-node-field-ref-page-serv-cat .block-content > .field > .field-items > .field-item:eq('+$index+') .field-name-field-service-category-image').insertBefore(
        $('.pane-node-field-ref-page-serv-cat .block-content > .field > .field-items > .field-item:eq('+$index+') > .node > .node-header')
      );
    });
  }

  if($('.html').hasClass('front')){
    $('.pane-node-field-ref-page-serv-cat .block-content > .field > .field-items > .field-item').each( function( $index ) {
      $('.pane-node-field-ref-page-serv-cat .block-content > .field > .field-items > .field-item:eq('+$index+') .field-name-field-service-category-image').prependTo(
        $('.pane-node-field-ref-page-serv-cat .block-content > .field > .field-items > .field-item:eq('+$index+') > .node > .node-header')
      );
    });
  }

  $('.custom-meet_the_team .field-name-field-featured-image').insertBefore( $('.custom-meet_the_team .pane-title') );

  $('.custom-faq .pane-title')
    .removeClass('block-title')
    .insertBefore('.custom-faq .node-content > .field-name-body');

    $('.custom-faq .node-header')
      .removeClass('block-title')
      .insertBefore('.custom-faq .node-content > .field-name-body');


  /*-----------------------------------------------------------------------*\


      Header Shrink


  \*-----------------------------------------------------------------------*/

  $(window).scroll(function(){

    // var $class_target = $('body');
    // var $anchor= $('#content-wrapper').offset().top;
    // var $scroll = $(window).scrollTop();
    //
    // if ($scroll >= $anchor) $class_target.addClass('shrink');
    // else $class_target.removeClass('shrink');
  });


  /*-----------------------------------------------------------------------*\


      Featured image detection


  \*-----------------------------------------------------------------------*/

  // use for config 01, 02
  // $('#breadcrumb-title-wrapper').insertBefore($('.EC-region-main > .region-inner'));
  $('#breadcrumb-title-wrapper').insertBefore($('.pane-node-body:first'));

  $feat_img = Array( '[class*="pane-node-field-featured-image"]',
                     '[class*="pane-node-field-service-group-image"]',
                     '[class*="pane-services-hero-image-or-video-panel-"]',
                     '.pane-node-field-featured-image',
                     '.pane-node-field-blog-image',
                     '[class*="pane-slides-home-panel-pane-"]',
                     '.pane-node-field-promotion-image'
                    //  ,
                    //  '[class*="pane-slides-home-panel-pane"]'
                    );



    $.each($feat_img, function($index, $value){

      if( $('.panel-pane').is($value)){

        $('#breadcrumb-title-wrapper').insertAfter($('.panel-pane'+$value));
        $('#breadcrumb-title-wrapper #secondary-menu-wrapper').prependTo($('.pane-node-body:first .block-content'));


        $('body').addClass('has-featured-image');

        if(!$('.html').is('.section-contact.page-node-224')){
          // $('[class*="pane-service-request-panel-pane-"]').insertAfter($value+' > .block-inner > .block-content');
        }
      }
    });


    /*-----------------------------------------------------------------------*\


        Compact Select Fields

    \*-----------------------------------------------------------------------*/

    function compact_select_fields( $target ){

      $label_text = $( $target+' label').text();
      $( $target+ ' label').css('display', 'none');
      $( $target+ ' select option:nth-child(1)').text('- '+$label_text+' -');
    }

    compact_select_fields('.form-item-field-address-und-0-administrative-area');

  /*-----------------------------------------------------------------------*\


      Reveal content on scroll
      -you'll need to include scrollreveal.min.js

  \*-----------------------------------------------------------------------*/

  //window.sr = ScrollReveal();
  //sr.reveal('.panel-pane[class*="service-request"]');
  //sr.reveal('.panel-pane[class*="testimonials-"]');
  //sr.reveal('.panel-pane[class*="blog-listing-"]');
  //sr.reveal('.panel-pane[class*="promotions-"]');
  //sr.reveal('panel-pane[class*="serv-"][class*="-promo"]');
});
