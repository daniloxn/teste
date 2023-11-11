document.getElementById("chk").addEventListener("change", function () {
    if (this.checked) {
        document.getElementById("body").style.backgroundColor = "#191b1d";
    } else {
        document.getElementById("body").style.backgroundColor = "white";
    }
});
