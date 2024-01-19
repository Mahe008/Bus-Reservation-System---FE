plus = document.querySelectorAll(".plus");
plus.forEach(function (element) {
    element.addEventListener("click", function (event) {
        parentElem = event.target.parentElement.parentElement.querySelector(".ans");

        if (parentElem.style.display === "block") {
            parentElem.style.display = "none";
            event.target.textContent = "+";
        } else {
            parentElem.style.display = "block";
            event.target.textContent = "-";
        }
    });
});

caretUp = document.querySelectorAll(".bi-caret-down-fill");
caretUp.forEach((element) => {
    element.addEventListener("click", (e) => {
        paren = e.target.parentElement.parentElement.querySelector("ul");
        if (paren.style.display === "block") {
            paren.style.display = "none";
            e.target.setAttribute("class", "bi bi-caret-down-fill");
        } else {
            paren.style.display = "block";
            e.target.setAttribute("class", "bi bi-caret-up-fill");
        }
    });
});

