var name = []


for (let i = 0; i < heart_btn.length; i++) {
    heart_btn[i].addEventListener("click", function () {
        console.log("button clicked");
        if (heart_btn[i].classList.contains("not_clicked")) {
            console.log("empty button clicked2");
            document.cookie = newJson;
            alert(document.cookie);

        } else {
            console.log("filled button clicked2");
        }

    });
}



