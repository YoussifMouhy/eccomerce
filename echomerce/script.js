function myFunction() {
    var elements = document.getElementsByClassName("product-2");
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].style.display === "none") {
            elements[i].style.display = "block";
        } else {
            elements[i].style.display = "none";
        }
    }
}
