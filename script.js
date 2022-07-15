console.log("calculater")
let screen = document.getElementById("screen")
let screentext = "";

let buttons = document.querySelectorAll("button")

for (item of buttons) {
    item.addEventListener("click", function (e) {
        let buttonstext = e.target.innerText;
        console.log(buttonstext)

        console.log(screen.value)

        if (buttonstext == 'x') {
            buttonstext = "*"
            screentext += buttonstext;
            screen.value = screentext
        }
        else if (buttonstext == 'C') {
            screentext = ''
            screen.value = screentext


        }
        else if (buttonstext == '=') {
            screen.value = "=" +eval(screen.value)
        }
        else {
            screentext += buttonstext
            screen.value = screentext
        }




    })


}
