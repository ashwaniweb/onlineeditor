$( document ).ready(function() {
    $('#MainBanner').owlCarousel({
        loop:true,
        margin:0,
        animateOut: 'fadeOut',
        nav:false,
        autoplay:true,
        dotsEach: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('#KeyPropertyBanner').owlCarousel({
        loop:true,
        margin:25,
        nav:true,
        autoplay:true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1200:{
                items:4
            }
        }
    })

    $('#EventHightlight').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        autoplay:true,
        loop:true,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:1,
                dots:true,
                nav:false
            },
            1000:{
                items:1,
                nav:true,
                dots:false
            }
        }
    })


    
    $( "#MainBanner .owl-dots" ).wrap( $( ".WerapContainer" ) );


    // Search tabs Jquery
     // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs li").click(function() {
        
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();        
        
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

      $(".tab_drawer_heading").removeClass("d_active");
      $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
      
    });
    /* if in drawer mode */
    $(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
      
      $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
      
      $("ul.tabs li").removeClass("active");
      $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
    
    $('ul.tabs li').last().addClass("tab_last");

    $('.datepicker').datepicker()

    // checkin checkout datepicker jquery
        var nowTemp = new Date();
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
     
    var checkin = $('#dpd1').datepicker({
      onRender: function(date) {
        return date.valueOf() < now.valueOf() ? 'disabled' : '';
      }
    }).on('changeDate', function(ev) {
      if (ev.date.valueOf() > checkout.date.valueOf()) {
        var newDate = new Date(ev.date)
        newDate.setDate(newDate.getDate() + 1);
        checkout.setValue(newDate);
      }
      checkin.hide();
      $('#dpd2')[0].focus();
    }).data('datepicker');
    var checkout = $('#dpd2').datepicker({
      onRender: function(date) {
        return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
      }
    }).on('changeDate', function(ev) {
      checkout.hide();
    }).data('datepicker');

    // Jquery for OffCanvas Menu
    var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
    }
    
      $('[data-toggle="offcanvas"]').click(function () {
            $('#wrapper').toggleClass('toggled');
      }); 
      $('.innerClose').click(function () {
            $('#wrapper').toggleClass('toggled');
      }); 
      
      $(".slide-down").click(function(){
            $(".box").slideToggle();
            $(".slide-down .fa-caret-down").toggleClass("fa-caret-up");
      });
      $(".slide-down1").click(function(){
            $(".box1").slideToggle();
             $(".slide-down1 .fa-caret-down").toggleClass("fa-caret-up");
      });
      
      $(".slide-down2").click(function(){
            $(".box2").slideToggle();
             $(".slide-down2 .fa-caret-down").toggleClass("fa-caret-up");
      });
      $('#ddlCars').multiselect({ 
         numberDisplayed: 1,
      });
      $('#ddlCars1').multiselect({ 
         numberDisplayed: 1,
      });
      $('#ddlCars2').multiselect({ 
         numberDisplayed: 1,
      });
      $('#ddlCars3').multiselect({ 
         numberDisplayed: 1,
      });

      $(function() {
            var header = $('.TopSearchBar');
            var topheader = $('.innerHeader');
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();

                if (scroll >= 250) {
                    header.addClass('fixed');
                    topheader.addClass('removeHeader');
                } else {
                    header.removeClass('fixed');
                    topheader.removeClass('removeHeader');
                }
            });
        })  
      


      
});

// $(window).load(function(){
//     $('#onload').modal('show');
// });
$(window).load(function(){
    $( ".Amenities .multiselect-selected-text" ).empty().append( "Select Amenities" );
    $( ".Facilities .multiselect-selected-text" ).empty().append( "Select Facilities" );
});




// bharat singh negi
jQuery(document).ready(function($) {
  $('#myCarousel, #myCarouselTwo, #myCarouselThree, #myCarouselfour, #myCarouselfive, #myCarouselsix').carousel({
      interval: 5000
  });
  $('#carousel-text').html($('#slide-content-0').html());
  //Handles the carousel thumbnails
 $('[id^=carousel-selector-]').click( function(){
      var id = this.id.substr(this.id.lastIndexOf("-") + 1);
      var id = parseInt(id);
      $('#myCarousel').carousel(id);
  });
 $('[id^=carousel-selector1-]').click( function(){
      var id = this.id.substr(this.id.lastIndexOf("-") + 1);
      var id = parseInt(id);        
      $('#myCarouselTwo').carousel(id);
  });
 $('[id^=carousel-selector2-]').click( function(){
      var id = this.id.substr(this.id.lastIndexOf("-") + 1);
      var id = parseInt(id);         
      $('#myCarouselThree').carousel(id);
  });
 $('[id^=carousel-selector3-]').click( function(){
      var id = this.id.substr(this.id.lastIndexOf("-") + 1);
      var id = parseInt(id);         
      $('#myCarouselfour').carousel(id);
  });
 $('[id^=carousel-selector4-]').click( function(){
      var id = this.id.substr(this.id.lastIndexOf("-") + 1);
      var id = parseInt(id);         
      $('#myCarouselfive').carousel(id);
  });
 $('[id^=carousel-selector5-]').click( function(){
      var id = this.id.substr(this.id.lastIndexOf("-") + 1);
      var id = parseInt(id);         
      $('#myCarouselsix').carousel(id);
  });
  // When the carousel slides, auto update the text
  $('#myCarousel, #myCarouselTwo, #myCarouselThree, #myCarouselfour, #myCarouselfive, #myCarouselsix').on('slid.bs.carousel', function (e) {
      var id = $('.item.active').data('slide-number');
      $('#carousel-text').html($('#slide-content-'+id).html());
  });

  // range slider
  $("#ex2, #ex3, #ex4, #ex5").slider({});
});

// booking tab section under third tab
$(document).ready(function() {
  $('.panel-body #credit').click(function() {
    /* Act on the event */
    $('.panel-body').find('#paypaltab').hide();
    $('.panel-body').find('#creditDebit').show();
    $(this).addClass('tabact');
    $('.panel-body').find('#paypal').removeClass('tabact');
  });
  $('.panel-body #paypal').click(function() {
    /* Act on the event */
    $('.panel-body').find('#creditDebit').hide();
    $('.panel-body').find('#paypaltab').show();
    $(this).addClass('tabact');
    $('.panel-body').find('#credit').removeClass('tabact');
  });
});