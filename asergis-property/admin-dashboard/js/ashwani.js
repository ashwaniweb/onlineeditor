 $(document).ready(function() {
   $('#shortFrom,#shortTo').bootDatepicker({
     todayBtn: "linked",
     keyboardNavigation: false,
     forceParse: false,
     calendarWeeks: true,
     autoclose: true
   });
 });
 // $("#calendar").datepicker({
 //   numberOfMonths: 12,
 //   changeMonth: true,
 //   mode: 'range'
 // });
 $(function() {
   var plus_5_days = new Date;
   plus_5_days.addDays(5);
   $('.shortCalendar').pickmeup_twitter_bootstrap({
     flat: true,
     date: [
       new Date,
       plus_5_days
     ],
     mode: 'range',
     calendars: 12
   });
   $('.longCalendar').pickmeup_twitter_bootstrap({
     flat: true,
     date: [
       new Date,
       plus_5_days
     ],
     mode: 'range',
     calendars: 12
   });
 });
 $(document).ready(function() {
   owl = $(".owl-carousel");
   owl.owlCarousel({
     loop: true,
     margin: 15,
     nav: true,
     smartSpeed: 900,
     dots:false,
     navContainer:'.owl-nav',
     navText: ["<i class='fa-chevron-left fa-2x'></i>","<i class='fa-chevron-right fa-2x'></i>"],   
     responsiveClass: true,
     responsive: {
       0: {
         items: 1,
         nav: true
       },
       600: {
         items: 2,
         nav: false
       },
       1000: {
         items: 3,
         nav: true,
         loop: false
       }
     }
   })
   setTimeout(function() {
     //owl.data('owlCarousel').destroy();
     owl.owlCarousel({
       loop: true,
       margin: 10,
       responsiveClass: true,
       responsive: {
         0: {
           items: 1,
           nav: true
         },
         600: {
           items: 2,
           nav: false
         },
         1000: {
           items: 3,
           nav: true,
           loop: false
         }
       }
     })
   }, 2000);
 })

 // var plus_5_days = new Date;
 // plus_5_days.addDays(5);
 // $('#calendar').pickmeup_twitter_bootstrap({
 //   flat: true,
 //   date: [
 //     new Date,
 //     plus_5_days
 //   ],
 //   mode: 'range',
 //   calendars: 12
 // });
