      function advanceItem(prev) {
          var focussableElements = '[tabindex]:not([disabled]):not([tabindex="-1"])';
          var focussable = Array.prototype.filter.call(document.body.querySelectorAll(focussableElements),
              function(element) {
                  return element.offsetWidth > 0 || element.offsetHeight > 0 
              });
          var index = focussable.indexOf(document.activeElement);
          if ( index < 0 ) index = 0;
          var len = focussable.length;
          var incr = prev ? -1 : 1;
          var new_index = (index + incr) % len;
          if ( new_index < 0 ) new_index = len - 1;
          focussable[new_index].focus();
          location.hash = focussable[new_index].id;
          focussable[new_index].scrollIntoView();
      }

      window.addEventListener('keydown', function(e) {
          if (e.keyIdentifier == 'U+000A' || e.keyIdentifier == 'Enter' || e.keyCode == 13 || e.keyCode == 39) {
              e.preventDefault();
              advanceItem();
              return false;
          }
          if (e.keyCode == 37) {
              e.preventDefault();
              advanceItem(true);
              return false;
          }
      }, true);
