$("#page-load").length > 0 && $(window).on('load',function() {
  $("#page-load").fadeOut(1e3, function() {
    $("#page-load").remove()
  })
});
(function($, window, document, undefined) {

  var pluginName = "metisMenu",
    defaults = {
      toggle: true,
      doubleTapToGo: false
    };

  function Plugin(element, options) {
    this.element = $(element);
    this.settings = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  Plugin.prototype = {
    init: function() {

      var $this = this.element,
        $toggle = this.settings.toggle,
        obj = this;

      if (this.isIE() <= 9) {
        $this.find("li.active").has("ul").children("ul").collapse("show");
        $this.find("li").not(".active").has("ul").children("ul").collapse("hide");
      } else {
        $this.find("li.active").has("ul").children("ul").addClass("collapse in");
        $this.find("li").not(".active").has("ul").children("ul").addClass("collapse");
      }

      //add the "doubleTapToGo" class to active items if needed
      if (obj.settings.doubleTapToGo) {
        $this.find("li.active").has("ul").children("a").addClass("doubleTapToGo");
      }

      $this.find("li").has("ul").children("a").on("click" + "." + pluginName, function(e) {
        e.preventDefault();

        //Do we need to enable the double tap
        if (obj.settings.doubleTapToGo) {

          //if we hit a second time on the link and the href is valid, navigate to that url
          if (obj.doubleTapToGo($(this)) && $(this).attr("href") !== "#" && $(this).attr("href") !== "") {
            e.stopPropagation();
            document.location = $(this).attr("href");
            return;
          }
        }

        $(this).parent("li").toggleClass("active").children("ul").collapse("toggle");

        if ($toggle) {
          $(this).parent("li").siblings().removeClass("active").children("ul.in").collapse("hide");
        }

      });
    },

    isIE: function() { //https://gist.github.com/padolsey/527683
      var undef,
        v = 3,
        div = document.createElement("div"),
        all = div.getElementsByTagName("i");

      while (
        div.innerHTML = "<!--[if gt IE " + (++v) + "]><i></i><![endif]-->",
        all[0]
      ) {
        return v > 4 ? v : undef;
      }
    },

    //Enable the link on the second click.
    doubleTapToGo: function(elem) {
      var $this = this.element;

      //if the class "doubleTapToGo" exists, remove it and return
      if (elem.hasClass("doubleTapToGo")) {
        elem.removeClass("doubleTapToGo");
        return true;
      }

      //does not exists, add a new class and return false
      if (elem.parent().children("ul").length) {
        //first remove all other class
        $this.find(".doubleTapToGo").removeClass("doubleTapToGo");
        //add the class on the current element
        elem.addClass("doubleTapToGo");
        return false;
      }
    },
    remove: function() {
      this.element.off("." + pluginName);
      this.element.removeData(pluginName);
    }
  };

  $.fn[pluginName] = function(options) {
    this.each(function() {
      var el = $(this);
      if (el.data(pluginName)) {
        el.data(pluginName).remove();
      }
      el.data(pluginName, new Plugin(this, options));
    });
    return this;
  };

})(jQuery, window, document);

$(document).ready(function() {
  $('<div id="navbar-height-col"></div>').insertAfter('#slidemenu');
  var menuSlector = '#slidemenu,#navbar-height-col';
  var toggler = '.navbar-toggle';
  var pagewrapper = '#page-wrapper, .navbar-plain';
  var menuwidth = '300px';
  var menuneg = '-300px';
  $("#slide-nav").on("click", toggler, function(e) {
    var selected = $(this).hasClass('slide-active');
    if ($('body').hasClass('sidemenu-left')) {
      $(menuSlector).stop().animate({
        left: selected ? menuneg : '0px'
      });
      $(pagewrapper).stop().animate({
        left: selected ? '0px' : menuwidth
      });
    } else {
      $(menuSlector).stop().animate({
        right: selected ? menuneg : '0px'
      });
      $(pagewrapper).stop().animate({
        right: selected ? '0px' : menuwidth
      });
    }
    $(this).toggleClass('slide-active', !selected);
    $(menuSlector).toggleClass('slide-active');
    $('#page-wrapper, body').toggleClass('slide-active');
  });
  var selected = '#slidemenu, #page-wrapper';
  $(window).on("resize", function() {
    if ($(window).width() > 1023 && $('.navbar-toggle').is(':hidden')) {

      $(menuSlector).removeClass('slide-active');
      $(selected).removeClass('slide-active');
      $(toggler).removeClass('slide-active');
      $(menuSlector).css('left', '');
      $(pagewrapper).css('left', '');
    }
  });
});

// Include js
function includeJs(jsFilePath) {
  var js = document.createElement("script");
  js.type = "text/javascript";
  js.src = jsFilePath;
  document.body.appendChild(js);
}

//SIde Menu Initiate
$(function() {
  $('#side-menu').metisMenu();
});
