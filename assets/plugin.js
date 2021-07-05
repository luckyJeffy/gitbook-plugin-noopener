require(['gitbook', 'jQuery'], function (gitbook, $) {
  var init = function () {
    var links = document.links;
    var linkCount = links.length;

    for (var linkItemIndex = 0; linkItemIndex < linkCount; linkItemIndex++) {
      var linkElement = links[linkItemIndex];

      if (linkElement.hostname !== window.location.hostname) {
        linkElement.target = "_blank";
        // TODO Accept the plugin variables to set attribute value
        linkElement.setAttribute("rel", "noopener noreferrer");
        linkElement.classList.add('link__external');
      } else {
        linkElement.classList.add('link__local');
      }
    }
  }

  gitbook.events.bind('page.change', function () {
    init()
  });
});
