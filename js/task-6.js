function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes")
const inputElement = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]')
const destroyButton = document.querySelector('[data-destroy]')

createButton.addEventListener('click', createBoxes)
destroyButton.addEventListener('click', destroyBoxes)

let boxesArray = []

function createBoxes(event) {
  let amount = getInputValue()
  if (amount == '') {
    amount = 1
  }
  if( amount < 1 || amount > 100) {
    return alert('amount should be between 1 and 100')
  }
  const arrayBefore = boxesArray.length
  for (let i = 0; i < amount; i++) {
    const size = ( arrayBefore + i ) * 10 + 30
    const color = getRandomHexColor()
    boxesArray.push(`<div class="colored-box" style="height: ${size}px; width: ${size}px; background-color: ${color};"></div>`)
  }
  const blockToAdd = boxesArray.join(" ")
  boxes.innerHTML = ""
  boxes.insertAdjacentHTML("beforeend", blockToAdd)  
}

function destroyBoxes() {
  const amount = getInputValue()
  boxes.innerHTML = ""
  if(amount == '' || amount >= boxesArray.length) {
    boxesArray = []
    return
  }
  boxesArray = boxesArray.slice(0, boxesArray.length - amount)
  const blockToAdd = boxesArray.join(" ")
  boxes.insertAdjacentHTML("beforeend", blockToAdd)
}

function getInputValue() {
  const value = inputElement.value
  inputElement.value = ''
  return value
}
