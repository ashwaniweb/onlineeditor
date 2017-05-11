var htmEditor,
  cssEditor,
  jsEditor,
  jqconsole;
(function cloudEdit() {
  "use strict";
  // Globals
  // ---
  // For buildOutput() creation. Toggle includes in html output.
  var use = {
    Autoprefixer: false,
    Less: false,
    Sass: false,
    Modernizr: false,
    Normalize: false,
    Bootstrap: false,
    Foundation: false,
    liveEdit: true
  };

  // ---
  // End Globals

  // Check if a new appcache is available on page load. If so, ask to load it.
  window.addEventListener("load", function(e) {
    window.applicationCache.addEventListener("updateready", function(e) {
      if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
        // Browser downloaded a new app cache.
        if (confirm("A new version of this site is available. Load it?")) {
          window.location.reload();
        }
      } else {
        // Manifest didn't changed. Do NOTHING!
      }
    }, false);
  }, false);

  // Create Text Area panes
  // Init ACE Editor and set options;
  (function initAce() {
    var aceTheme;
    if (localStorage.getItem("theme")) {
      aceTheme = localStorage.getItem("theme");
    } else {
      aceTheme = "ace/theme/chrome";
    }

    //////////////////////////////////////// Editor Start //////////////////////////////////////
    $('.inner').css('font-size', '16px');
    /*HTMl Editor*/
    htmEditor = ace.edit("htmEditor");
    htmEditor.$blockScrolling = Infinity;
    htmEditor.getSession().setUseWrapMode(true);
    htmEditor.getSession().setMode("ace/mode/html");
    htmEditor.setTheme("ace/theme/twilight");
    htmEditor.setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: true,
      tabSize: 1,
      useSoftTabs: true
    });
    htmEditor.commands.on("afterExec", function(e) {
      if (e.command.name == "insertstring" && /^[\<.]$/.test(e.args)) {
        htmEditor.execCommand("startAutocomplete")
      }
    });
    htmEditor.setShowPrintMargin(false);
    htmEditor.setHighlightActiveLine(false);
    /*CSS Editor*/
    cssEditor = ace.edit("cssEditor");
    cssEditor.$blockScrolling = Infinity;
    cssEditor.getSession().setUseWrapMode(true);
    cssEditor.getSession().setMode("ace/mode/css");
    cssEditor.setTheme("ace/theme/twilight");
    cssEditor.setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: true,
      tabSize: 1,
      useSoftTabs: true
    });
    cssEditor.commands.on("afterExec", function(e) {
      if (e.command.name == "insertstring" && /^[\w\:.]$/.test(e.args)) {
        cssEditor.execCommand("startAutocomplete")
      }
    });
    cssEditor.setShowPrintMargin(false);
    cssEditor.setDisplayIndentGuides(false);
    cssEditor.setHighlightActiveLine(false);
    /*JS Editor*/
    jsEditor = ace.edit("jsEditor");
    jsEditor.$blockScrolling = Infinity;
    jsEditor.getSession().setUseWrapMode(true);
    jsEditor.getSession().setMode("ace/mode/javascript");
    jsEditor.setTheme("ace/theme/twilight");
    jsEditor.setOptions({
      enableBasicAutocompletion: true,
      enableSnippets: true,
      tabSize: 1,
      useSoftTabs: true
    });
    jsEditor.commands.on("afterExec", function(e) {
      // activate autocomplete when paren or .(dot) is typed
      if (e.command.name == "insertstring" && /^[\\.\(.]$/.test(e.args)) {
        jsEditor.execCommand("startAutocomplete")
      }
    });
    jsEditor.setShowPrintMargin(false);
    jsEditor.setDisplayIndentGuides(false);
    jsEditor.setHighlightActiveLine(false);

    // Retrieve values from sessionStorage if set
    (function sessionStorageGet() {
      if (sessionStorage.getItem("html")) {
        htmEditor.setValue(sessionStorage.getItem("html"));
        htmEditor.clearSelection();
      } else {
        htmEditor.setValue("<!-- Do not place html/head/body tags here.\n" +
          "Insert the tags as would normally be used in your\n" +
          "body element. <script> tags ARE allowed, though\n" +
          "they're best placed at the end of your HTML -->\n");
        htmEditor.clearSelection();
        $(".html").one("touchstart click", function() {
          htmEditor.setValue("");
        });
      }
      if (sessionStorage.getItem("css")) {
        cssEditor.setValue(sessionStorage.getItem("css"));
        cssEditor.clearSelection();
      }
      if (sessionStorage.getItem("js")) {
        jsEditor.setValue(sessionStorage.getItem("js"));
        jsEditor.clearSelection();
      }
      if (sessionStorage.getItem("use")) {
        use = JSON.parse(sessionStorage.getItem("use"));
      }
      if (sessionStorage.getItem("cssMode")) {
        cssEditor.getSession().setMode(sessionStorage.getItem("cssMode"));
      }
    })();

  })();
  // END ACE Editor

  // Toggle Text Areas from Displaying
  $(".togglePane").on("click", function() {
    panes.close(this);
  });
  $(".console").hide();
  $("#consoleToggle").on("click", function() {
    $(this).toggleClass("active");
    $(".console").toggle();
  });
  $("#previewToggle, #iframeClose").on("click", function() {
    $("#previewToggle").parent().toggleClass("active");
    $("html").toggleClass("modal-open");
  });

  var panes = {
    // Return the number of editor panes displayed
    count: function() {
      var count = 3;
      var items = $(".editorSection .sp");
      items.each(function(el) {
        if ($(items[el]).css("display") === "none") count -= 1;
      });
      return count;
    },
    // Resize panes based upon number currently toggled ON,
    // On toggling an editor pane resize remaining and toggle button class
    close: function(el) {
      var name = el.dataset.editor;
      var count = this.count();
      if (count > 1 || $(el).hasClass("active")) {
        $(el).parent().toggleClass("active");
        $("#" + name + "Pane").toggle();
      } else {
        alert("You Must Have at least one Editor open");
      }
    }
  };

  // Used by preview and download to compile editor panes and "Imports" into valid html
  function buildOutput(consoleJS) {
    var content = {
      html: htmEditor.getValue(),
      style: cssEditor.getValue(),
      js: jsEditor.getValue()
    };

    // If using Autoprefixer, load it first via XMLHTTPRequest but do so only once.
    if (use.Autoprefixer && typeof autoprefixer === "undefined") {
      (function loadAutoprefixer() {
        var xmlHttp = null;
        xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", "http://rawgit.com/ai/autoprefixer-rails/master/vendor/autoprefixer.js", false);
        xmlHttp.send(null);
        var ap = document.createElement("script");
        ap.type = "text/javascript";
        ap.text = xmlHttp.responseText;
        document.getElementsByTagName("head")[0].appendChild(ap);
      })();
    }

    // If using Sass, load it first via XMLHTTPRequest but do so only once.
    // We don't want to include it from the get-go as it's 2 Megabytes!!
    if (use.Sass && typeof Sass === "undefined") {
      (function loadSass() {
        var xmlHttp = null;
        xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", "http://rawgit.com/medialize/sass.js/master/dist/sass.min.js", false);
        xmlHttp.send(null);
        var sass = document.createElement("script");
        sass.id = "sass";
        sass.type = "text/javascript";
        sass.text = xmlHttp.responseText;
        document.getElementsByTagName("head")[0].appendChild(sass);
      })();
    }

    // String to hold elements to build HTML output
    var html = '';
    html += '<!DOCTYPE html>\n';
    html += '<html lang="en">\n';
    html += '<head>\n';
    html += '<meta charset="UTF-8">\n';
    html += '\n<style>\n';
    html += content.style;
    html += '\n</style>\n';
    html += '</head>\n';
    html += '<body>\n';
    html += content.html;
    // true if previewing in the preview pane; false if called by download function.
    html += '\n<script>\n';
    html += content.js;
    html += '\n</script>\n';
    html += '</body>\n';
    html += '</html>';

    return html;
  }

  // Toggle live edit/preview mode. It's sometimes slow or doesn't react well.
  $("#liveEdit").on("click", function() {
    use.liveEdit ? use.liveEdit = false : use.liveEdit = true;
    $(this).parent().toggleClass("active");
  });

  // Publish output from HTML, CSS, and JS textareas in the iframe below
  // after given keyup delay if "use.liveEdit: true".
  htmEditor.getSession().on("change", function(e) {
    if (use.liveEdit) preview(1000);
  });
  cssEditor.getSession().on("change", function(e) {
    if (use.liveEdit) preview(2000);
  });

  // Update preview window AND js console on click of "Run" button
  $("#run").on("click", function() {
    preview();
  });

  function preview(delay) {
    delay = delay || 0;
    var timer = null;
    if (timer) {
      window.clearTimeout(timer);
    }
    timer = window.setTimeout(function() {
      timer = null;
      // pass true as we want the pseudo console.js script
      //console.time('buildOutput'); // start timer for debugging
      var textToWrite = buildOutput(true);

      (document.getElementById("iframe").contentWindow.document).write(textToWrite);
      (document.getElementById("iframe").contentWindow.document).close();
      //console.timeEnd('buildOutput'); // end timer for debugging
    }, delay);
  }

  // Download HTML/CSS/JS
  // Source: http://thiscouldbebetter.wordpress.com/2012/12/18/loading-editing-and-saving-a-text-file-in-html5-using-javascrip/
  $("#download").on("click", function() {
    function destroyClickedElement(event) {
      document.body.removeChild(event.target);
    }

    var $download = document.createElement("a");

    // pass false as we don't want the pseudo console.js script
    var textToWrite = buildOutput(false);
    var textFileAsBlob = new Blob([textToWrite], { type: "text/plain" });
    var fileNameToSaveAs = "index.html";

    $download.download = fileNameToSaveAs;

    if (typeof window.webkitURL === "function") {
      // Chrome
      $download.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
      // Firefox
      $download.href = window.URL.createObjectURL(textFileAsBlob);
    }
    $download.onclick = destroyClickedElement;
    $download.style.display = "none";
    document.body.appendChild($download);
    $download.click();
  });

  // Clear editors with "Clear" button
  $("#clear").on("click", function() {
    htmEditor.setValue("");
    cssEditor.setValue("");
    jsEditor.setValue("");
    sessionStorage.clear();
    (document.getElementById("iframe").contentWindow.document).write("");
    (document.getElementById("iframe").contentWindow.document).close();
  });

  // Save current editor panes to localStorage
  $("#save").on("click", function() {
    var store = {
      html: htmEditor.getValue(),
      css: cssEditor.getValue(),
      js: jsEditor.getValue()
    };
    localStorage.setItem("cloudEdit", JSON.stringify(store));
  });

  // Load into editors from localStorage if exists
  $("#load").on("click", function() {
    var store;
    if (localStorage.cloudEdit) {
      store = JSON.parse(localStorage.cloudEdit);
      cssEditor.setValue(store.css);
      cssEditor.clearSelection();
      htmEditor.setValue(store.html);
      htmEditor.clearSelection();
      jsEditor.setValue(store.js);
      jsEditor.clearSelection();
    } else {
      alert("No previous session found...");
    }
  });

  /* Panel Option */
  var panSet = $('.pane-settings');
  panSet.on('click', function() {
      if ($(this).hasClass('active')) {
        // Hide Current active
        $(this).next().hide();
        $(this).removeClass('active');
      } else {
        // Hide All
        panSet.removeClass('active');
        panSet.next().hide();
        // Show Current
        $(this).next().show();
        $(this).addClass('active');

      }
    })
    /* Panel Option End */

  // Detect a user leaving a page and display a message
  window.onbeforeunload = function(e) {

    // Save current buffers into sessionStorage
    sessionStorage.setItem("html", htmEditor.getValue());
    sessionStorage.setItem("css", cssEditor.getValue());
    sessionStorage.setItem("js", jsEditor.getValue());

    // save selected imports into sessionStorage
    sessionStorage.setItem("use", JSON.stringify(use));
    // and if using LESS/Sass make sure the editor mode is saved as well
    sessionStorage.setItem("cssMode", cssEditor.getSession().getMode().$id);

    // If we haven't been passed the event get the window.event
    e = e || window.event;
    var message = "Your current session may be lost..";
    // // For IE6-8 and Firefox prior to version 4
    if (e) e.returnValue = message;
    // // For Chrome, Safari, IE8+ and Opera 12+
    return message;
  };
  var menuSlector = '.assets';
  var toggler = '#assets';
  var pagewrapper = '#wrapper,footer';
  var menuwidth = '300px';
  var menuneg = '-300px';
  $("footer").on("click", toggler, function(e) {
    var selected = $(this).hasClass('slide-active');    
    $(menuSlector).stop().animate({
      left: selected ? menuneg : '0px'
    });
    $(pagewrapper).stop().animate({
      left: selected ? '0px' : menuwidth
    });
    $(this).toggleClass('slide-active');
    $(menuSlector).toggleClass('slide-active');
    $('#wrapper, body').toggleClass('slide-active');
  });  
})();
