var hide = document.getElementById("hiding");
var toggle = document.getElementById("btn");
toggle.addEventListener('click', function () {
    if (hide.style.display === "none") {
        hide.style.display = "block";
    }
    else {
        hide.style.display = "none";
    }
});
