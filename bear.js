function myFunction(x) {
    // var y = document.getElementById("nav-collapse");
    var btn = document.getElementById("navbtn");

    if (x.matches) { // If media query matches
        // y.style.display = 'none';
        btn.style.display = 'block';

    } else {

        btn.style.display = 'none';
        // y.style.display = 'block';
    }
}


navbtn.addEventListener('click', (e) => {
    var y = document.getElementById("nav-collapse");
    console.log(event.detail)

    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
})


var x = window.matchMedia("(max-width: 450px)");

myFunction(x);

x.addListener(myFunction);