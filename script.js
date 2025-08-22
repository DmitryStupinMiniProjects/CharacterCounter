const inputElement = document.querySelector("[data-js-input]")
const charsCounterElement = document.querySelector("[data-js-chars]")
const charsNospaceCounterElement = document.querySelector("[data-js-chars-nospace]")
const wordsCounterElement = document.querySelector("[data-js-words]")
const clearButtonElement = document.querySelector("[data-js-clear]")

const countChars = () => {
  return inputElement.value.length
}

const countCharsNospace = () => {
  return inputElement.value.replace(/\s/g, "").length
}

const countWords = () => {
  const words = inputElement.value.trim().split(/\s+/)
  
  return inputElement.value.trim() === "" ? 0 : words.length
}

const updateCounters = () => {
  charsCounterElement.textContent = countChars()
  charsNospaceCounterElement.textContent = countCharsNospace()
  wordsCounterElement.textContent = countWords()
}

const clearInput = () => {
  inputElement.value = ''
  updateCounters()
}

inputElement.addEventListener("input", updateCounters)


clearButtonElement.addEventListener('click', clearInput)