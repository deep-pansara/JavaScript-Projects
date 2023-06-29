
const userInput = document.querySelector(".input");
const pressedKeys = document.querySelector(".pressedKeys");
const remainingKeys = document.querySelector(".remainingKeys");

userInput.addEventListener("keyup", () => {
    keyPressCounter();
});
keyPressCounter = () => {
    pressedKeys.innerHTML = userInput.value.length;
    remainingKeys.innerHTML = userInput.getAttribute("maxLength") - userInput.value.length;

    //You can also use below logic, 50 is pre-set number for No. of Remaining Keys
    //remainingKeys.innerHTML = 50 - userInput.value.length;   
}

keyPressCounter();
//Use this Fuctioncall for set Pressed Keys to Zero on Refresh