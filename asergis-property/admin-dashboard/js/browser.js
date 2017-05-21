/*------------------- 
File Name : "browser.js"
Description : This js file detects the client browser and gives css classes to the body for browser compatible theming
--------------------*/

$(document).ready(function() {
  checkBrowser();

  $('body').on('keydown', '.user_login_form #password', function(event) {
    var $keycode = (event.keyCode ? event.keyCode : event.which);
    if ($keycode === 13) {
      DoLogin();
      event.preventDefault();
    }

  });
  $('body').on('keydown', '.user_login_form #emailaddress', function(event) {
    var $keycode = (event.keyCode ? event.keyCode : event.which);
    if ($keycode === 13) {
      DoLogin();
      event.preventDefault();
    }

  });

  if (typeof session_file_name != 'undefined' && session_file_name != '') {
    checkUserInactivity();
  }
});

function checkBrowser() {
  var val = navigator.userAgent.toLowerCase();
  if (val.indexOf("firefox") > -1) {
    $('body').addClass('firefox');
  } else if (val.indexOf("opera") > -1) {
    $('body').addClass('opera');
  } else if (val.indexOf("msie") > -1) {
    $('body').addClass('ie');
    // get ie version
    version = parseFloat(navigator.appVersion.split("MSIE")[1]);
    $('body').addClass('ie' + version);
  } else if (val.match('chrome') != null) {
    $('body').addClass('chrome');
  } else if (val.indexOf("safari") > -1) {
    $('body').addClass('safari');
  }
}
