// When the user scrolls the page, execute stickyNav 
window.onscroll = function() {stickyNav()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
	if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//lazy load scripts

document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
      //  lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    }
    //move fold for lazy load - 3000px resolution based on more than 1 fold of 1920px for iphone6+ and galaxy s6
    		,{rootMargin: "0px 0px 3000px 0px"}
    );

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Fall back to event listener code for browsers without Intersection Observer support
    document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    let active = false;
    
    const lazyLoad = function() {
    if (active === false) {
    active = true;
    
    setTimeout(function() {
    lazyImages.forEach(function(lazyImage) {
    if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
    lazyImage.src = lazyImage.dataset.src;
    lazyImage.srcset = lazyImage.dataset.srcset;
    lazyImage.classList.remove("lazy");
    
    lazyImages = lazyImages.filter(function(image) {
    return image !== lazyImage;
    });
    
    if (lazyImages.length === 0) {
    document.removeEventListener("scroll", lazyLoad);
    window.removeEventListener("resize", lazyLoad);
    window.removeEventListener("orientationchange", lazyLoad);
    }
    }
    });
    
    active = false;
    }, 200);
    }
    };
    
    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
    });
    
   
    //end fallback method
  }
});

// Laxy load script for videos

document.addEventListener("DOMContentLoaded", function() {
  var lazyVideos = [].slice.call(document.querySelectorAll("video.vlazy"));

  if ("IntersectionObserver" in window) {
    var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(video) {
        if (video.isIntersecting) {
          for (var source in video.target.children) {
            var videoSource = video.target.children[source];
            if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
              videoSource.src = videoSource.dataset.src;
            }
          }

          video.target.load();
          video.target.classList.remove("lazy");
          lazyVideoObserver.unobserve(video.target);
        }
      });
    }
    ,{rootMargin: "0px 0px 3000px 0px"}
    );

    lazyVideos.forEach(function(lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  }
});
