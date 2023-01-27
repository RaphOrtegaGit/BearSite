function myFunction(x) {
    var y = document.getElementById("nav-collapse");
    var btn = document.getElementById("navbtn");
    var fb = document.getElementById("fb");
    var twitter = document.getElementById("twitter");
    var yt = document.getElementById("youtube");

    if (x.matches) { // If media query matches
        y.style.display = 'none';
        btn.style.display = 'block';

    } else {

        btn.style.display = 'none';
        y.style.display = 'block';
        fb.innerHTML = "";
        twitter.innerHTML = "";
        yt.innerHTML = "";
    }
}


navbtn.addEventListener('click', (e) => {
    var y = document.getElementById("nav-collapse");
    console.log(event.detail)
    var fb = document.getElementById("fb");
    var twitter = document.getElementById("twitter");
    var yt = document.getElementById("youtube");
    if (y.style.display === "none") {
        y.style.display = "block";
        fb.innerHTML = " | Facebook";
        twitter.innerHTML = " | Twitter";
        yt.innerHTML = " | Youtube";
    } else {
        y.style.display = "none";
        fb.innerHTML = "";
        twitter.innerHTML = "";
        yt.innerHTML = "";
    }
})

function submitForm() {
    document.getElementById("contactForm").submit();
}


var x = window.matchMedia("(max-width: 600px)");

myFunction(x);

x.addListener(myFunction);