var pageLoaded;  // Declare var for when page is loaded

// ----- Keep content hidden until page has loaded, for smooth fade in -----
    function hasLoaded() {
        var pageLoaded = true;  // Set boolean to true
        document.body.style.visibility = "visible";  // Set document content to visible
    }
// -----

// ----- Assign event listener to window, run hasLoaded() when it has loaded.
    window.addEventListener('load', hasLoaded);
// -----


// ----- Make projects fade in when scrolling
    window.addEventListener('scroll', (event) => {  // Add event listener to scrolling
      var yPos = window.scrollY;  // Get Y position and assign to variable yPos
      if (yPos >= 180) {  // If yPos is more than 180
        if(overview.classList.contains('is-visible')){  // And if overview contains "is-visible" in classlist
            // Do nothing
        }
        else{   // Otherwise add "is-visible" to classlist
            overview.classList.add('is-visible');
        }
      }
      else if(overview.classList.contains('is-visible')) { // Otherwise if it already contains "is-visible", remove it
        overview.classList.remove('is-visible');
      }
      else {

      }
    });
// -----