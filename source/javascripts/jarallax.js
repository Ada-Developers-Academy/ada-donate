var uaCheck = {
  navigator: window.navigator,
  isIE: function() {
    if(!this.navigator.userAgent) return false;
    return Boolean(this.navigator.userAgent.match(/(MSIE)/i)) ||
           Boolean(this.navigator.userAgent.match(/(Trident)/i));
  },
  isEdge: function() {
    if(!this.navigator.userAgent) return false;
    return this.navigator.userAgent.indexOf('Edge') > -1;
  },
  isMicrosoftBrowser: function() {
    return this.isEdge() || this.isIE();
  },
  isIos: function() {
    return /iPad|iPhone|iPod/.test(this.navigator.userAgent) && !window.MSStream;
  }
};

var observerCallback = function observerCallback(entries, observer) {
  entries.forEach(function(entry) {
    var element = $('.jarallax-img', entry.target)[0];
    if(entry.intersectionRatio > 0 || entry.isIntersecting) {
      element.style.zIndex = -40;
    } else {
      element.style.zIndex = -100;
    }
  });
};

var addObserver = function addObserver(element) {
  var observer = new IntersectionObserver(observerCallback, {
    rootMargin: "20px 0px 10px 0px"
  });

  observer.observe(element);
};

$(function() {
  var enable = !uaCheck.isMicrosoftBrowser() &&
               !uaCheck.isIos() &&
               window.innerWidth >= 728;

  if(enable) {
    $(document.documentElement).addClass('jarallax-enabled');
    $('.jarallax').each(function() {
      addObserver(this);
    });
  }
});
