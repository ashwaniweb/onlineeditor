$(document).ready(function() {
  $('.table-viewing, .table-log-history, .table-view-contact').DataTable({
      pageLength: 15,
      responsive: false,
      //scrollX: true,
      "lengthChange": false,
      "searching": false,
      "bInfo": false,
      //dom: '<"html5buttons"B>lTfgitp',
      buttons: [{
          extend: 'copy'
        }, {
          extend: 'csv'
        }, {
          extend: 'excel',
          title: 'ExampleFile'
        }, {
          extend: 'pdf',
          title: 'ExampleFile'
        },

        {
          extend: 'print',
          customize: function(win) {
            $(win.document.body).addClass('white-bg');
            $(win.document.body).css('font-size', '10px');

            $(win.document.body).find('table')
              .addClass('compact')
              .css('font-size', 'inherit');
          }
        }
      ],
      // "aoColumnDefs": [{
      //   'bSortable': true,
      //   'aTargets': [2, 5]
      // }],
      language: {
      paginate: {
        next: '<i class="fa fa-angle-right"></i>',
        previous: '<i class="fa fa-angle-left"></i>'
      }
    }
  });

  $('.table-data-scroll').DataTable({
      pageLength: 15,
      responsive: false,
      "lengthChange": false,
      "searching": false,
      "bInfo": false,
      "paging": false,
      buttons: [{
          extend: 'copy'
        }, {
          extend: 'csv'
        }, {
          extend: 'excel',
          title: 'ExampleFile'
        }, {
          extend: 'pdf',
          title: 'ExampleFile'
        },

        {
          extend: 'print',
          customize: function(win) {
            $(win.document.body).addClass('white-bg');
            $(win.document.body).css('font-size', '10px');

            $(win.document.body).find('table')
              .addClass('compact')
              .css('font-size', 'inherit');
          }
        }
      ],

      language: {
      paginate: {
        next: '<i class="fa fa-angle-right"></i>',
        previous: '<i class="fa fa-angle-left"></i>'
      }
    }
  });


  // Function for Nav Tabs Scrolling Horizontal

  //tabsResponsive();
  scrollingNavTabs();
  roomsAddRow();
  roomsDataManipulation();
  mediaDocManipulation();
  customScroll();
  resizeTableOnExpandIcon();
  currentActiveRow();
  allCheckBoxSelect();
  salesDetailTabShow();
  freeChargeAddRow()
 // addressOwnerEditable();


});

$(window).resize(function() {
  //tabsResponsive();
  customScroll();
  resizeTableOnExpandIcon();
});

// Function for Nav Tabs Scrolling Horizontal
function scrollingNavTabs() {
  // alert("scrollingNavTabs");
  if ($(window).width() <= 1350) {
    //console.log('yes');
    $('.panel-wrapper .nav-tabs').scrollingTabs({
      'destroy': 'true',
      cssClassLeftArrow: 'fa fa-angle-left fa-lg',
      cssClassRightArrow: 'fa fa-angle-right fa-lg'

    });
  } else if ($(window).width() >= 1280) {
    //console.log('no');
    // $('.panel-wrapper .nav-tabs').scrollingTabs({
    //       reverseScroll: true  
    // }); 
  }


}

// function tabsResponsive(){
//     if ($(window).width() <= 1360) {
//         scrollingNavTabs(); 
//     } 
// }


function roomsAddRow() {
  $(".add-room-btn").off('click').on('click', function() {
    var selectValue = $(this).siblings('.dropdownArea').find('.selectpicker :selected').text();
    var markup = '<tr class="detail-fields"><td><div class="custom-dynamic-checkbox">\
                             <label><input type="checkbox" value="" class="single_check"><span class="cr">\
                             <i class="cr-icon glyphicon glyphicon-ok"></i></span></label></div></td>\
                             <td class="detail-label">' + selectValue + '</td>\
                             <td class="detail-value"><div class="edit-value">\
                             <input type="text" class="form-control" placeholder="Enter Dimensions"></div></td>\
                             <td class="detail-value"><div class="edit-value">\
                             <input type="text" class="form-control" placeholder="Enter Sqm"></div></td></tr>';
    $(".table-rooms tbody").prepend(markup);
  });
}

function roomsDataManipulation() {

  var attrDisable = 'disabled';
  var attrValue = 'disabled';
  $(".save-rooms-btn").off('click').on('click', function() {
    $(".table-rooms tbody").find(".detail-value").find("input").attr(attrDisable, attrValue);
  });

  $(".edit-rooms-btn").off('click').on('click', function() {
    $(".table-rooms tbody").find(".detail-value").find("input").removeAttr("disabled");
  });

  
$(".remove-rooms-btn").off('click').on('click', function() {
  var _elementCheck= $(".remove-rooms-btn").parent('.btn-wrapper').siblings('.table-responsive').find('.table-rooms').find('tbody tr').find("input[type='checkbox']:checked");
      if(_elementCheck.is(':checked') == true){
        _elementCheck.closest('tr').remove();

     }
  });
}

function mediaDocManipulation() {
  $(".save-media-doc-btn").off('click').on('click', function() {
    $(".media-list-box").find(".media-list").find(".img-close").hide();
  });

  $(".edit-media-doc-btn").off('click').on('click', function() {
    $(".media-list-box").find(".media-list").find(".img-close").show();
    mediaFileClose();
  });
}

function mediaFileClose() {
  $(".media-list .img-close").off('click').on('click', function() {
    $(this).closest("div.col-md-3").hide();
  });
}

function customScroll() {
  $(".customScroll").mCustomScrollbar({
    theme: "dark-3",
    axis: "yx",
    autoHideScrollbar: true
  });
}

function resizeTableOnExpandIcon() {
  $(".expand-icon").resizable({
    handles: "s",
    alsoResize: ".resizeTable",
    resize: function(event, ui) {
      //$(".expand-icon").resizable( "option", "maxHeight", 32);
      //$(".expand-icon").resizable( "option", "minHeight", 14);
      // $( ".expand-icon" ).resizable( "option", "maxWidth", 14);
      // $( ".expand-icon" ).resizable( "option", "minWidth", 14);
     // $(".resizeTable").resizable("option", "minHeight", 100);
     //$(".resizeTable").resizable("option", "minHeight", 100);
    }
  });

  $(".resizeTable").resizable({
    handles: "s",
    resize: function(event, ui) {
      $(".resizeTable").resizable("option", "minHeight", 150);
    }
  });
  customScroll();
  
}

function currentActiveRow() {

  $(".table-active tbody tr").off("click").on("click", function() {
    $(".table-active").find("tbody tr").removeClass('current');
    $(this).addClass('current');
  });
}

function allCheckBoxSelect(){

  $('body').on('click', '.all_check', function(){
        if($('.all_check').is(':checked') == true)
        {
            $('.single_check').each(function(){ this.checked = true; });
        }

        if($('.all_check').is(':checked') == false)
        {
             $('.single_check').each(function(){ this.checked = false; });
        }

  });

}

function salesDetailTabShow(){
   $("body").on("change", ".market-status-wrap select", function(){
      var _selectedOptionVal = $(this).find('option:selected').text();
      var _containerElem = $(".panel-wrapper").find("ul.nav-tabs");
      if(_selectedOptionVal == "On Promise of Sale"){
         _containerElem.find("li.sale_list_tab").show();
         _containerElem.find("li.prc_list_tab, li.avl_list_tab").hide();
      }
      else{
         _containerElem.find("li.sale_list_tab").hide();
         _containerElem.find("li.prc_list_tab, li.avl_list_tab").show();      

      }
   })
}

function freeChargeAddRow(){
  $(".free-add-btn").off('click').on('click', function() {
    var markupRow = '<tr><td><input type="text" class="form-control input-field" id="" placeholder="Enter Here"></td>\
                     <td><span class="browse-icon"><div class="file-upload-panel">\
                     <input type="file" name="file-1[]" id="file-1" class="inputfile inputfile-1" data-multiple-caption="{count} files selected" multiple />\
                     </span><label for="file-1"><i class="fa fa-file-image-o" aria-hidden="true"></i>\
                     <span>Add Icon</span></label></div></td>\
                     <td><div class="custom-dynamic-checkbox"><label>\
                     <input type="checkbox" value="" class="">\
                     <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>\
                     </label></div></td></tr>';
    $(".table-free-amenities tbody").prepend(markupRow);
  });



  $(".addition-add-btn").off('click').on('click', function() {
    var markupRow = '<tr><td><input type="text" class="form-control input-field" id="" placeholder="Enter Here"></td>\
                     <td><div class="custom-dynamic-checkbox"><label><input type="checkbox" value="" class="">\
                     <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>\
                     </label></div></td><td><div class="form-group"><div class="dropdownArea">\
                     <select class="selectpicker"><option>Flat (Per Stay)</option></select>\
                     </div></div></td><td>€125</td>\
                    </tr>';
    $(".table-add-charge-amenities tbody").prepend(markupRow);
  });
}

         