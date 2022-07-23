function showDetails() {
    let details = document.getElementById("details");
    let about = document.getElementById("about");

    about.style.animationName = "to_details";
    about.style.animationDuration = "1000ms";
    about.style.animationTimingFunction = "ease-in-out";
    about.style.animationFillMode = "forwards";

    details.style.animationName = "to_details";
    details.style.animationDuration = "1000ms";
    details.style.animationTimingFunction = "ease-in-out";
    details.style.animationFillMode = "forwards";
    details.style.visibility = "visible";

    let Interval = setInterval(()=>{
        if(about.style.animationPlayState != "running") {
            about.style.visibility = "hidden";
            clearInterval(Interval);
        }
    }, 50);
}

function showAbout() {
    let about = document.getElementById("about");
    let details = document.getElementById("details");

    about.style.animationName = "to_about";
    about.style.animationDuration = "1000ms";
    about.style.animationTimingFunction = "ease-in-out";
    about.style.animationFillMode = "forwards";
    about.style.visibility = "visible";

    details.style.animationName = "to_about";
    details.style.animationDuration = "1000ms";
    details.style.animationTimingFunction = "ease-in-out";
    details.style.animationFillMode = "forwards";

    let Interval = setInterval(()=>{
        if(details.style.animationPlayState != "running") {
            details.style.visibility = "hidden";
            clearInterval(Interval);
        }
    }, 50);
}

// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  window.addEventListener('DOMContentLoaded', () => {
    // We execute the same script as before
    document.getElementById("details").style.visibility = "hidden";
  });

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);