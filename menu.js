
const heart_btn = document.querySelectorAll('.heart_btn');
for (let i = 0; i < heart_btn.length; i++) {
    heart_btn[i].addEventListener("click", function () {
        console.log("button clicked");
        if (heart_btn[i].classList.contains("not_clicked")) {
            console.log("empty button clicked");
            heart_btn[i].style.background = "url('heart_filled.png')";
            heart_btn[i].style.backgroundSize = "cover";
            heart_btn[i].classList.remove("not_clicked");
        } else {
            console.log("filled button clicked");
            heart_btn[i].style.background = "url('heart_empty.png')";
            heart_btn[i].style.backgroundSize = "cover";
            heart_btn[i].classList.add("not_clicked");
        }
    });
}