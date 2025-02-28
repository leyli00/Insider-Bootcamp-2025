let start_btn = document.getElementById("start-btn");
let reset_btn = document.getElementById("reset-btn");
let number_input = document.getElementById("number");
let counter_value = document.getElementById("counter-p");


start_btn.addEventListener("click", () => {
    let input_value = number_input.value;
    counter_value.textContent = input_value;
    number_input.value = "";

    interval = setInterval(function () {
        if (input_value > 0) {
            input_value--;
            counter_value.textContent = input_value;
        }
        else {
            clearInterval(interval);
        }
    }, 1000)
});

reset_btn.addEventListener("click", () => {
    clearInterval(interval);
    counter_value.textContent = "0";
    number_input.value = "";
});


