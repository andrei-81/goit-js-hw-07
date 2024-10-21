const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");


textInput.addEventListener("input", event => {
    if (event.currentTarget.value.trim().length > 0) {
        var textToPut = event.currentTarget.value.trim()
        if(textToPut.endsWith(" ")) {
            output.textContent = textToPut.substring(0, textToPut.length-2)
        }
        else {
            output.textContent = textToPut
        }
    }
    else {
        output.textContent = "Anonymous"
    }
  });