jQuery(document).ready(function($) {

  var replace_str = $('[class*="pane-service-request"] .views-field-field-button-text').text();
  var trimmed_str = $.trim(replace_str)
  $('[class*="pane-service-request"] form input.form-submit').val(trimmed_str);

  $('[class*="pane-service-request"] .view-service-request .views-field-field-button-text').remove();

  if($('body').hasClass('node-type-promotion')){
      $title_str = $('.node-type-promotion .pane-node-field-display-title h2.title').text();

      $('.subnav-title-wrapper').append('<h1 id="page-title">'+$title_str+'</h1>');
      $('.node-type-promotion .pane-node-field-display-title').remove();
  }

  
  if( $('.panel-pane').is('[class*="pane-node-field-featured-image"]') ||
   $('.panel-pane').is('[class*="pane-node-field-service-group-image"]') ||
   $('.panel-pane').is('[class*="pane-services-hero-image-or-video-panel-"]') ||
   $('.node-blog-post .panel-pane').is('.pane-node-field-blog-image')
     ){

      $('body').addClass('has-featured-image');
  }

  window.sr = ScrollReveal();
  //sr.reveal('.panel-pane[class*="service-request"]');
  //sr.reveal('.panel-pane[class*="testimonials-"]');
  //sr.reveal('.panel-pane[class*="blog-listing-"]');
  //sr.reveal('.panel-pane[class*="promotions-"]');
  //sr.reveal('panel-pane[class*="serv-"][class*="-promo"]');
});
