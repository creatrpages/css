// Navbar toogler
function dropNavbar() {
    var element = document.getElementById("navbar");
    element.classList.remove("hide");
}

function dropNavbar() {
    var element = document.getElementById("navbar");
    element.classList.remove("hide");
}



function dropNavbar() {
    var element = document.getElementById("navbar");

    if (element.classList) {
        element.classList.toggle("hide");
    } else {
        var classes = element.className.split(" ");
        var i = classes.indexOf("hide");

        if (i >= 0)
            classes.splice(i, 1);
        else
            classes.push("hide");
        element.className = classes.join(" ");
    }
}


// Ripple effect

var btn = document.querySelectorAll('.button');
btn.forEach(el => {
    el.style.position = 'relative';
    el.style.overflow = 'hidden';
    el.addEventListener('click', function (e) {
        var x = e.offsetX;
        var y = e.offsetY;

        var ripples = document.getElementsByClassName('ripple');

        if (ripples.length < 1000) { // this restricts the user from creating lots of ripples
            var ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            this.appendChild(ripple);

            setTimeout(function () {
                ripple.remove();
            }, 1000);
        }
    });
})


// Form Select



function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}